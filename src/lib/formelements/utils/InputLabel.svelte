<script lang="ts">
    export let label: string = "";
    export let highlighted: boolean = false;
    $: highlightClass = highlighted ? "" : "color-light"
</script>

<p class="input-label text-thin text-14 {highlightClass}">{label}</p>

<style>
    .input-label {
        margin-left: 0.5rem;
    }
</style>