<script lang="ts">
    import Resizer from "./utils/Resizer.svelte";

    let width: number = 500;

</script>


<div class="contextmenu bg-mid "
     style:width="{width}px">
    <div class="contextmenu-container">
        <slot></slot>
    </div>
    <Resizer bind:width={width} />
</div>

<style>
    .contextmenu {
        height: 100%;
        display: flex;

    }
    .contextmenu-container {
        width: 100%;
    }
</style>