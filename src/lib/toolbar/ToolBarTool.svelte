<script lang="ts">
    export let active:boolean = false;
    export let onClick = ()=>{active = !active};
</script>

<div class="toolbar-tool {active? 'active' : ''}" on:click={onClick}>
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