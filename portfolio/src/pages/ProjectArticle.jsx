import React from 'react';
import { useParams } from 'react-router-dom';

const contentMap = {
  'lx-medical': `
"~/projects/lx-medical.md"
───────────────────────────────────────────────────────
# LX Medical

Enterprise-grade healthcare tooling at scale. Built a modular platform using Azure, PostgreSQL, and React.

- Implemented Role-Based Access Control, SSO, and Jira CMS sync
- Reduced dev cost by 50% via single-codebase PWA architecture
- Integrated real-time system metrics using D3.js charts
- Boosted SEO reach by 23% via technical audits and keyword maps

> Result: Onboarded 13,000+ enterprise users and enabled multi-platform deployments.
───────────────────────────────────────────────────────
-- INSERT --
`,

  'prevhealth': `
"~/projects/prevhealth.md"
───────────────────────────────────────────────────────
# PrevHealth

Full-stack refactor for a patient-first B2B SaaS platform.

- Built microservice backend with Node.js, MongoDB & Redis
- Implemented secure BankID/SITHS OAuth flow (JWT auth)
- Deployed NLP chatbot using custom-trained TypeScript model
- Reduced EHR sync latency by 40% using GraphQL caching
- CI/CD with GitHub Actions + AWS Fargate for 99.98% uptime

> Result: 50% drop in onboarding support tickets and 30% clinician time saved.
───────────────────────────────────────────────────────
-- INSERT --
`,

  'map-room': `
"~/projects/map-room.md"
───────────────────────────────────────────────────────
# Map Room

Visual computing playground with WebGL, dynamic lighting, and shadow computation.

- Designed a 3D texture-mapped space with dynamic light movement
- Used Mat4 look-at and camera angle experiments for rendering
- Blinn-Phong per-pixel lighting model simulation
- Engine recomputes every frame with shadow map interpolation

> Result: A working shadowed space simulation using only browser-native WebGL.
───────────────────────────────────────────────────────
-- INSERT --
`,

  'skysync': `
"~/projects/skysync.md"
───────────────────────────────────────────────────────
# SkySync

E-commerce SaaS platform with end-to-end microservices on the MERN stack.

- Built 4 microservices: User, Product, Order, Payment
- Used MongoDB, Docker, and AWS Lambda for infra scaling
- Serverless CI/CD deploys to Kubernetes via GitHub Actions
- PWA frontend built with React + Tailwind + TypeScript
- Monitored using CloudWatch + Prometheus-ready logs

> Result: Fully cloud-native ecommerce with robust auth, CI/CD, and observability.
───────────────────────────────────────────────────────
-- INSERT --
`,
};

const ProjectArticle = () => {
  const { slug } = useParams();
  const content = contentMap[slug] || 'Project not found.';

  return (
    <div className="bg-[#0d1117] text-green-400 font-mono p-8 max-w-5xl w-4/5 mx-auto mt-12 rounded shadow border border-gray-600">
      <pre className="whitespace-pre-wrap text-sm leading-relaxed">{content}</pre>
    </div>
  );
};

export default ProjectArticle;
