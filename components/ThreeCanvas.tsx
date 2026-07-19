"use client";

import { useEffect, useRef } from "react";

import { Engine } from "../core/Engine";

export function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) {
      return;
    }

    const engine = new Engine(containerRef.current);

    const handleResize = () => {
      engine.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      engine.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-hidden bg-[#0B0B1A]"
    />
  );
}
