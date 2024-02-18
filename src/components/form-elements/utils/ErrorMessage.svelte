<script lang="ts">
    import { fade, slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import {afterUpdate} from "svelte";

    export let show: boolean = false;
    export let text: string = "Error";

    const animationDuration = 200;

    $: showClass = show ? "show" : "";

    afterUpdate(() => {
        if (show) {
            setTimeout(()=>{
show = false;
}, 800);
        }
    });

</script>
{#if show}
    <div class="error-message bg-darker text-thin {showClass}" transition:slide={{ duration: animationDuration, easing: quintOut, axis: "y" }}>
        <span>{text}</span>
    </div>
{/if}

<style>
    .error-message {
        position: absolute;
        z-index: 3;
        width: 100%;
        height: 100%;
        display: none;
        text-align: center;
        top: 0;
        left: 0;
    }
    .error-message.show {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>