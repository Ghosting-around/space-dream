import * as THREE from "three";

import { CameraManager } from "./CameraManager";
import { RendererManager } from "./Renderer";
import { SceneManager } from "./SceneManager";

export class Engine {
  private rendererManager: RendererManager;
  private sceneManager: SceneManager;
  private cameraManager: CameraManager;
  private animationFrameId: number | null = null;
  private container: HTMLElement | null = null;

  constructor(container: HTMLElement) {
    this.container = container;
    this.rendererManager = new RendererManager();
    this.sceneManager = new SceneManager();
    this.cameraManager = new CameraManager();

    this.rendererManager.instance.domElement.style.display = "block";
    container.appendChild(this.rendererManager.instance.domElement);

    this.resize();
    this.start();
  }

  public get renderer(): THREE.WebGLRenderer {
    return this.rendererManager.instance;
  }

  public get scene(): THREE.Scene {
    return this.sceneManager.instance;
  }

  public get camera(): THREE.PerspectiveCamera {
    return this.cameraManager.instance;
  }

  public start(): void {
    if (this.animationFrameId !== null) {
      return;
    }

    const renderFrame = (): void => {
      this.animationFrameId = window.requestAnimationFrame(renderFrame);
      this.renderer.render(this.scene, this.camera);
    };

    this.animationFrameId = window.requestAnimationFrame(renderFrame);
  }

  public resize(): void {
    if (!this.container) {
      return;
    }

    const width = Math.max(this.container.clientWidth, 1);
    const height = Math.max(this.container.clientHeight, 1);

    this.rendererManager.setSize(width, height);
    this.cameraManager.setSize(width, height);
  }

  public dispose(): void {
    if (this.animationFrameId !== null) {
      window.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    this.rendererManager.dispose();

    if (this.container && this.container.contains(this.rendererManager.instance.domElement)) {
      this.container.removeChild(this.rendererManager.instance.domElement);
    }

    this.container = null;
  }
}
