<script context="module" lang="ts">
    import {createBooleanStore, type BooleanStoreType} from "../../stores/BooleanStoreObject";

    export type CheckboxConfigs = {
        /**
         * Represents the checked state of the Checkbox.
         * Provides a reactive (svelte store) boolean number indicating whether the checkbox is checked.
         */
        checked: BooleanStoreType;

        /**
         * Represents the disabled state of the Checkbox.
         * Provides a reactive (svelte store) boolean number indicating whether the checkbox is disabled.
         */
        disabled: BooleanStoreType;

        /**
         * A constant prop indicating the type of the component.
         */
        componentName: "checkbox";

        /**
         * Optional property. If provided, it will be used as the label of the Checkbox.
         */
        label?: string;
    };

    /**
     * Creates a Checkbox store object with the provided label.
     *
     * @param {string} label - The label for the Checkbox.
     * @return {CheckboxConfigs} - The created Checkbox store object.
     */
    export function createCheckboxConfigs(label:string): CheckboxConfigs {
        return {
            checked: createBooleanStore(),
            disabled: createBooleanStore(),
            label: label,
            componentName: "checkbox"
        };
    }
</script>
<script lang="ts">
    import InputLabel from "./utils/InputLabel.svelte";
    import InputBlocker from "./utils/InputBlocker.svelte";
    import Icon from "../generals/Icon.svelte";

    export let config: CheckboxConfigs = createCheckboxConfigs("");


    // tracking store values
    let checked: boolean;
    let disabled: boolean;
    config.checked.subscribe(value => checked = value);
    config.disabled.subscribe(value => disabled = value);

    $: checkedClass = checked ? "checked" : "";

</script>
<div class="checkbox-container input-container">
    <div class="checkbox bg-darkest  {checkedClass}"
         on:click={config.checked.toggle}
         role="checkbox" aria-checked="{checked}" tabindex="0" on:keyup={config.checked.toggle}>
        {#if checked }
            <Icon icon="check" size="{1.5}"/>
        {/if}
    </div>
    {#if config.label}
        <InputLabel highlighted="{checked}" label="{config.label}"/>
    {/if}

    <InputBlocker block="{disabled}" />

</div>
<style>
    .checkbox-container {
        display: flex;
        align-items: center;
        position: relative;
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