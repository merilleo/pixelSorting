<script context="module" lang="ts">

    import type {InputGroupProps} from "../formelements/InputGroup.svelte";

    export interface ContextMenuGroupBodyProps {
        isOpen: boolean;
        groups: InputGroupProps[];
    }

</script>

<script lang="ts">
    import { slide } from 'svelte/transition';

    export let isOpen: boolean = true;
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