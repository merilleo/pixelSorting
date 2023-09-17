<script context="module" lang="ts">


    import type {InputPropsInterface} from "./ts/TS_InputPropsInterface.svelte";

    export type CheckboxPropsBindProps = {
        checked: boolean;
        disabled: boolean;
    }

    export type CheckboxPropsOptionalProps = {
        label?: string;
    }


    export class CheckboxPropsClass implements InputPropsInterface<CheckboxPropsBindProps, CheckboxPropsOptionalProps> {
        bindProps: CheckboxPropsBindProps;
        optionalProps: CheckboxPropsOptionalProps;

        constructor(bindProps: CheckboxPropsBindProps, optionalProps?: CheckboxPropsOptionalProps) {
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
    import { Check } from "svelte-bootstrap-icons";
    import InputLabel from "./utils/InputLabel.svelte";
    import InputBlocker from "./utils/InputBlocker.svelte";
    import Icon from "../Icon.svelte";

    export let checked: boolean = false;
    export let disabled: boolean = false;
    export let label: string = "";

    $: checkedClass = checked ? "checked" : "";

    function handleClick() {checked = !checked}
    function handleKeyUpEnter(event) {
        if (event.key === "Enter") {
            checked = !checked
        }
    }

</script>
<div class="checkbox-container input-container">
    <div class="checkbox bg-darkest  {checkedClass}"
         on:click={handleClick}
         role="checkbox" aria-checked="{checked}" tabindex="0" on:keyup={handleKeyUpEnter}>
        {#if checked }
            <Icon icon="check" size="{1.5}"/>
        {/if}
    </div>
    {#if label}
        <InputLabel highlighted="{checked}" label="{label}"/>
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