<script lang="ts" context="module">
    import iconJsonFile from "../../resources/icons/bootstrapIcons.json";

    export type IconName = keyof typeof iconJsonFile;
</script>

<script lang="ts">


    type FillColors = "darkest" | "darker" | "dark" | "mid" | "light" | "lighter";
    export let icon: IconName;
    export let size: number = 1.125;
    export let inline: boolean = false;
    export let fill: FillColors = "lighter";

    let inlineStyle = inline ? "inline" : "";
    
</script>

<div class="icon {inlineStyle}" style="--width:{size}rem; --fill:var(--color-{fill})">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
        {@html iconJsonFile[icon]}
    </svg>
</div>

<style>
    .icon {
        width: var(--width);
        height: var(--width);
    }
    .icon svg {
        width: var(--width);
        height: var(--width);
        fill: var(--fill)
    }
    .inline {
        display: inline;
    }
</style>