<script context="module" lang="ts">

    import type {InputPropsInterface} from "./ts/TS_InputPropsInterface.svelte";

    export type ToggleSwitchPropsBindProps = {
        checked: boolean;
        disabled: boolean;
    }

    export type ToggleSwitchPropsOptionalProps = {
        hasLabel?: boolean;
        labelOff?: string;
        labelOn?: string;
    }


    export class ToggleSwitchPropsClass implements InputPropsInterface<ToggleSwitchPropsBindProps, ToggleSwitchPropsOptionalProps> {
        bindProps: ToggleSwitchPropsBindProps;
        optionalProps: ToggleSwitchPropsOptionalProps;

        constructor(bindProps: ToggleSwitchPropsBindProps, optionalProps?: ToggleSwitchPropsOptionalProps) {
            this.bindProps = bindProps;

            if (typeof optionalProps !== 'undefined') {
                this.optionalProps = optionalProps;
            } else {
                this.optionalProps = {};
            }
        }
    }

</script>

<script lang="ts">
    import InputLabel from "./utils/InputLabel.svelte";
    import InputBlocker from "./utils/InputBlocker.svelte";

    export let checked: boolean = false;
    export let disabled: boolean = false;
    export let hasLabel: boolean = true;
    export let labelOff: string = "Off";
    export let labelOn: string = "On";

    $: checkedClass = checked ? "checked" : "";
    $: label = checked ? labelOn : labelOff;

    function handleClick() {checked = !checked}
    function handleKeyUpEnter(event) {
        if (event.key === "Enter") {
            checked = !checked
        }
    }

</script>
<div class="toggleswitch-container input-container">
    <div class="toggle bg-darkest  {checkedClass}"
         on:click={handleClick}
         role="switch" aria-checked="{checked}" tabindex="0" on:keyup={handleKeyUpEnter}>
        <div class="indicator"></div>
    </div>
    {#if hasLabel}
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