<script lang="ts">
    import Icon from "./components/generals/Icon.svelte";

    import ToolboxPanel from "./components/toolbox-panels/ToolboxPanel.svelte";
    import ToolboxGroup from "./components/toolbox-panels/ToolboxPanelGroup.svelte";
    import ToolboxPanelButton from "./components/toolbox-panels/ToolboxPanelButton.svelte";
    import ToolPanelBuilder from "./components/tool-panels/ToolPanelBuilder.svelte";

    import UIConfig from "./tools/linear/UIConfig";

</script>

<main class="bg-darkest">

    <ToolboxPanel>
        <ToolboxGroup>
            <ToolboxPanelButton> <Icon icon="filter-left" /></ToolboxPanelButton>
            <ToolboxPanelButton />
        </ToolboxGroup>
        <ToolboxGroup>
            <ToolboxPanelButton />
            <ToolboxPanelButton />
        </ToolboxGroup>
    </ToolboxPanel>

    <ToolPanelBuilder config="{UIConfig}" />


</main>

<style>
    main {
        height: 100vh;
        display: flex;
    }
    @supports (height: 100dvh) {
        main {
            height: 100dvh;
        }
    }
</style>
