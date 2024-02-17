import {writable} from "svelte/store";

export function createNumberStoreObject(number: number = 0) {
    const {subscribe, set, update} = writable(number);
    function incrementBy(step: number): void {
        update(value => {
            return value + step;
        });
    }
    return {subscribe, set, update, incrementBy};
}

const numberStoreObject = createNumberStoreObject();

/**
 * Represents a store for boolean type.
 * @typedef {typeof numberStoreObject} NumberStoreType
 */
export type NumberStoreType = typeof numberStoreObject;