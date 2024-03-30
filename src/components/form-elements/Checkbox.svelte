<script context="module" lang="ts">

    import {type BooleanStoreType, createBooleanStore} from "../../core/stores/BooleanStoreObject";
    import {BaseConfig} from "../../core/tools/BaseConfig";

    export class CheckboxConfig extends BaseConfig {
        checked: BooleanStoreType;
        disabled: BooleanStoreType;
        label: string;

        constructor(label?:string) {
            super("checkbox");
            this.checked = createBooleanStore();
            this.disabled = createBooleanStore();
            this.label = label === undefined ? "" : label;
        }
    }
</script>
<script lang="ts">
    import InputLabel from "./utils/InputLabel.svelte";
    import InputBlocker from "./utils/InputBlocker.svelte";
    import Icon from "../generals/Icon.svelte";

    export let config: CheckboxConfig = new CheckboxConfig();


    // tracking store values
    let checked: boolean;
    let disabled: boolean;
    config.checked.subscribe(value => checked = value);
    config.disabled.subscribe(value => disabled = value);

    $: checkedClass = checked ? "checked" : "";

    function handleKeyUp(event: KeyboardEvent): void {
        event.preventDefault();

        if (event.key === "Enter") {
            config.checked.toggle;
        }
    }

</script>
<div class="checkbox-container input-container">
    <div class="checkbox bg-darkest  {checkedClass}"
         on:click={config.checked.toggle}
         role="checkbox" aria-checked="{checked}" tabindex="0" on:keyup={handleKeyUp}>
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