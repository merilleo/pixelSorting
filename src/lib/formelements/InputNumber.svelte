<script lang="ts">
    import { afterUpdate } from 'svelte';
    import InputBlocker from "./utils/InputBlocker.svelte";
    import {
        isFloat,
        isInteger,
        isOutsideConstraints,
        stringToConstrainedFloat,
        stringToConstrainedInt
    } from "../../ts/MathUtils";
    import ErrorMessage from "./utils/ErrorMessage.svelte";
    import ProgressBar from "./utils/ProgressBar.svelte";

    type NumberTypes = "integer"|"float";

    export let type: NumberTypes = "float";
    export let start: number = 50;
    export let value: number = start;
    export let min: number = 0;
    export let max: number = 100;
    export let step: number = 5;
    export let unit: string = "";
    export let hasConstraints = true;
    export let disabled: boolean = false;

    export let showError = false;
    let dragging: boolean = false;
    let edit: boolean = false;
    let errorMessageText:string = "";
    let inputElement;

    let stepDrag: number = step * 0.5;

    $: displayNumber =  value.toFixed(type === "float" ? 2 : 0);
    $: disabledClass = disabled ? "disabled" : "";

    afterUpdate(() => {
        if (edit) {
            inputElement.focus();
        }
    });


    function increment(): void {
        if (!disabled) {
            const currentStep = dragging ? stepDrag : step;
            if (hasConstraints && value + currentStep > max ) {
                value = max;
                fireErrorMessage(`${max} ${unit} is the maximum`);
            } else {
                value += currentStep;
            }
        }
    }

    function decrement(): void {
        if (!disabled) {
            const currentStep = dragging ? stepDrag : step;
            if (hasConstraints && value - currentStep < min) {
                value = min;
                fireErrorMessage(`${min} ${unit} is the minimum`);
            } else {
                value -= currentStep;
            }
        }
    }

    function handleMouseDown(mouseDownEvent) {
        mouseDownEvent.preventDefault();
        dragging = true;
        let startX = mouseDownEvent.clientX;
        let currentX = mouseDownEvent.clientX;

        function handleMouseMove(mouseMoveEvent) {
            if (!dragging || mouseMoveEvent.target === document.activeElement) return;
            const deltaX = currentX - mouseMoveEvent.clientX;

            if (deltaX < -10) {
                increment() ;
                currentX = mouseMoveEvent.clientX;
            } else if (deltaX > 10) {
                decrement();
                currentX = mouseMoveEvent.clientX;
            }
        }

        function handleMouseUp(mouseUpEvent) {
            dragging = false;
            const deltaX = Math.abs(startX - mouseUpEvent.clientX);

            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);

            if (deltaX < 10) {
                edit = true;
                // afterUpdate focuses the input element after this
            }
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    function handleFormSubmission(event) {
        event.preventDefault();
        inputElement.blur();
    }

    function handleBlur(event,) {
        event.preventDefault();
        const inputValue = event.target.value;

        if (!isStringValidNumber(inputValue, type)) {
            fireErrorMessage(`${inputValue} is not a number`);
        } else {
            value = getNumberFromInput(inputValue, hasConstraints, min, max, type);
        }
        event.target.value = value.toFixed(type === "float" ? 2 : 0);
        edit = false;
        event.target.blur();
    }


    function isStringValidNumber(value, numberType:NumberTypes): boolean {
        return numberType === "float" ? isFloat(value) : isInteger(value);
    }

    function getNumberFromInput(value, hasConstraints, min, max, numberType:NumberTypes):number {
        if (hasConstraints) {
            if (isOutsideConstraints(value, min, max)) {
                fireErrorMessage(`Number must be between ${min} - ${max} ${unit}`);
            }
            return numberType === "float"
                ? stringToConstrainedFloat(value, min, max)
                : stringToConstrainedInt(value,min, max);
        } else {
            return numberType === "integer"
                ? Math.round(parseFloat(value))
                : parseFloat(value);
        }
    }

    function fireErrorMessage(text:string) {
        errorMessageText = text;
        showError = true;
    }

    function handleKeyDownEnter(event) {
        if (event.keyCode == 9) return; //Tab
        event.preventDefault();
        if (event.key === "Enter") {
            edit = true;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
            decrement();
        } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
            increment();
        }
    }
</script>


<div class="input-container input-number {disabledClass}">
    {#if !edit }
        <button class="number-modifier subtractor bg-darkest color-light" on:click={decrement}>&lt;</button>
    {/if}

    <form class="number-input-form bg-darkest " on:submit="{handleFormSubmission}">
        {#if edit }
            <input type="text"
                   class="number-input text-thin color-light"
                   on:blur={handleBlur}
                   bind:this={inputElement}
                   value="{displayNumber}"/>
        {:else }
            {#if hasConstraints}
                <ProgressBar progress="{value / max}"/>
            {/if}
            <div class="number-display text-thin"
                 on:mousedown={handleMouseDown}
                 role="button" tabindex="0" on:keydown={handleKeyDownEnter}>
                <span>{displayNumber} {unit}</span>
            </div>

        {/if}

    </form>

    {#if !edit}
        <button class="number-modifier adder bg-darkest" on:click={increment}>&gt;</button>
    {/if}

    <InputBlocker block="{disabled}" />
    <ErrorMessage bind:show="{showError}" text="{errorMessageText}" />
</div>


<style>
    .input-number {
        position: relative;
        display: flex;
        justify-content: stretch;
        height: var(--input-height);
    }


    .number-modifier {
        display: none;
        z-index: 2;
        width: var(--input-height);
        height: 100%;
    }

    .input-number:hover .number-modifier {
        display: block;
    }
    .input-number.disabled:hover .number-modifier {
        display: none;
    }

    .number-modifier:hover {
        background-color: var(--color-dark);
    }
    .number-modifier:hover:active {
        border: 3px solid var(--color-darker);
    }
    .number-modifier.subtractor {
        border-radius: var(--border-radius) 0 0 var(--border-radius);
    }
    .number-modifier.adder {
        border-radius:  0 var(--border-radius) var(--border-radius) 0;
    }


    .number-input-form {
        width: 100%;
    }

    .number-input {
        width: 100%;
        height: 100%;
        text-align: center;
        border-radius: var(--border-radius);
    }

    .number-display {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        text-align: center;
        cursor: e-resize;

    }
    .input-number:hover form {
        background-color: var(--color-darker);
    }

</style>