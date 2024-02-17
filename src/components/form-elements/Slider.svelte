<script lang="ts" context="module">
    import {type BooleanStoreType, createBooleanStore} from "../../stores/BooleanStoreObject";
    import {createNumberStore, type NumberStoreType} from "../../stores/NumberStoreObject";

    export type NumberTypes = "integer"|"float";

    export type SliderConfigs = {
        mode: NumberTypes;
        number: NumberStoreType;
        disabled: BooleanStoreType;
        componentName: "slider";
        start: number;
        min: number;
        max: number;
        step: number;
        unit: string;
        hasConstraints?: boolean;
        showError?: boolean;
    };

    export function createSliderConfigs(
        mode: NumberTypes,
        start: number,
        min: number,
        max: number,
        step: number,
        unit: string
    ): SliderConfigs {
        return {
            mode: mode,
            number: createNumberStore(start),
            disabled: createBooleanStore(),
            componentName: "slider",
            start: start,
            min: min,
            max: max,
            step: step,
            unit: unit,
            hasConstraints: true,
            showError: true,
        };
    }
</script>

<script lang="ts">
    import { afterUpdate } from "svelte";
    import InputBlocker from "./utils/InputBlocker.svelte";
    import {
        clamp,
        isOutOfRange,
        parseStringToFloat
    } from "../../utils/MathUtils";
    import ErrorMessage from "./utils/ErrorMessage.svelte";
    import ProgressBar from "./utils/ProgressBar.svelte";

    export let config: SliderConfigs;


    export let value: number;
    export let disabled: boolean;

    config.number.subscribe(number => value = number);
    config.disabled.subscribe(value => disabled = value);
    export let showError = false;
    let dragging: boolean = false;
    let edit: boolean = false;
    let errorMessageText:string = "";
    let inputElement: HTMLInputElement;

    let stepDragModifier: number = 0.5;

    $: displayNumber =  value.toFixed(config.mode === "float" ? 2 : 0);
    $: disabledClass = disabled ? "disabled" : "";

    afterUpdate(() => {
        if (edit) {
            inputElement.focus();
        }
    });

    function fireErrorMessage(text:string) {
        errorMessageText = text;
        showError = true;
    }

    function addToNumber(step: number): void {
        if (!disabled) {
            const currentStep = dragging ? stepDragModifier * step : step;
            const newValue = value + currentStep;

            if (newValue > config.max ) {
                config.number.set(config.max);

                fireErrorMessage(`${config.max} ${config.unit} is the maximum`);
            }
            else if (newValue < config.min ) {
                config.number.set(config.min);

                fireErrorMessage(`${config.min} ${config.unit} is the minimum`);
            }
            else {
                config.number.add(currentStep);
            }
        }
    }

    function handleMouseDown(mouseDownEvent: MouseEvent) {
        // Prevent the default action
        mouseDownEvent.preventDefault();

        // Set dragging to true and determine start position
        dragging = true;
        let startX = mouseDownEvent.clientX;
        let currentX = mouseDownEvent.clientX;

        // Movement threshold
        const movementThreshold = 10;

        function handleMouseMove(mouseMoveEvent: MouseEvent) {
            // Check if dragging or target is the active element
            if (!dragging || mouseMoveEvent.target === document.activeElement) {
                return;
            }

            // Determine direction of mouse move
            const deltaX = currentX - mouseMoveEvent.clientX;

            if (deltaX < -movementThreshold) {
                addToNumber(config.step);
                currentX = mouseMoveEvent.clientX;
            }
            else if (deltaX > movementThreshold) {
                addToNumber(-config.step);
                currentX = mouseMoveEvent.clientX;
            }
        }

        function handleMouseUp(mouseUpEvent: MouseEvent) {
            // Stop dragging and check delta X
            dragging = false;
            const deltaX = Math.abs(startX - mouseUpEvent.clientX);

            // Remove event listeners
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);

            // If movement below threshold, switch to edit mode
            if (deltaX < movementThreshold) {
                edit = true;
            }
        }

        // Add event listeners for mouse move and up
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    }
    function handleFormSubmission(event: SubmitEvent) {
        event.preventDefault();
        inputElement.blur();
    }

    function handleBlur(event: FocusEvent) {
        event.preventDefault();

        const target = event.target as HTMLInputElement;
        const inputValue = parseStringToFloat(target.value);
        if (isNaN(inputValue)) {
            fireErrorMessage(`${target.value} is not a number`);
        }
        else {
            config.number.set(getNumberFromInput(inputValue));
        }

        target.value = value.toFixed(config.mode === "float" ? 2 : 0);
        edit = false;
        target.blur();
    }

    function getNumberFromInput(number: number):number {
        if (isOutOfRange(number, config.min, config.max)) {
            fireErrorMessage(`Number must be between ${config.min} - ${config.max} ${config.unit}`);
        }
        return clamp(number, config.min, config.max);
    }


    function handleKeyDownEnter(event: KeyboardEvent) {
        if (event.key === "Escape" || event.key === "Tab") return;

        event.preventDefault();

        if (event.key === "Enter") {
            edit = true;
        }
        else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
            addToNumber(-config.step);
        }
        else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
            addToNumber(config.step);
        }
    }
</script>


<div class="input-container input-number {disabledClass}">
    {#if !edit }
        <button class="number-modifier subtractor bg-darkest color-light" on:click={()=>addToNumber(-config.step)}>&lt;</button>
    {/if}

    <form class="number-input-form bg-darkest " on:submit="{handleFormSubmission}">
        {#if edit }
            <input type="text"
                   class="number-input text-thin color-light"
                   on:blur={handleBlur}
                   bind:this={inputElement}
                   value="{displayNumber}"/>
        {:else }
            <ProgressBar progress="{(value - config.min) / (config.max - config.min)}"/>
            <div class="number-display text-thin"
                 on:mousedown={handleMouseDown}
                 role="button" tabindex="0" on:keydown={handleKeyDownEnter}>
                <span>{displayNumber} {config.unit}</span>
            </div>

        {/if}

    </form>

    {#if !edit}
        <button class="number-modifier adder bg-darkest" on:click={()=>addToNumber(config.step)}>&gt;</button>
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