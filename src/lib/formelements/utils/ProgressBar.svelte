<script lang="ts">

    export let progress: number = 0.5;

    $: validatedPercent = Math.max(0.0, Math.min(1.0, progress)) * 100;
    $: highlighterPercent = Math.abs(validatedPercent * 2 - 100);
    $: bgColorCLassMin = validatedPercent < 10  ? "bg-lighter" : "";
    $: bgColorCLassMax = validatedPercent > 90 ? "bg-lighter" : "";

</script>

<div class="progress-bar"  >
    <div class="highlighter-start {bgColorCLassMin}"></div>
    <div class="progress-bar-container">
        <div class="highlighter-progress bg-light" style:width="{highlighterPercent}%"></div>
    </div>
    <div class="highlighter-end backgroundColorCLass {bgColorCLassMax}"></div>
</div>
<style>
    .progress-bar {
        position: absolute;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        opacity: 0.2;
    }
    .progress-bar div {
        height: 100%;

    }
    .progress-bar-container {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .highlighter-progress {
      opacity: 0.5;
    }

    .highlighter-start,
    .highlighter-end {
        display: block;
        width: var(--input-height);
    }
</style>