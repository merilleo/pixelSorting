<script lang="ts">
    import {sketch, canvasContainerId} from './../store'

    let width: number = 200;
    let height: number = 200;

    function createCanvas() {
        sketch.delete();
        sketch.create(width, height, canvasContainerId);
    }
</script>

<div class="create-canvas-form">
    <div class="form-element">
        <label for="input-width">Width:</label>
        <input id="input-width" type="number" bind:value="{width}">
    </div>
    <div class="form-element">
        <label for="input-height">Height:</label>
        <input id="input-height" type="number"  bind:value="{height}">
    </div>
    <div class="form-element">
        <button on:click={createCanvas} type="submit">Create Canvas</button>
    </div>
</div>

<style>
    .create-canvas-form > * {
        margin-bottom: 1rem;
        display: flex;
        align-items: start;
    }
</style>