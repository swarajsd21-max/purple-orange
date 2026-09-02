# PURPLEORANGE — AI Content Studio

A cinematic Next.js 15 portfolio experience built with React, TypeScript, Tailwind, GSAP/ScrollTrigger, Lenis and native HTML video.

## Run locally

Install a current Node.js LTS release, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The complete homepage lives in `app/page.tsx`.

## Video assets

The supplied films are included in `public/videos`. Video assignments are centralized in `data/projects.ts`; swap any `.mp4` in that folder without changing components. The hero is the only eagerly initialized film. Every other player uses `preload="none"`, starts only once visible, and pauses when it leaves the viewport.

For deployment, use H.264 MP4s with `faststart` enabled, a 1080p maximum source size, and short looping edits for best performance.
