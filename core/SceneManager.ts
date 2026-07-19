import * as THREE from "three";

export class SceneManager {
  private scene: THREE.Scene;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#0B0B1A");
  }

  public get instance(): THREE.Scene {
    return this.scene;
  }
}
