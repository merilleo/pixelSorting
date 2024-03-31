<script lang="ts">
    import {type BooleanStoreType, createBooleanStore} from "../../core/stores/BooleanStoreObject";

    export let active: BooleanStoreType;

    let disabled: boolean;
    active.subscribe(value => disabled = !value);
    export let onClick = ()=>{
        active.toggle();
    };
</script>

<div class="toolbar-tool {!disabled? "active" : ""}" on:click={onClick}>
    <slot></slot>
</div>

<style>
    .toolbar-tool {
        height: 2rem;
        width:  2rem;
        background-color: var(--color-darker);
    }
    .toolbar-tool.active {
        background-color: var(--color-light);
    }
</style>