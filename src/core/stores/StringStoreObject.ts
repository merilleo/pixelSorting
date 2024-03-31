import {writable} from "svelte/store";

export function createStringStore(initialState: string = "") {
    const {subscribe, set, update} = writable(initialState);
    let stateValue = initialState;
    function setValue(newValue: string): void {
        set(newValue);
        stateValue = newValue; // Keep track of number
    }
    return {subscribe, set, update, setValue};
}

const stringStoreObject = createStringStore();

/**
 * Represents a store for boolean type.
 * @typedef {typeof stringStoreObject} StringStoreType
 */
export type StringStoreType = typeof stringStoreObject;