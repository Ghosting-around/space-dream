# AGENTS.md – Engineering Rules for Space Dream

## Core Directives
1.  **Read the spec first:** Always consult `knowledge/` before implementing.
2.  **Do NOT invent architecture:** If it's not in the GDD, ask before coding.
3.  **Single Responsibility:** Build ONE system per prompt.
4.  **TypeScript Strict:** No `any`. Define interfaces upfront.
5.  **Public Assets:** All textures/models go in `public/`. Referenced as root paths (e.g., `/textures/earth.jpg`).
6.  **Cleanup:** Dispose geometries/materials on unmount. Use `gsap.context()` for GSAP.
7.  **No R3F:** Use raw Three.js mounted in `useEffect`.
8.  **State Abstraction:** Save/Load via `ISaveProvider` interface.
9.  **Fail Gracefully:** Missing textures fallback to solid colors.
10. **Commit after every milestone:** Do not proceed until the code is reviewed and committed.