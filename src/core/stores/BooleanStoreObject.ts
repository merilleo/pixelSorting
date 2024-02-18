import {writable} from "svelte/store";

/**
 * Creates a boolean store with an initial state.
 *
 * @param {boolean} [initialState=false] - The initial state of the boolean store.
 * @return {object} - An object containing methods to subscribe, set, update, toggle, and get the number of the boolean store.
 */
export function createBooleanStore(initialState: boolean = false) {
    const {subscribe, set, update} = writable(initialState);
    let stateValue = initialState; // Introduced variable

    function toggle(): void {
        update(value => {
            stateValue = !value; // Keep track of number
            return stateValue;
        });
    }

    function setValue(newValue: boolean): void {
        set(newValue);
        stateValue = newValue; // Keep track of number
    }

    function getValue(): boolean {
        return stateValue; // Return current state number
    }

    return {subscribe, setValue, toggle, getValue};
}

const storeBoolean = createBooleanStore();

/**
 * Represents a store for boolean type.
 * @typedef {typeof storeBoolean} BooleanStoreType
 */
export type BooleanStoreType = typeof storeBoolean;