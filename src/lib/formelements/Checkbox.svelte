<script lang="ts">
    import { Check } from "svelte-bootstrap-icons";
    import InputLabel from "./utils/InputLabel.svelte";

    export let checked: boolean = false;
    export let label: string = "";

    $: checkedClass = checked ? "checked" : "";

    function handleClick() {checked = !checked}

</script>
<div class="checkbox-container input-container">
    <div class="checkbox bg-darkest  {checkedClass}" on:click={handleClick}>
        {#if checked }
            <Check style="width: var(--input-height); height: var(--input-height);"/>
        {/if}
    </div>
    {#if label}
        <InputLabel highlighted="{checked}" label="Check 1"/>
    {/if}
</div>

<style>
    .checkbox-container {
        display: flex;
        align-items: center;
    }
    .checkbox {
        width: var(--input-height);
        height: var(--input-height);
        border-radius: var(--border-radius);
    }
    .checkbox:hover {
        background-color: var(--color-darker);
    }
    .icon {
        width: var(--input-height);
        height: var(--input-height);
    }
</style>