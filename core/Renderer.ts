import * as THREE from "three";

export class RendererManager {
  private renderer: THREE.WebGLRenderer;

  constructor() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    });

    const pixelRatio = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setClearColor(new THREE.Color("#0B0B1A"));
  }

  public get instance(): THREE.WebGLRenderer {
    return this.renderer;
  }

  public setSize(width: number, height: number): void {
    this.renderer.setSize(width, height);
  }

  public dispose(): void {
    this.renderer.dispose();
  }
}
