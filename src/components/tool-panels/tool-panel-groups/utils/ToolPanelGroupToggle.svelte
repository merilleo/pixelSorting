<script lang="ts" context="module">
    import type {BooleanStoreType} from "../../../../TypeLibrary";
    import {createBooleanStoreObject} from "../../../../stores/BooleanStoreObject";

    export type ToolPanelGroupToogleConfig = {
        open: BooleanStoreType;
    };

    export function createToolPanelGroupToogleConfig(): ToolPanelGroupToogleConfig {
        return {
            open: createBooleanStoreObject(),
        };
    }

</script>

<script lang="ts">

    import {onMount} from "svelte";
    import {Icon} from "../../../../ComponentLibrary";

    export const openStore: BooleanStoreType = createBooleanStoreObject();
    let open: boolean = true;

    openStore.subscribe(value => open = value);

    /*export const config: ToolPanelGroupToogleConfig = {
        open: createBooleanStoreObject(),
    };

    onMount(() => {
        config.open.setValue(open);
    });

    let openValue: boolean;
    config.open.subscribe(number => openValue = number);*/

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