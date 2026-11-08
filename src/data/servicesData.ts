export interface ServiceItem {
  slug: string;
  id: string;
  title: string;
  shortDesc: string;
  tagline: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  overview: string;
  capabilities: {
    title: string;
    desc: string;
    deliverables: string[];
  }[];
  workflow: {
    step: string;
    phase: string;
    details: string;
  }[];
}

export const SERVICES_DATA: Record<string, ServiceItem> = {
  'ai-automation': {
    slug: 'ai-automation',
    id: '01',
    title: 'AI Automation & Solutions',
    shortDesc: 'Smart operational automations and modern model integrations to scale workflows.',
    tagline: 'Autonomous Intelligence & Pipeline Engineering',
    tags: ['Custom Workflows', 'API Integrations', 'AI Agents'],
    metrics: [
      { value: '80%+', label: 'Manual Ops Reductions' },
      { value: '<120ms', label: 'Vector Query Retrieval' },
      { value: '24/7', label: 'Zero-Downtime Autonomous Pipeline' },
    ],
    overview:
      'We architect deterministic AI workflows and custom LLM microservices. From agentic tool-calling layers to enterprise webhook synchronization, our solutions eliminate operational bottlenecks.',
    capabilities: [
      {
        title: 'Custom Agentic Workflows',
        desc: 'Autonomous multi-step agents that execute research, data validation, and CRM tasks with strict logic bounds.',
        deliverables: ['Custom LLM Prompts & Chains', 'Human-in-the-loop Gates', 'Automated Triage Pipelines'],
      },
      {
        title: 'API & Microservice Integrations',
        desc: 'Connecting model outputs to ERPs, Slack bots, Stripe, and internal databases with real-time webhooks.',
        deliverables: ['FastAPI / Node.js Connectors', 'Secure Auth Handshakes', 'Rate-Limiting Middleware'],
      },
      {
        title: 'Knowledge Bases & Vector RAG',
        desc: 'Grounding LLMs into your private business data with semantic search, embeddings, and vector databases.',
        deliverables: ['Vector DB Setup', 'Document Parsers', 'Context Window Caching'],
      },
    ],
    workflow: [
      { step: '01', phase: 'Process Audit', details: 'Identifying high-friction repetitive operations and manual handoffs.' },
      { step: '02', phase: 'Architecture & PoC', details: 'Prototyping vector pipelines, prompts, and failover endpoints.' },
      { step: '03', phase: 'Production Hardening', details: 'Telemetry, logging, rate limits, and seamless team onboarding.' },
    ],
  },

  'web-development': {
    slug: 'web-development',
    id: '02',
    title: 'Web Development',
    shortDesc: 'Lightning-fast, SEO-optimized web applications engineered for scalability.',
    tagline: 'High-Performance Next.js & Cloud Architectures',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    metrics: [
      { value: '99/100', label: 'Lighthouse Performance Score' },
      { value: '<250ms', label: 'Global Serverless Edge Latency' },
      { value: '100%', label: 'Strict TypeScript Type-Safety' },
    ],
    overview:
      'We construct modern, edge-rendered web platforms that prioritize core web vitals, dynamic responsiveness, and clean codebase longevity. No bloated WordPress themes—pure engineered code.',
    capabilities: [
      {
        title: 'Next.js Scalable Architecture',
        desc: 'Server-side rendering, streaming interfaces, and optimal bundle size management for heavy-traffic products.',
        deliverables: ['App Router Layouts', 'Server Actions & API Routes', 'Micro-Frontend Modularization'],
      },
      {
        title: 'Type-Safe Full-Stack Systems',
        desc: 'Complete end-to-end type safety connecting backend schemas directly to React components.',
        deliverables: ['Prisma / Drizzle ORM', 'Zod Input Validations', 'Strict Type Enforcement'],
      },
      {
        title: 'Interactive Studio Motion',
        desc: 'Micro-interactions and fluid physics using Tailwind CSS and Framer Motion without blocking the main JS thread.',
        deliverables: ['Glassmorphic Design Tokens', 'Hardware-Accelerated UI', 'Accessible Motion Toggles'],
      },
    ],
    workflow: [
      { step: '01', phase: 'Technical Blueprint', details: 'Database schema, component architecture, and API boundary definitions.' },
      { step: '02', phase: 'Rapid Core Sprint', details: 'Weekly staged deployments directly to production-identical URLs.' },
      { step: '03', phase: 'Vitals & SEO Lock', details: 'Static asset compression, caching headers, and structured schema tags.' },
    ],
  },

  'app-development': {
    slug: 'app-development',
    id: '03',
    title: 'App Development',
    shortDesc: 'Native-feel mobile applications with fluid interactions and rock-solid architecture.',
    tagline: 'Fluid Flutter & Cross-Platform Mobile Engineering',
    tags: ['Flutter', 'iOS & Android', 'Cross-Platform'],
    metrics: [
      { value: '60 FPS', label: 'Fluid Motion Rendering' },
      { value: '1 Codebase', label: 'Unified iOS & Android Core' },
      { value: 'Offline-First', label: 'Instant SQLite Sync' },
    ],
    overview:
      'We craft cross-platform mobile apps that match native performance benchmarks. Leveraging Flutter and Dart, we deliver single-source codebases with intuitive gesture mechanics and deep hardware integration.',
    capabilities: [
      {
        title: 'Flutter Cross-Platform Engine',
        desc: 'Deploy identical logic and responsive pixel-perfect visuals across both the Apple App Store and Google Play Store.',
        deliverables: ['Custom Widget Libraries', 'State Management (Bloc/Riverpod)', 'Platform Channel Bridges'],
      },
      {
        title: 'Offline-First Data Synchronization',
        desc: 'Keep users engaged during spotty connectivity with local SQLite caching and optimistic UI updates.',
        deliverables: ['Background Sync Workers', 'Encrypted Local Storage', 'Conflict Resolution Engines'],
      },
      {
        title: 'Real-Time Hardware Integrations',
        desc: 'Harness camera feeds, WebRTC low-latency streaming, push notifications, and GPS tracking.',
        deliverables: ['Push Notification Payloads', 'Sensor Interfacing', 'Biometric Auth Integration'],
      },
    ],
    workflow: [
      { step: '01', phase: 'Prototype Validation', details: 'Figma interactive component translation and UX navigation architecture.' },
      { step: '02', phase: 'Engine & API Wiring', details: 'State stores, authentication tokens, and real-time socket connections.' },
      { step: '03', phase: 'App Store Submission', details: 'TestFlight beta distribution, metadata approval, and release packaging.' },
    ],
  },

  'graphic-brand-identity': {
    slug: 'graphic-brand-identity',
    id: '04',
    title: 'Graphic & Brand Identity',
    shortDesc: 'Distinctive brand identities and systems designed to leave a memorable impression.',
    tagline: 'Strategic Visual Systems & Typography Architecture',
    tags: ['Visual Identity', 'Logos', 'Brand Guidelines'],
    metrics: [
      { value: '100%', label: 'Vector Scalability' },
      { value: '50+ Pages', label: 'Comprehensive System Manual' },
      { value: 'Cross-Media', label: 'Print, Web & Social Compatibility' },
    ],
    overview:
      'A great digital platform requires cohesive visual authority. We build distinctive typographic identities, scalable geometric logos, and complete brand tokens engineered for high-growth tech companies.',
    capabilities: [
      {
        title: 'Logo Marks & Typography Systems',
        desc: 'Crafting memorable, balanced logomarks alongside paired display and monospace typography.',
        deliverables: ['Master SVG Vector Sets', 'Monochrome & Reversed Marks', 'Font Licensing Guidelines'],
      },
      {
        title: 'Comprehensive Brand Books',
        desc: 'Strict design documentation ensuring any designer or marketer maintains exact brand fidelity.',
        deliverables: ['Color Palette (HEX/RGB/Pantone)', 'Spacing & Safe Margin Rules', 'Usage Do’s & Don’ts'],
      },
      {
        title: 'Digital Marketing Assets',
        desc: 'High-impact launch creatives, OpenGraph cards, pitch decks, and dynamic vector icons.',
        deliverables: ['Figma Brand Token Kits', 'Deck Presentation Slides', 'Social Master Graphics'],
      },
    ],
    workflow: [
      { step: '01', phase: 'Market Discovery', details: 'Positioning analysis, competitive moodboards, and aesthetic curation.' },
      { step: '02', phase: 'Vector Conception', details: 'Multi-directional geometric mark exploration and typography pairing.' },
      { step: '03', phase: 'System Handoff', details: 'Exporting raw master vectors and compiling the definitive brand book.' },
    ],
  },

  'ui-ux-design': {
    slug: 'ui-ux-design',
    id: '05',
    title: 'UI/UX Design',
    shortDesc: 'High-converting design patterns built for seamless and intuitive user experience.',
    tagline: 'High-Conversion Architecture & Kinetic Interfaces',
    tags: ['Wireframes', 'Design Systems', 'Interactive Prototypes'],
    metrics: [
      { value: '3.4x', label: 'Average Funnel Conversion Lift' },
      { value: '0px Gap', label: 'Direct Developer Figma Specs' },
      { value: 'WCAG AA', label: 'Strict Contrast & Accessibility' },
    ],
    overview:
      'We strip out generic corporate fluff to design intuitive, high-velocity user interfaces. Our designs focus on reduced cognitive load, conversion psychology, and seamless handoff directly into React code.',
    capabilities: [
      {
        title: 'Atomic Design Systems',
        desc: 'Comprehensive UI kits organized with standardized Figma components, variants, and auto-layouts.',
        deliverables: ['Semantic Color Tokens', 'Button & Input State Matrices', 'Component Token Export'],
      },
      {
        title: 'Interactive Kinetic Prototypes',
        desc: 'Clickable high-fidelity micro-interactions that mirror production feel before writing a single line of code.',
        deliverables: ['Flow Wireframes', 'Micro-interaction Timing Guides', 'User Journey Maps'],
      },
      {
        title: 'Conversion UX Optimization',
        desc: 'Streamlining checkout checkouts, onboarding steps, and dashboard density for optimal engagement.',
        deliverables: ['Checkout Flow Refactoring', 'Heuristic Audits', 'Mobile Usability Layouts'],
      },
    ],
    workflow: [
      { step: '01', phase: 'Information Architecture', details: 'Site mapping, conversion funnel analysis, and user story definitions.' },
      { step: '02', phase: 'High-Fidelity Wireframes', details: 'Interactive prototype creation with dark/light themes and components.' },
      { step: '03', phase: 'Developer Handoff', details: 'Inspection-ready Figma files with spacing tokens and CSS values.' },
    ],
  },
};