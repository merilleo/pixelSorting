import { writable } from 'svelte/store';
import Sketch from "./ts/sketch";

export const canvasContainerId = 'p5-container';
export const sketch = new Sketch(200, 200, "");
export const stage = writable(0);
export const imageData = writable("");