# Architectural Decisions

| ID | Decision | Rationale | Alternatives | Status |
| :--- | :--- | :--- | :--- | :--- |
| **#001** | **Framework:** Next.js 14 App Router | Built-in SSR/SSG, file-based routing, and excellent API route support for Botpress later. | Vite, CRA | **Locked** |
| **#002** | **3D Library:** Raw Three.js | Full control over render loop, physics, and GSAP integration. Avoids React re-render overhead. | @react-three/fiber | **Locked** |
| **#003** | **Animation:** GSAP | Best-in-class for UI, camera cuts, and cinematic sequences. `gsap.context()` ensures React lifecycle safety. | Framer Motion, CSS | **Locked** |
| **#004** | **Save System:** Interface-first | Allows swapping LocalStorage for Supabase/Firebase later without refactoring game logic. | Direct LocalStorage | **Locked** |
| **#005** | **Asset Pipeline:** Static `/public/` | Next.js serves them natively. Use `.jpg` for planets, `.png` for transparent rings. | Cloud storage | **Locked** |
| **#006** | **Planet Data:** JSON-driven | Adding a planet (e.g., Planet X) requires only appending to JSON, not creating new classes. | Hardcoded | **Locked** |