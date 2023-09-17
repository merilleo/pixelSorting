<script context="module" lang="ts">

    export interface ContextMenuGroupHeaderProps {
        label: string;
        enabled:boolean;
        isOpen:boolean;
        hasCheckbox?:boolean;
        hasPresets?:boolean;
    }

</script>

<script lang="ts">

    import Checkbox from "../formelements/Checkbox.svelte";
    import { ArrowsCollapse, ArrowsExpand } from "svelte-bootstrap-icons";
    import Icon from "../Icon.svelte";

    export let label: string = "";
    export let hasCheckbox:boolean = false;
    export let hasPresets:boolean = false;
    export let enabled:boolean = false;
    export let isOpen:boolean = false;

    function handleClick() {isOpen = !isOpen}
</script>

<div class="contextmenu-group-header bg-dark">

    <div class="contextmenu-left">
        {#if isOpen}
            <div on:click={handleClick} >
                <Icon icon="caret-down-fill" />
            </div>
        {:else }
            <div on:click={handleClick} >
                <Icon icon="caret-right-fill" />
            </div>
        {/if}
        {#if hasCheckbox}
            <Checkbox bind:checked={enabled}/>
        {/if}
        {#if label}
            <p class="label text-thin">{label}</p>
        {/if}
    </div>
    {#if hasPresets}
        <div></div>
    {/if}
</div>

<style>
    .contextmenu-group-header {
        display: flex;
        padding: var(--context-group-padding);
    }
    .contextmenu-left {
        display: flex;
        gap: 0.25rem;
    }
    .label {
        margin-left: 0.5rem;
    }
</style>