<script lang="ts">

    export let type: "biggest"|"big"|"medium"|"small" = "biggest";
    export let text: string = "";

</script>

{#if type === "biggest"}
    <h1 class="{type}">{text}</h1>
{:else if type === "big"}
    <h2 class="{type}">{text}</h2>
{:else if type === "medium"}
    <h3 class="{type}">{text}</h3>
{:else if type === "small"}
    <h4 class="{type}">{text}</h4>
{/if}

<style>
    h1,h2,h3,h4 {
        color: var(--primary);
    }
    h1.biggest {

    }
    h2.big {

    }
    h3.medium {

    }
    h4.small {

    }
</style>
