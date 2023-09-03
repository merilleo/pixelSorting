<script lang="ts">

    export let block: boolean = false;

    $: blockClass = block ? "block" : "";

</script>

<div class="input-blocker bg-darker {blockClass}"></div>

<style>
    .input-blocker {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.65;
        display: none;
    }
    .input-blocker.block {
        display: block;
    }
</style>