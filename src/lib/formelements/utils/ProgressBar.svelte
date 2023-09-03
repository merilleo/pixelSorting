<script lang="ts">

    export let progress: number = 0.5;

    $: validatedPercent = Math.max(0.0, Math.min(1.0, progress)) * 100;

</script>

<div class="progess-bar bg-darkest" style:width="{validatedPercent}%" ></div>

<style>
    .progess-bar{
        position: absolute;
        height: 3px;
        bottom: 0;
        left: 0;
    }
</style>