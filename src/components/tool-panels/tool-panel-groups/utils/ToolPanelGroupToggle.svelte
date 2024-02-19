<script lang="ts" context="module">

    import {type BooleanStoreType, createBooleanStore} from "../../../../core/stores/BooleanStoreObject";

    export type ToolPanelGroupToogleConfig = {
        open: BooleanStoreType;
    };

    export function createToolPanelGroupToogleConfig(): ToolPanelGroupToogleConfig {
        return {
            open: createBooleanStore(),
        };
    }

</script>

<script lang="ts">

    import Icon from "../../../generals/Icon.svelte";

    export let openStore: BooleanStoreType;
    let open: boolean = true;

    openStore.subscribe(value => open = value);

</script>

{#if open}
    <div on:click={openStore.toggle} role="switch" aria-checked="{open}" tabindex="0" on:keyup={openStore.toggle} >
        <Icon icon="caret-down-fill" />
    </div>
{:else }
    <div on:click={openStore.toggle} role="switch" aria-checked="{open}" tabindex="0" on:keyup={openStore.toggle} >
        <Icon icon="caret-right-fill" />
    </div>
{/if}