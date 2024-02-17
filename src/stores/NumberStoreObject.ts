import {writable} from "svelte/store";

export function createNumberStore(number: number = 0) {
    const {subscribe, set, update} = writable(number);
    function add(amount: number): void {
        update(value => {
            return value + amount;
        });
    }
    return {subscribe, set, update, add};
}

const numberStoreObject = createNumberStore();

/**
 * Represents a store for boolean type.
 * @typedef {typeof numberStoreObject} NumberStoreType
 */
export type NumberStoreType = typeof numberStoreObject;