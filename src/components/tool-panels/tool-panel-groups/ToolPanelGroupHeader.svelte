<script lang="ts" context="module">

    import {type BooleanStoreType, createBooleanStore} from "../../../core/stores/BooleanStoreObject";
    import type {CheckboxConfig, CheckboxConfig} from "../../form-elements/Checkbox.svelte";
    import {createToolPanelGroupToogleConfig} from "./utils/ToolPanelGroupToggle.svelte";

    export type ToolPanelGroupHeaderConfig = {
        title: string;
        toggle: BooleanStoreType;
        checkbox: CheckboxConfig | null;
        componentName: "toolPanelGroupHeader";
    };

    export function createToolPanelGroupHeaderConfig(title: string, checkboxConfig: CheckboxConfig | CheckboxConfig | null): ToolPanelGroupHeaderConfig {
        return {
            title: title,
            toggle: createBooleanStore(true),
            checkbox: checkboxConfig,
            componentName: "toolPanelGroupHeader",
        };
    }

</script>

<script lang="ts">

    import Checkbox from "../../form-elements/Checkbox.svelte";
    import ToolPanelGroupToggle from "./utils/ToolPanelGroupToggle.svelte";

    export let config: ToolPanelGroupHeaderConfig;

    let isOpen:boolean = false;
    let disabled:boolean = false;

    config.toggle.subscribe(value => isOpen = value);

    if (config.checkbox !== null) {
        config.checkbox.checked.subscribe(value => disabled = value);
    }

</script>

<div class="contextmenu-group-header bg-dark {isOpen}">

    <div class="contextmenu-left">
        <ToolPanelGroupToggle openStore="{config.toggle}"/>
        {#if config.checkbox !== null}
            <Checkbox config="{config.checkbox}" />
        {/if}
        {#if config.title}
            <p class="label text-thin">{config.title}</p>
        {/if}
    </div>
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