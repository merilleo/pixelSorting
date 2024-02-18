<script lang="ts" context="module">

    import type {BooleanStoreType} from "../../../core/stores/BooleanStoreObject";
    import type {CheckboxConfig} from "../../form-elements/Checkbox.svelte";

    export type ToolPanelGroupHeaderConfigs = {
        label: string;
        toggle: BooleanStoreType;
        checkbox: CheckboxConfig;
        componentName: "toolPanelGroupHeader";
    };


</script>

<script lang="ts">

    import Checkbox, {createCheckboxConfig} from "../../form-elements/Checkbox.svelte";
    import Icon from "../../generals/Icon.svelte";
    import ToolPanelGroupToggle from "./utils/ToolPanelGroupToggle.svelte";
    import {onMount} from "svelte";
    import {createBooleanStore} from "../../../core/stores/BooleanStoreObject";

    export let label: string = "";
    export let isOpen:boolean = false;

    export const config: ToolPanelGroupHeaderConfigs = {
        toggle: createBooleanStore(),
        checkbox: createCheckboxConfig("Default Label"),
        label: "",
        componentName: "toolPanelGroupHeader"
    };

    onMount(() => {
        config.toggle.setValue(true);
        config.checkbox.checked.setValue(true);
        config.label = label;
        config.componentName = "toolPanelGroupHeader";
    });

    // tracking store values
    let toggleValue: boolean;
    let checkboxdValue: boolean;
    config.toggle.subscribe(value => toggleValue = value);
    config.checkbox.checked.subscribe(value => checkboxdValue = value);

    function handleClick() {
        isOpen = !isOpen;
    }
</script>

<div class="contextmenu-group-header bg-dark">

    <div class="contextmenu-left">
        <ToolPanelGroupToggle openStore="{config.toggle}"/>
        <slot></slot>
        {#if label}
            <p class="label text-thin">{config.label}</p>
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