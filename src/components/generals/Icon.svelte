<script lang="ts">

    import iconJsonFile from "../../resources/icons/bootstrapIcons.json";


    type IconKeys = keyof typeof iconJsonFile;
    type Icons =  IconKeys;
    export let icon: Icons;
    export let size: number = 1.125;
    
</script>

<div class="icon" style="--width:{size}rem">
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
    }
</style>