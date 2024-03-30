<script lang="ts" context="module">

    import {type BooleanStoreType, createBooleanStore} from "../../core/stores/BooleanStoreObject";
    import {BaseConfig} from "../../core/tools/BaseConfig";

    export class SwitchConfig extends BaseConfig {
        checked: BooleanStoreType;
        disabled: BooleanStoreType;
        labelOff?: string;
        labelOn?: string;

        constructor(labelOff?:string, labelOn?:string ) {
            super("switch");
            this.checked = createBooleanStore();
            this.disabled = createBooleanStore();
            this.labelOff = (labelOff !== undefined) ? labelOff : "";
            this.labelOn = (labelOn !== undefined) ? labelOn : "";
        }
    }
</script>

<script lang="ts">
    import InputLabel from "./utils/InputLabel.svelte";
    import InputBlocker from "./utils/InputBlocker.svelte";

    export let config: SwitchConfig = new SwitchConfig();

    let checked: boolean = false;
    let disabled: boolean = false;
    config.checked.subscribe(value => checked = value);
    config.disabled.subscribe(value => disabled = value);



    $: checkedClass = checked ? "checked" : "";
    $: label = checked ? config.labelOn : config.labelOff;


</script>
<div class="toggleswitch-container input-container">
    <div class="toggle bg-darkest  {checkedClass}"
         on:click={config.checked.toggle}
         role="switch" aria-checked="{checked}" tabindex="0" on:keyup={config.checked.toggle}>
        <div class="indicator"></div>
    </div>
    {#if config.labelOff !== "" || config.labelOn !== ""}
        <InputLabel highlighted="{checked}" label="{label}"/>
    {/if}

    <InputBlocker block="{disabled}" />
</div>
<style>
    .toggleswitch-container {
        display: flex;
        align-items: center;
        position: relative;
    }
    .toggle {
        width: calc( 2 * var(--input-height));
        height: var(--input-height);
        border-radius: var(--border-radius);
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .toggle.checked {
        justify-content: flex-end;
    }
    .toggle:hover {
        background-color: var(--color-darker);
    }

    .toggle .indicator {
        width: calc( 0.625 * var(--input-height));
        height: calc( 0.625 * var(--input-height));
        border-radius: var(--border-radius);
        background-color: var(--color-light);
        margin: 0 0.25rem;
    }
    .toggle.checked .indicator {
        background-color: var(--color-lighter);
    }
</style>