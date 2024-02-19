<script lang="ts">
    import { slide } from "svelte/transition";
    import type {BooleanStoreType} from "../../../core/stores/BooleanStoreObject";

    export let openStore: BooleanStoreType;
    let isOpen: boolean = true;
    openStore.subscribe(value => isOpen = value);

    /*export let disabledStore: BooleanStoreType;
    let disabled: boolean = false;
    if (disabledStore !== null) {
        disabledStore.subscribe(value => disabled = value);
    }*/
</script>

{#if isOpen}
    <div class="contextmenu-group-body" transition:slide>
        <slot></slot>
    </div>
{/if}

<style>

    .contextmenu-group-body {
        padding: var(--context-group-padding);
    }
</style>