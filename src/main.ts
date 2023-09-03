import './css/app.css'
import App from './App.svelte'
import {initalizeKeyboardEvents} from "./ts/KeyEvents";

const app = new App({
  target: document.getElementById('app'),
})

export default app

// initalizeKeyboardEvents();