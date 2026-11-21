export interface CapabilityItem {
  title: string;
  icon: string;
}

export interface BenchmarkItem {
  tag: string;
  prefix?: string;
  metric: string;
  suffix: string;
  label: string;
  icon: string;
}

export interface DeliverableItem {
  tag: string;
  title: string;
  desc: string;
  icon: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  approach: {
    eyebrow: string;
    headingNormal: string;
    headingHighlight: string;
    description: string;
    image: string;
    imageAlt: string;
    capabilities: CapabilityItem[];
  };
  benchmarks: BenchmarkItem[];
  deliverablesIntro: string;
  deliverables: DeliverableItem[];
  processIntro: string;
  process: ProcessStepItem[];
  faqs: FaqItem[];
  cta: {
    headingNormal: string;
    headingHighlight: string;
    description: string;
    buttonText: string;
  };
}

export const SERVICES_DATA: Record<string, ServiceItem> = {
  /* ================= 1. WEB DEVELOPMENT ================= */
  "web-development": {
    title: "Web Development",
    approach: {
      eyebrow: "Strategic Framework",
      headingNormal: "OUR",
      headingHighlight: "APPROACH",
      description:
        "We don't just build websites; we engineer scalable digital ecosystems. From high-converting marketing platforms to complex web architectures, our solutions are built for sub-second speed, rock-solid security, and maximum user engagement.",
      image: "/servicesimg/web.png",
      imageAlt: "Web Development & Modern Architecture",
      capabilities: [
        { title: "Custom Web Applications", icon: "Layers" },
        { title: "Enterprise & Headless CMS", icon: "Database" },
        { title: "Progressive Web Apps (PWA)", icon: "Smartphone" },
        { title: "API Development & Integration", icon: "Cpu" },
      ],
    },
    benchmarks: [
      {
        tag: "Benchmark",
        metric: "99",
        suffix: "+",
        label: "Lighthouse & SEO Score",
        icon: "Zap",
      },
      {
        tag: "Sprint Velocity",
        prefix: "<",
        metric: "14",
        suffix: " Days",
        label: "Average Website Launch",
        icon: "Terminal",
      },
      {
        tag: "Direct Access",
        prefix: "<",
        metric: "2",
        suffix: " hrs",
        label: "Lead Engineer Response",
        icon: "TrendingUp",
      },
      {
        tag: "Full Ownership",
        metric: "100",
        suffix: "%",
        label: "Custom Code & IP Rights",
        icon: "Layers",
      },
    ],
    deliverablesIntro:
      "Zero hidden fees or surprise add-ons. Every web build ships with production-ready performance, technical SEO, and clean code out of the box.",
    deliverables: [
      {
        tag: "UI / UX Architecture",
        title: "Custom Figma Design",
        desc: "Bespoke, conversion-focused interfaces tailored to your brand identity—zero generic templates or bloated themes.",
        icon: "PenTool",
      },
      {
        tag: "Responsive Build",
        title: "Mobile-First Engineering",
        desc: "Pixel-perfect layouts and fluid touch interactions engineered across mobile, tablet, and ultra-wide displays.",
        icon: "Smartphone",
      },
      {
        tag: "Core Web Vitals",
        title: "Speed & Technical SEO",
        desc: "Sub-second page transitions, semantic HTML, schema markup, and 99+ Lighthouse scores tuned for Google.",
        icon: "Gauge",
      },
      {
        tag: "Content Control",
        title: "CMS & Admin Integration",
        desc: "Manage pages, blogs, or inventory effortlessly via Sanity, Strapi, WordPress, or a custom dashboard.",
        icon: "Database",
      },
      {
        tag: "Hardened Security",
        title: "Enterprise SSL & Auth",
        desc: "End-to-end HTTPS encryption, DDoS protection, secure API routing, and automated cloud backups.",
        icon: "Lock",
      },
      {
        tag: "Growth Tracking",
        title: "Analytics & Lead Funnels",
        desc: "Google Analytics 4, Search Console, and conversion tracking pixels configured from day one.",
        icon: "BarChart3",
      },
    ],
    processIntro:
      "Systematic, sprint-based web deployment pipeline engineered from wireframe discovery to live cloud launch.",
    process: [
      {
        step: "STEP 01",
        title: "Discovery Call",
        desc: "Map your business goals, target users, and technical scope in a focused strategy session.",
        icon: "PhoneCall",
      },
      {
        step: "STEP 02",
        title: "Wireframing & UI",
        desc: "Design interactive Figma prototypes so you see and approve every screen before coding.",
        icon: "LayoutGrid",
      },
      {
        step: "STEP 03",
        title: "Sprint Kickoff",
        desc: "Transparent milestone agreement with 100% IP & source code ownership guarantees.",
        icon: "UserPlus",
      },
      {
        step: "STEP 04",
        title: "Agile Build",
        desc: "Clean Next.js & React development with live staging links shared every week.",
        icon: "Code2",
      },
      {
        step: "STEP 05",
        title: "QA & Speed Audit",
        desc: "Cross-device testing, bug squashing, technical SEO setup, and 99+ Lighthouse tuning.",
        icon: "Gauge",
      },
      {
        step: "STEP 06",
        title: "Launch & Support",
        desc: "Zero-downtime deployment, team walkthrough, and 30 days of priority post-launch support.",
        icon: "CheckCircle",
      },
    ],
    faqs: [
      {
        id: "01",
        question: "How fast can you design and launch a custom website?",
        answer:
          "Standard marketing and business websites launch within 10 to 14 days. Full-scale web applications with custom dashboards and third-party APIs typically take 3 to 5 weeks with weekly live staging previews.",
      },
      {
        id: "02",
        question: "Do you use templates or build from scratch?",
        answer:
          "Zero bloated templates. Every interface is custom-designed in Figma around your brand and hand-coded in Next.js, React, and TypeScript for sub-second speed.",
      },
      {
        id: "03",
        question: "Will I be able to edit text and images myself later?",
        answer:
          "Yes. We integrate a clean headless CMS or custom admin panel and provide a walkthrough video so your team can update content without touching code.",
      },
      {
        id: "04",
        question: "Who owns the source code and hosting accounts?",
        answer:
          "You retain 100% ownership from day one. Upon completion, we transfer full GitHub repository rights, Figma files, and cloud deployment access directly to you.",
      },
    ],
    cta: {
      headingNormal: "Ready to Launch",
      headingHighlight: "Your Flagship Site?",
      description:
        "Replace slow templates with a high-converting web platform built for speed and authority. Talk directly with our lead engineers.",
      buttonText: "Start Your Project",
    },
  },

  /* ================= 2. AI AUTOMATION & SOLUTIONS ================= */
  "ai-automation": {
    title: "AI Automation & Solutions",
    approach: {
      eyebrow: "Intelligent Systems",
      headingNormal: "OUR",
      headingHighlight: "APPROACH",
      description:
        "We eliminate repetitive manual bottlenecks by embedding custom AI agents and automated workflows directly into your existing stack. From 24/7 customer support bots to autonomous lead qualification and data pipelines, we turn hours of busywork into instant execution.",
      image: "/servicesimg/automation.png",
      imageAlt: "AI Automation & Agent Workflows",
      capabilities: [
        { title: "Custom AI Agents & Copilots", icon: "Bot" },
        { title: "End-to-End Workflow Automation", icon: "Workflow" },
        { title: "RAG Knowledge Base & LLM Ops", icon: "Database" },
        { title: "CRM & WhatsApp AI Integrations", icon: "Cpu" },
      ],
    },
    benchmarks: [
      {
        tag: "Efficiency Gain",
        metric: "80",
        suffix: "%",
        label: "Manual Workload Reduced",
        icon: "Zap",
      },
      {
        tag: "Deployment",
        prefix: "<",
        metric: "10",
        suffix: " Days",
        label: "First Live AI Workflow",
        icon: "Terminal",
      },
      {
        tag: "Availability",
        metric: "24",
        suffix: "/7",
        label: "Autonomous Lead & Support",
        icon: "Bot",
      },
      {
        tag: "Data Privacy",
        metric: "100",
        suffix: "%",
        label: "Isolated & Secure Pipelines",
        icon: "ShieldCheck",
      },
    ],
    deliverablesIntro:
      "Production-grade AI systems trained on your business data—engineered with strict guardrails, human-in-the-loop fallbacks, and real-time analytics.",
    deliverables: [
      {
        tag: "Conversational AI",
        title: "24/7 Sales & Support Agents",
        desc: "Custom-trained web, WhatsApp, and Slack agents that qualify leads, book meetings, and resolve tickets instantly.",
        icon: "Bot",
      },
      {
        tag: "Knowledge Retrieval",
        title: "Private RAG Knowledge Engine",
        desc: "Connect your PDFs, SOPs, Notion docs, and databases so AI answers with accurate, citation-backed company data.",
        icon: "Database",
      },
      {
        tag: "Process Sync",
        title: "Multi-App Workflow Pipelines",
        desc: "Automated triggers linking your CRM, email, invoicing, and internal tools via n8n, Make, or custom Python workers.",
        icon: "Workflow",
      },
      {
        tag: "Guardrails & Safety",
        title: "Hallucination & Role Controls",
        desc: "Strict prompt boundaries, confidence thresholds, and seamless human handoff whenever edge cases arise.",
        icon: "ShieldCheck",
      },
      {
        tag: "API Connectivity",
        title: "Custom Webhook & ERP Bridges",
        desc: "Bi-directional REST/GraphQL integrations syncing real-time records across HubSpot, Salesforce, Shopify, and Zoho.",
        icon: "Cpu",
      },
      {
        tag: "ROI Visibility",
        title: "Token & Performance Dashboard",
        desc: "Live monitoring of response accuracy, API usage costs, conversion rates, and hours saved per week.",
        icon: "BarChart3",
      },
    ],
    processIntro:
      "A practical, ROI-first automation rollout designed to audit bottlenecks, train secure models, and deploy without disrupting daily operations.",
    process: [
      {
        step: "STEP 01",
        title: "Workflow Audit",
        desc: "Identify high-cost repetitive tasks across sales, support, and operations with highest ROI.",
        icon: "Compass",
      },
      {
        step: "STEP 02",
        title: "Agent Architecture",
        desc: "Map data sources, LLM selection, tool-calling permissions, and human fallback rules.",
        icon: "LayoutGrid",
      },
      {
        step: "STEP 03",
        title: "Knowledge Ingestion",
        desc: "Structure and vectorize your internal SOPs, catalogs, and FAQs for accurate retrieval.",
        icon: "Database",
      },
      {
        step: "STEP 04",
        title: "Pipeline Build",
        desc: "Develop custom AI agents, webhooks, and CRM integrations in an isolated sandbox.",
        icon: "Code2",
      },
      {
        step: "STEP 05",
        title: "Red-Team Testing",
        desc: "Stress-test edge cases, response speed, and prompt security before live traffic.",
        icon: "ShieldCheck",
      },
      {
        step: "STEP 06",
        title: "Deploy & Tune",
        desc: "Go live with real-time logging, team training, and 30 days of prompt optimization.",
        icon: "Rocket",
      },
    ],
    faqs: [
      {
        id: "01",
        question: "Will our company data remain private and secure?",
        answer:
          "100%. We deploy zero-data-retention enterprise APIs and isolated vector databases—your proprietary documents and customer logs are never used to train public models.",
      },
      {
        id: "02",
        question: "Which tools and CRMs can you integrate with?",
        answer:
          "We connect with HubSpot, Zoho, Salesforce, WhatsApp Business API, Slack, Shopify, Google Workspace, Notion, and any platform exposing a REST or webhook API.",
      },
      {
        id: "03",
        question: "What happens if the AI doesn't know an answer?",
        answer:
          "We build smart confidence guardrails. Whenever a query falls outside verified knowledge or requires human judgment, the agent smoothly escalates the chat to your team with full context.",
      },
      {
        id: "04",
        question: "How quickly will we see measurable ROI?",
        answer:
          "Most clients see immediate time savings within the first 7 to 10 days of deployment, cutting lead response times from hours to under 5 seconds.",
      },
    ],
    cta: {
      headingNormal: "Ready to Automate",
      headingHighlight: "Your Operations?",
      description:
        "Turn your bottlenecked processes into 24/7 autonomous growth engines. Connect directly with our AI architects to scope your workflow.",
      buttonText: "Automate Now",
    },
  },

  /* ================= 3. CUSTOM SOFTWARE DEVELOPMENT ================= */
  "custom-software": {
    title: "Custom Software",
    approach: {
      eyebrow: "Bespoke Engineering",
      headingNormal: "OUR",
      headingHighlight: "APPROACH",
      description:
        "Off-the-shelf tools force your business to compromise. We architect tailored SaaS platforms, internal ERPs, client portals, and multi-tenant systems built around your exact operational logic—giving you a proprietary competitive edge that scales effortlessly.",
      image: "/servicesimg/software.png",
      imageAlt: "Custom Software & SaaS Engineering",
      capabilities: [
        { title: "Full-Stack SaaS Platforms", icon: "Rocket" },
        { title: "Internal ERPs & Admin Portals", icon: "Layers" },
        { title: "Multi-Tenant Cloud Architecture", icon: "Database" },
        { title: "Payment & Third-Party APIs", icon: "Cpu" },
      ],
    },
    benchmarks: [
      {
        tag: "Uptime SLA",
        metric: "99.9",
        suffix: "%",
        label: "Cloud Infrastructure Reliability",
        icon: "ShieldCheck",
      },
      {
        tag: "MVP Delivery",
        prefix: "<",
        metric: "21",
        suffix: " Days",
        label: "Production-Ready V1 Launch",
        icon: "Terminal",
      },
      {
        tag: "Architecture",
        metric: "100",
        suffix: "%",
        label: "Modular & Scalable Codebase",
        icon: "Code2",
      },
      {
        tag: "Full IP Rights",
        metric: "100",
        suffix: "%",
        label: "Zero Vendor Lock-In",
        icon: "Lock",
      },
    ],
    deliverablesIntro:
      "End-to-end software engineering covering database modeling, role-based security, payment gateways, and automated cloud CI/CD pipelines.",
    deliverables: [
      {
        tag: "Product Blueprint",
        title: "System & Database Architecture",
        desc: "Normalized PostgreSQL/MySQL schemas, API contracts, and scalable microservices designed for high concurrency.",
        icon: "Database",
      },
      {
        tag: "Access Control",
        title: "Role-Based Auth & SSO",
        desc: "Granular admin, staff, and customer permissions with JWT/OAuth2 authentication and audit trails.",
        icon: "Lock",
      },
      {
        tag: "User Experience",
        title: "Interactive SaaS & Portal UI",
        desc: "Fast, keyboard-friendly dashboards, real-time tables, and clean reporting views built in React & Next.js.",
        icon: "LayoutGrid",
      },
      {
        tag: "Monetization",
        title: "Billing & Subscription Engines",
        desc: "Stripe, Razorpay, or custom payment gateway integrations with automated invoicing, webhooks, and usage tiers.",
        icon: "TrendingUp",
      },
      {
        tag: "DevOps & Scale",
        title: "CI/CD & Cloud Deployment",
        desc: "Automated staging-to-production pipelines on AWS, Vercel, or Docker with zero-downtime rollouts.",
        icon: "Wrench",
      },
      {
        tag: "Documentation",
        title: "API Docs & Handover Kit",
        desc: "Complete Swagger/Postman API documentation, architecture diagrams, and clean Git commit history.",
        icon: "Code2",
      },
    ],
    processIntro:
      "Transparent, milestone-driven software engineering with weekly working builds so you maintain complete visibility from day one.",
    process: [
      {
        step: "STEP 01",
        title: "Technical Scoping",
        desc: "Define user roles, core features, data flows, and MVP vs. V2 roadmap priorities.",
        icon: "Compass",
      },
      {
        step: "STEP 02",
        title: "System & UI Design",
        desc: "Architect database schemas alongside clickable Figma user flows for sign-off.",
        icon: "PenTool",
      },
      {
        step: "STEP 03",
        title: "Core Backend & Auth",
        desc: "Build secure APIs, database models, role permissions, and third-party integrations.",
        icon: "Database",
      },
      {
        step: "STEP 04",
        title: "Frontend Integration",
        desc: "Connect high-speed reactive interfaces with live weekly staging deployments.",
        icon: "Code2",
      },
      {
        step: "STEP 05",
        title: "Load & Security QA",
        desc: "Automated testing, API rate-limiting, penetration checks, and query optimization.",
        icon: "ShieldCheck",
      },
      {
        step: "STEP 06",
        title: "Production Handover",
        desc: "Cloud launch, team onboarding, full repo transfer, and 30-day warranty support.",
        icon: "CheckCircle",
      },
    ],
    faqs: [
      {
        id: "01",
        question: "Can you build a full SaaS MVP from scratch?",
        answer:
          "Yes. We specialize in taking founder ideas from technical spec and Figma wireframes to a live, revenue-ready SaaS product with auth, subscriptions, and admin dashboards in 3 to 4 weeks.",
      },
      {
        id: "02",
        question: "What tech stack do you use for custom software?",
        answer:
          "We build primarily with Next.js, React, TypeScript, Node.js, Python, PostgreSQL, and Redis—chosen for long-term maintainability, speed, and easy hiring as your team grows.",
      },
      {
        id: "03",
        question: "Can you modernize or scale our existing legacy software?",
        answer:
          "Absolutely. We audit existing codebases, refactor slow database queries, build modern frontends over legacy APIs, and migrate systems cleanly without business downtime.",
      },
      {
        id: "04",
        question: "Do we own 100% of the intellectual property?",
        answer:
          "Yes, without exception. All source code, database schemas, and design assets belong exclusively to your company upon milestone completion.",
      },
    ],
    cta: {
      headingNormal: "Ready to Build",
      headingHighlight: "Custom Software?",
      description:
        "Stop forcing your operations into rigid off-the-shelf tools. Let's architect a scalable software platform tailored to your business.",
      buttonText: "Scope Your Software",
    },
  },

  /* ================= 4. MOBILE APP DEVELOPMENT ================= */
  "mobile-app-development": {
    title: "Mobile App Development",
    approach: {
      eyebrow: "iOS & Android Craft",
      headingNormal: "OUR",
      headingHighlight: "APPROACH",
      description:
        "We build native-feel iOS and Android applications that users love opening every day. Using modern cross-platform architecture, we deliver 60fps animations, offline-first reliability, and seamless backend sync—cutting time-to-market in half without sacrificing quality.",
      image: "/servicesimg/app.png",
      imageAlt: "Cross-Platform Mobile App Engineering",
      capabilities: [
        { title: "iOS & Android Cross-Platform", icon: "Smartphone" },
        { title: "Consumer & Marketplace Apps", icon: "Globe" },
        { title: "Real-Time Chat, Maps & Push", icon: "Zap" },
        { title: "App Store & Play Store Launch", icon: "Rocket" },
      ],
    },
    benchmarks: [
      {
        tag: "Frame Rate",
        metric: "60",
        suffix: " FPS",
        label: "Silky Native UI Performance",
        icon: "Zap",
      },
      {
        tag: "Dual Platform",
        metric: "2",
        suffix: "x Faster",
        label: "Single Codebase for iOS & Android",
        icon: "Smartphone",
      },
      {
        tag: "Crash-Free",
        metric: "99.8",
        suffix: "%",
        label: "Production Stability Target",
        icon: "ShieldCheck",
      },
      {
        tag: "Store Ready",
        metric: "100",
        suffix: "%",
        label: "Apple & Google Compliance",
        icon: "CheckCircle2",
      },
    ],
    deliverablesIntro:
      "From interactive mobile prototypes to App Store Connect and Google Play Console approval, we handle the entire mobile lifecycle.",
    deliverables: [
      {
        tag: "Mobile UX",
        title: "Gesture-Driven App Design",
        desc: "Thumb-friendly navigation, dark/light themes, and platform-native interactions designed in Figma.",
        icon: "PenTool",
      },
      {
        tag: "Cross-Platform Core",
        title: "Flutter & React Native Build",
        desc: "High-speed compiled mobile apps sharing business logic across iOS and Android devices.",
        icon: "Smartphone",
      },
      {
        tag: "Live Engagement",
        title: "Push Notifications & Deep Links",
        desc: "Targeted Firebase/OneSignal notifications and smart deep linking to boost user retention.",
        icon: "Zap",
      },
      {
        tag: "Offline & Sync",
        title: "Local Caching & Cloud Backend",
        desc: "Smooth offline state handling with instant background synchronization once connectivity returns.",
        icon: "Database",
      },
      {
        tag: "In-App Commerce",
        title: "Payments, Maps & Biometrics",
        desc: "Apple Pay, Google Pay, Stripe, FaceID login, and live GPS tracking integrated natively.",
        icon: "Lock",
      },
      {
        tag: "Store Deployment",
        title: "App Store & Play Store Publishing",
        desc: "Complete provisioning, privacy manifests, store screenshots, and review submission management.",
        icon: "Rocket",
      },
    ],
    processIntro:
      "Iterative mobile engineering with TestFlight and Android APK builds delivered to your phone every week.",
    process: [
      {
        step: "STEP 01",
        title: "App Strategy",
        desc: "Define core user journeys, device features, monetization, and MVP feature set.",
        icon: "Compass",
      },
      {
        step: "STEP 02",
        title: "Interactive Prototype",
        desc: "Test clickable iOS & Android screen flows on your actual phone before development.",
        icon: "Smartphone",
      },
      {
        step: "STEP 03",
        title: "API & Cloud Setup",
        desc: "Architect scalable backend endpoints, push notification pipelines, and user auth.",
        icon: "Database",
      },
      {
        step: "STEP 04",
        title: "Weekly APK / TestFlight",
        desc: "Hands-on sprint builds installed directly on your device for real-time feedback.",
        icon: "Code2",
      },
      {
        step: "STEP 05",
        title: "Device Lab QA",
        desc: "Test across screen sizes, OS versions, low-network states, and battery profiles.",
        icon: "Gauge",
      },
      {
        step: "STEP 06",
        title: "Store Approval & Care",
        desc: "Navigate Apple & Google review guidelines to live launch plus 30-day support.",
        icon: "CheckCircle",
      },
    ],
    faqs: [
      {
        id: "01",
        question: "Do you build for both iOS and Android simultaneously?",
        answer:
          "Yes. Using Flutter and React Native, we deliver native-performance apps for both iOS and Android from a unified codebase—saving you up to 45% in build and maintenance costs.",
      },
      {
        id: "02",
        question: "Will you handle Apple App Store and Google Play submission?",
        answer:
          "Yes, end-to-end. We configure certificates, store listings, privacy policies, and handle reviewer feedback until both apps are live.",
      },
      {
        id: "03",
        question: "Can you also build the backend and web admin panel?",
        answer:
          "Yes. Every mobile app we build can include a custom Node.js/cloud backend and a web-based admin dashboard to manage users, orders, and push notifications.",
      },
      {
        id: "04",
        question: "How long does it take to launch a mobile MVP?",
        answer:
          "A focused mobile MVP typically takes 3 to 5 weeks from design sign-off to TestFlight/Play Store submission.",
      },
    ],
    cta: {
      headingNormal: "Ready to Launch",
      headingHighlight: "Your Mobile App?",
      description:
        "Put your product in your customers' pockets with a fast, intuitive iOS & Android experience. Speak directly with our mobile architects.",
      buttonText: "Build Your App",
    },
  },

  /* ================= 5. GRAPHIC & BRAND IDENTITY ================= */
  "graphic-brand-identity": {
    title: "Graphic & Brand Identity",
    approach: {
      eyebrow: "Visual Authority",
      headingNormal: "OUR",
      headingHighlight: "APPROACH",
      description:
        "A forgettable brand blends into the noise. We craft sharp, timeless visual identities, distinctive logo marks, and comprehensive brand systems engineered to command instant authority across web, social, and physical touchpoints.",
      image: "/servicesimg/brand.png",
      imageAlt: "Graphic Design & Brand Identity Systems",
      capabilities: [
        { title: "Logo Marks & Wordmarks", icon: "PenTool" },
        { title: "Complete Brand Guidelines", icon: "Layers" },
        { title: "Typography & Color Systems", icon: "Sparkles" },
        { title: "Social & Pitch Deck Kits", icon: "LayoutGrid" },
      ],
    },
    benchmarks: [
      {
        tag: "Concept Delivery",
        prefix: "<",
        metric: "5",
        suffix: " Days",
        label: "Initial Brand Directions",
        icon: "Zap",
      },
      {
        tag: "Scalability",
        metric: "100",
        suffix: "%",
        label: "Vector & Print-Ready Assets",
        icon: "Layers",
      },
      {
        tag: "Brand Consistency",
        metric: "30",
        suffix: "+ Pages",
        label: "Comprehensive Brand Book",
        icon: "Sparkles",
      },
      {
        tag: "Full Copyright",
        metric: "100",
        suffix: "%",
        label: "Commercial & Source Ownership",
        icon: "CheckCircle2",
      },
    ],
    deliverablesIntro:
      "Every brand identity ships with master vector source files, typography rules, color tokens, and ready-to-use digital templates.",
    deliverables: [
      {
        tag: "Core Mark",
        title: "Primary & Secondary Logos",
        desc: "Versatile logomarks, wordmarks, and favicons engineered to stay crisp from 16px icons to billboards.",
        icon: "PenTool",
      },
      {
        tag: "Color & Type",
        title: "Palette & Typography System",
        desc: "Accessible HEX, RGB, and CMYK color hierarchies paired with licensed web and print font pairings.",
        icon: "Sparkles",
      },
      {
        tag: "Brand Rulebook",
        title: "Comprehensive Brand Guidelines",
        desc: "Clear rules on logo spacing, misuse prevention, tone of voice, and visual composition.",
        icon: "Layers",
      },
      {
        tag: "Digital Presence",
        title: "Social Media & Banner Kit",
        desc: "Editable Figma templates for LinkedIn, X, Instagram, and launch announcements.",
        icon: "LayoutGrid",
      },
      {
        tag: "Investor Ready",
        title: "Custom Pitch Deck Template",
        desc: "High-impact slide layouts designed to help founders present with clarity and authority.",
        icon: "TrendingUp",
      },
      {
        tag: "Master Files",
        title: "SVG, EPS, AI & PNG Vault",
        desc: "Organized cloud folder containing every vector, raster, and dark/light mode export.",
        icon: "Database",
      },
    ],
    processIntro:
      "A focused, research-backed identity sprint designed to turn your positioning into an unmistakable visual signature.",
    process: [
      {
        step: "STEP 01",
        title: "Brand Discovery",
        desc: "Uncover your positioning, target audience, competitors, and visual personality.",
        icon: "Compass",
      },
      {
        step: "STEP 02",
        title: "Moodboards & Direction",
        desc: "Curate distinct visual territories covering typography, tone, and aesthetic cues.",
        icon: "LayoutGrid",
      },
      {
        step: "STEP 03",
        title: "Logo Exploration",
        desc: "Craft 3 original, concept-driven logo routes tested in real-world mockups.",
        icon: "PenTool",
      },
      {
        step: "STEP 04",
        title: "System Expansion",
        desc: "Build out color tokens, typography hierarchy, patterns, and icon styling.",
        icon: "Layers",
      },
      {
        step: "STEP 05",
        title: "Collateral & Kits",
        desc: "Apply the identity across social templates, stationery, and pitch decks.",
        icon: "Sparkles",
      },
      {
        step: "STEP 06",
        title: "Brand Book Handover",
        desc: "Deliver the final PDF brand guidelines and full master vector source vault.",
        icon: "CheckCircle",
      },
    ],
    faqs: [
      {
        id: "01",
        question: "How many logo concepts do we get to choose from?",
        answer:
          "We present 3 distinct, strategic visual concepts shown in real-world contexts (web headers, mobile icons, merchandise) rather than raw black-and-white sketches.",
      },
      {
        id: "02",
        question: "What file formats will we receive at the end?",
        answer:
          "You get full master source files in AI, EPS, SVG, PDF, and high-resolution transparent PNGs across dark, light, and monochrome variations.",
      },
      {
        id: "03",
        question: "Can you rebrand an existing company without losing recognition?",
        answer:
          "Yes. We specialize in strategic brand refreshes—modernizing your mark, typography, and digital presence while preserving existing customer equity.",
      },
      {
        id: "04",
        question: "How long does a full brand identity take?",
        answer:
          "A complete identity system—including logo suite, brand guidelines, and social kit—typically takes 7 to 12 business days.",
      },
    ],
    cta: {
      headingNormal: "Ready to Build",
      headingHighlight: "An Iconic Brand?",
      description:
        "Stand out in crowded markets with a visual identity engineered for authority and recall. Let's craft your brand system.",
      buttonText: "Start Your Rebrand",
    },
  },

  /* ================= 6. UI / UX & PRODUCT DESIGN ================= */
  "ui-ux-design": {
    title: "UI / UX Design",
    approach: {
      eyebrow: "Conversion & Craft",
      headingNormal: "OUR",
      headingHighlight: "APPROACH",
      description:
        "Great design isn't decoration—it's friction removal. We combine behavioral psychology, crisp typography, and scalable Figma design systems to turn complex products into intuitive interfaces that build instant trust and lift conversion rates.",
      image: "/servicesimg/uiux.png",
      imageAlt: "UI/UX & Product Design Systems",
      capabilities: [
        { title: "SaaS & Web App Interfaces", icon: "LayoutGrid" },
        { title: "High-Converting Landing Pages", icon: "Sparkles" },
        { title: "Scalable Figma Design Systems", icon: "Layers" },
        { title: "Interactive Prototypes & Audits", icon: "PenTool" },
      ],
    },
    benchmarks: [
      {
        tag: "Conversion Lift",
        prefix: "+",
        metric: "38",
        suffix: "%",
        label: "Average Funnel Improvement",
        icon: "TrendingUp",
      },
      {
        tag: "Prototype Speed",
        prefix: "<",
        metric: "7",
        suffix: " Days",
        label: "First Interactive Concepts",
        icon: "Zap",
      },
      {
        tag: "Dev Handoff",
        metric: "100",
        suffix: "%",
        label: "Tokenized Auto-Layout Figma",
        icon: "Layers",
      },
      {
        tag: "Design Ownership",
        metric: "100",
        suffix: "%",
        label: "Full Source Files & Variables",
        icon: "CheckCircle2",
      },
    ],
    deliverablesIntro:
      "Developer-ready Figma libraries built with variables, responsive breakpoints, and interactive flows—so engineering moves 3x faster.",
    deliverables: [
      {
        tag: "UX Research",
        title: "User Flows & Wireframing",
        desc: "Information architecture and low-fidelity wireframes mapping every click from landing to conversion.",
        icon: "Compass",
      },
      {
        tag: "Visual Identity",
        title: "Bespoke Interface Direction",
        desc: "Distinctive typography, color systems, and visual hierarchy tailored to position you above competitors.",
        icon: "Sparkles",
      },
      {
        tag: "Component Library",
        title: "Tokenized Figma Design System",
        desc: "Reusable buttons, forms, modals, and cards with Figma variables and strict auto-layout.",
        icon: "Layers",
      },
      {
        tag: "Multi-Viewport",
        title: "Desktop, Tablet & Mobile Views",
        desc: "Every core screen designed across breakpoints so nothing breaks during responsive coding.",
        icon: "Smartphone",
      },
      {
        tag: "Click-Through",
        title: "Interactive Motion Prototypes",
        desc: "Realistic clickable prototypes for investor pitches, user testing, and stakeholder sign-off.",
        icon: "PenTool",
      },
      {
        tag: "Engineering Ready",
        title: "Dev Specs & Asset Export",
        desc: "Clean spacing tokens, SVG icons, and Loom walkthroughs for seamless developer handoff.",
        icon: "Code2",
      },
    ],
    processIntro:
      "Collaborative, transparent design sprints with async Loom updates and zero guesswork.",
    process: [
      {
        step: "STEP 01",
        title: "UX & Brand Audit",
        desc: "Analyze your audience, competitors, and current funnel drop-off points.",
        icon: "Compass",
      },
      {
        step: "STEP 02",
        title: "Wireframe Architecture",
        desc: "Map user journeys and structural layouts before applying visual styling.",
        icon: "LayoutGrid",
      },
      {
        step: "STEP 03",
        title: "Visual Direction",
        desc: "Explore 2 tailored aesthetic concepts for your hero and core product screens.",
        icon: "Sparkles",
      },
      {
        step: "STEP 04",
        title: "Full UI & Components",
        desc: "Design all responsive screens backed by a clean, reusable Figma system.",
        icon: "PenTool",
      },
      {
        step: "STEP 05",
        title: "Prototype & Polish",
        desc: "Wire interactive states, micro-interactions, and edge cases (empty/error states).",
        icon: "Layers",
      },
      {
        step: "STEP 06",
        title: "Developer Handoff",
        desc: "Transfer organized Figma files, style tokens, and implementation notes.",
        icon: "CheckCircle",
      },
    ],
    faqs: [
      {
        id: "01",
        question: "Can you redesign our existing SaaS or website without breaking flows?",
        answer:
          "Yes. We audit your current analytics and user journeys first, preserving what works while eliminating friction and modernizing the interface.",
      },
      {
        id: "02",
        question: "Are your Figma files organized for our developers?",
        answer:
          "100%. Every file uses Figma Variables, Auto-Layout, naming conventions, and component variants so developers can inspect and build directly.",
      },
      {
        id: "03",
        question: "Can your team also code the design once approved?",
        answer:
          "Yes! Most clients have us handle both UI/UX design and Next.js/React or Flutter development under one roof for zero translation loss.",
      },
      {
        id: "04",
        question: "How many revision rounds are included?",
        answer:
          "We work iteratively with async Loom reviews at every milestone, refining until every screen matches your product vision.",
      },
    ],
    cta: {
      headingNormal: "Ready to Elevate",
      headingHighlight: "Your Product UX?",
      description:
        "Turn visitors into loyal users with an interface engineered for clarity and conversion. Book a design discovery session today.",
      buttonText: "Start Designing",
    },
  },
};