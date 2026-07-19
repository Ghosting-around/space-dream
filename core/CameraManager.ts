import * as THREE from "three";

export class CameraManager {
  private camera: THREE.PerspectiveCamera;

  constructor(width = 1280, height = 720) {
    this.camera = new THREE.PerspectiveCamera(75, width / Math.max(height, 1), 0.1, 1000);
    this.camera.position.set(0, 0, 5);
  }

  public get instance(): THREE.PerspectiveCamera {
    return this.camera;
  }

  public setSize(width: number, height: number): void {
    this.camera.aspect = width / Math.max(height, 1);
    this.camera.updateProjectionMatrix();
  }
}
