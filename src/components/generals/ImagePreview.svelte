<script lang="ts">
    import Spinner from "./Spinner.svelte";
    import Icon from "./Icon.svelte";

    export let imageUrl = "";
    export let isLoading = false;
</script>

<div class="image-preview">
    {#if isLoading}
        <div class="loading-text">Loading Image</div>
        <Spinner />
    {:else if imageUrl === "" && !isLoading}
        <Icon icon="image" size="{10}" fill="mid"/>
    {:else if imageUrl !== "" && !isLoading}
        <img src="{imageUrl}" alt="" />
    {/if}
</div>

<style>

</style>

