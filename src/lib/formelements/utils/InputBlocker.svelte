<script lang="ts">

    import ErrorMessage from "./ErrorMessage.svelte";

    export let block: boolean = false;

    let showError: boolean = false;
    let errorMessage: string = "";

    $: blockClass = block ? "block" : "";

    function handleClick() {
        errorMessage = "This field is disabled";
        showError = true;
    }
</script>

<div class="input-blocker bg-darker {blockClass}" on:click={handleClick}></div>
<ErrorMessage bind:show="{showError}" text="{errorMessage}" />

<style>
    .input-blocker {
        position: absolute;
        z-index: 3;
        width: 100%;
        height: 100%;
        opacity: 0.65;
        display: none;
    }
    .input-blocker.block {
        display: block;
    }
</style>