import "./resources/css/app.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("pixel-sorter") as HTMLElement,
});

export default app;
