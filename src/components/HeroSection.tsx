"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    const hero = heroRef.current;
    if (!container || !hero) return;

    const getSize = () => ({
      width: hero.clientWidth || window.innerWidth,
      height: hero.clientHeight || window.innerHeight,
    });

    let { width, height } = getSize();

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#e07200");

    // 2. Narrow-FOV Perspective Camera
    const fov = 26;
    const camera = new THREE.PerspectiveCamera(fov, width / height, 10, 3000);
    const getCameraZ = (h: number) =>
      h / (2 * Math.tan(THREE.MathUtils.degToRad(fov / 2)));
    camera.position.set(0, 0, getCameraZ(height));
    camera.lookAt(0, 0, 0);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;

    Object.assign(renderer.domElement.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "block",
    });
    container.appendChild(renderer.domElement);

    // 4. Grid Config
    const cubeSize = 24;
    const cubeDepth = 54;
    const gap = 1.8;
    const step = cubeSize + gap;
    const hoverRadius = 175;
    const radiusSq = hoverRadius * hoverRadius;
    const smoothness = 0.14;

    const colorOrangeBase = new THREE.Color("#FF8200");
    const colorWarmTint = new THREE.Color("#ffd9b3");
    const colorPureWhite = new THREE.Color("#ffffff");
    const colorRecessedOffWhite = new THREE.Color("#f0ebe4");

    // 5. Custom Shader with sRGB Output Conversion
    const material = new THREE.ShaderMaterial({
      vertexShader: /* glsl */ `
        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vColor;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          #ifdef USE_INSTANCING_COLOR
            vColor = instanceColor;
          #else
            vColor = vec3(1.0, 0.51, 0.0);
          #endif
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vColor;

        vec3 linearToSRGB(vec3 linearRGB) {
          bvec3 cutoff = lessThan(linearRGB, vec3(0.0031308));
          vec3 higher = vec3(1.055) * pow(linearRGB, vec3(1.0 / 2.4)) - vec3(0.055);
          vec3 lower = linearRGB * vec3(12.92);
          return mix(higher, lower, cutoff);
        }

        void main() {
          vec3 srgbCol = linearToSRGB(vColor);

          if (vNormal.z > 0.5) {
            vec2 edgeDist = min(vUv, 1.0 - vUv);
            float d = min(edgeDist.x, edgeDist.y);

            float outerBorder = smoothstep(0.0, 0.065, d);
            float innerHighlight = smoothstep(0.065, 0.16, d);

            vec3 borderShade = srgbCol * vec3(0.84, 0.80, 0.77);
            srgbCol = mix(borderShade, srgbCol, outerBorder);

            float sheen = (vUv.y - vUv.x) * 0.035 * innerHighlight;
            srgbCol += vec3(sheen);
          } else {
            float sideLight = 0.74;
            if (vNormal.y > 0.5) sideLight = 0.92;
            else if (vNormal.x < -0.5) sideLight = 0.85;
            else if (vNormal.x > 0.5) sideLight = 0.70;
            else if (vNormal.y < -0.5) sideLight = 0.62;

            srgbCol = srgbCol * sideLight;
          }

          gl_FragColor = vec4(clamp(srgbCol, 0.0, 1.0), 1.0);
        }
      `,
    });

    let instancedMesh: THREE.InstancedMesh | null = null;
    let geometry: THREE.BoxGeometry | null = null;

    let count = 0;
    let baseX: Float32Array;
    let baseY: Float32Array;
    let currentNormDist: Float32Array;
    let currentBlend: Float32Array;
    const dummy = new THREE.Object3D();
    const tempColor = new THREE.Color();

    const buildGrid = (w: number, h: number) => {
      if (instancedMesh) {
        scene.remove(instancedMesh);
        geometry?.dispose();
      }

      const cols = Math.ceil(w / step) + 6;
      const rows = Math.ceil(h / step) + 6;
      count = cols * rows;

      geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeDepth);
      instancedMesh = new THREE.InstancedMesh(geometry, material, count);
      instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

      baseX = new Float32Array(count);
      baseY = new Float32Array(count);
      currentNormDist = new Float32Array(count);
      currentBlend = new Float32Array(count);

      const startX = -((cols - 1) * step) / 2;
      const startY = -((rows - 1) * step) / 2;

      let idx = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = startX + c * step;
          const y = startY + r * step;

          baseX[idx] = x;
          baseY[idx] = y;
          currentNormDist[idx] = 1.0;
          currentBlend[idx] = 0.0;

          dummy.position.set(x, y, -cubeDepth / 2);
          dummy.scale.set(1, 1, 1);
          dummy.updateMatrix();
          instancedMesh.setMatrixAt(idx, dummy.matrix);
          instancedMesh.setColorAt(idx, colorOrangeBase);
          idx++;
        }
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      if (instancedMesh.instanceColor) {
        instancedMesh.instanceColor.needsUpdate = true;
      }
      scene.add(instancedMesh);
    };

    buildGrid(width, height);

    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2();
    const hitPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const hitPoint = new THREE.Vector3();
    const pointer = new THREE.Vector2(99999, 99999);
    let isPointerInside = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        isPointerInside = false;
        return;
      }

      mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseNDC, camera);
      if (raycaster.ray.intersectPlane(hitPlane, hitPoint)) {
        pointer.x = hitPoint.x;
        pointer.y = hitPoint.y;
        isPointerInside = true;
      }
    };

    const handleMouseLeave = () => {
      isPointerInside = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const resizeObserver = new ResizeObserver(() => {
      const newSize = getSize();
      if (newSize.width === 0 || newSize.height === 0) return;

      width = newSize.width;
      height = newSize.height;

      camera.aspect = width / height;
      camera.position.z = getCameraZ(height);
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      buildGrid(width, height);
    });
    resizeObserver.observe(hero);

    const smoothstep = (min: number, max: number, val: number) => {
      const x = Math.max(0, Math.min(1, (val - min) / (max - min)));
      return x * x * (3 - 2 * x);
    };

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!instancedMesh) return;

      let needsUpdate = false;

      for (let i = 0; i < count; i++) {
        let targetBlend = 0;
        let targetNorm = 1;

        if (isPointerInside) {
          const dx = baseX[i] - pointer.x;
          const dy = baseY[i] - pointer.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < radiusSq) {
            targetBlend = 1;
            targetNorm = Math.sqrt(distSq) / hoverRadius;
          }
        }

        const blendDiff = targetBlend - currentBlend[i];
        const normDiff = targetNorm - currentNormDist[i];

        if (
          Math.abs(blendDiff) > 0.001 ||
          currentBlend[i] > 0.001 ||
          Math.abs(normDiff) > 0.001
        ) {
          currentBlend[i] += blendDiff * smoothness;
          if (targetBlend > 0.5) {
            currentNormDist[i] += normDiff * 0.22;
          }

          const blend = currentBlend[i];
          const r = currentNormDist[i];

          const centerDip = (1 - smoothstep(0.14, 0.34, r)) * -14;
          const ringRise =
            smoothstep(0.18, 0.48, r) * (1 - smoothstep(0.55, 0.98, r)) * 44;

          const heightOffset = (centerDip + ringRise) * blend;
          const zPos = -cubeDepth / 2 + heightOffset;

          const scaleOffset = (centerDip * 0.003 + ringRise * 0.0022) * blend;
          const scaleXY = 1 + scaleOffset;

          dummy.position.set(baseX[i], baseY[i], zPos);
          dummy.scale.set(scaleXY, scaleXY, 1);
          dummy.updateMatrix();
          instancedMesh.setMatrixAt(i, dummy.matrix);

          if (r < 0.45) {
            const t = smoothstep(0.15, 0.45, r);
            tempColor.copy(colorRecessedOffWhite).lerp(colorPureWhite, t);
          } else if (r < 0.78) {
            const t = smoothstep(0.52, 0.78, r);
            tempColor.copy(colorPureWhite).lerp(colorWarmTint, t);
          } else {
            const t = smoothstep(0.78, 1.0, r);
            tempColor.copy(colorWarmTint).lerp(colorOrangeBase, t);
          }

          tempColor.lerp(colorOrangeBase, 1 - blend);
          instancedMesh.setColorAt(i, tempColor);

          needsUpdate = true;
        }
      }

      if (needsUpdate) {
        instancedMesh.instanceMatrix.needsUpdate = true;
        if (instancedMesh.instanceColor) {
          instancedMesh.instanceColor.needsUpdate = true;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry?.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-screen min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-[#FF8200] px-6 text-center"
    >
      {/* 3D Cubes Canvas */}
      <div
        ref={canvasContainerRef}
        className="pointer-events-none absolute inset-0 z-0 select-none"
        aria-hidden="true"
      />

      {/* Soft Radial Readability Halo (Keeps 3D cubes visible while preventing visual noise behind letters) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_62%_48%_at_50%_50%,rgba(255,148,38,0.72)_0%,rgba(255,130,0,0.22)_60%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Centered Hero Typography (Inspired by your reference layout) */}
      <div className="pointer-events-none relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        {/* Bold 2-Line Headline */}
        <h1 className="text-5xl font-black leading-[1.03] tracking-[-0.03em] text-[#0F0F12] sm:text-7xl md:text-[84px]">
          <span className="block">
            Digital{" "}
            {/* Pure White Highlight Word with Subtle Dark Edge Protection so it NEVER disguises on white cubes */}
            <span
              className="text-white"
              style={{
                textShadow:
                  "0 3px 0 #0F0F12, 0 8px 24px rgba(15, 15, 18, 0.28)",
              }}
            >
              Dominance.
            </span>
          </span>

          <span className="relative mt-1 block">
            Business Excellence.
            {/* Curved Arch Underline Brush (Overlaps bottom edge of letters like reference) */}
            <svg
              viewBox="0 0 900 38"
              fill="none"
              preserveAspectRatio="none"
              className="mx-auto -mt-2.5 h-5 w-[94%] sm:-mt-3.5 sm:h-7 md:-mt-4 md:h-8"
              aria-hidden="true"
            >
              {/* Dark shadow stroke behind the white arch for 100% visibility even over white hover cubes */}
              <path
                d="M 12 28 Q 450 6 888 28"
                stroke="#0F0F12"
                strokeWidth="15"
                strokeLinecap="round"
                transform="translate(0, 3)"
              />
              {/* Crisp White Curved Arch Line */}
              <path
                d="M 12 28 Q 450 6 888 28"
                stroke="#FFFFFF"
                strokeWidth="12"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Clean High-Contrast Description (Italicized & crisp dark slate) */}
        <p className="mt-6 max-w-2xl text-base font-semibold italic leading-relaxed text-[#141418] sm:text-xl md:text-[21px]">
          Empowering brands with high-speed execution, bulletproof
          architecture, and conversion-engineered digital products.
        </p>

        {/* Bottom CTA Row (Pill Button + Secondary Action/Contact) */}
        <div className="pointer-events-auto mt-9 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3.5 rounded-full bg-[#0F0F12] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_14px_30px_rgba(15,15,18,0.28)] transition-all duration-200 hover:scale-105 hover:bg-zinc-800 sm:px-9 sm:py-4.5 sm:text-sm"
          >
            <span>Start Your Project</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          <a
            href="#portfolio"
            className="text-sm font-extrabold tracking-wide text-[#0F0F12] underline-offset-4 transition-opacity hover:underline hover:opacity-80 sm:text-base"
          >
            View Case Studies →
          </a>
        </div>
      </div>
    </section>
  );
}