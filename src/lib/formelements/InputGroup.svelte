<script lang="ts">
    import Seperator from "./utils/Seperator.svelte";

    export let label:string = "";
</script>

<Seperator />
<div class="input-group">
    <p class="input-group-label text-thin">{label}</p>
    <div class="input-group-inputs">
        <slot></slot>
    </div>
</div>

<style>
    .input-group {
        display: flex;
        margin-bottom: 0.5rem;
    }
    .input-group-label {
        width: 33.3333%;
        margin-right: 1rem;
        text-align: end;
    }
    .input-group-inputs {
        width: 66.6666%
    }
</style>