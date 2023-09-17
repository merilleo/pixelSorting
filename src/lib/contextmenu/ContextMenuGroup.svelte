<script context="module" lang="ts">

    import type {ContextMenuGroupHeaderProps} from "./ContextMenuGroupHeader.svelte";
    import type {ContextMenuGroupBodyProps} from "./ContextMenuGroupBody.svelte";

    export interface ContextMenuGroupProps {
        header: ContextMenuGroupHeaderProps;
        body: ContextMenuGroupBodyProps;
    }

</script>

<script lang="ts">

</script>

<div class="contextmenu-group bg-dark">
    <slot></slot>
</div>

<style>
    .contextmenu-group {

    }
</style>