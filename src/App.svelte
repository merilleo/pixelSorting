<script lang="ts">
    import Icon from "./components/generals/Icon.svelte";

    import ToolboxPanel from "./components/toolbox-panels/ToolboxPanel.svelte";
    import ToolboxGroup from "./components/toolbox-panels/ToolboxPanelGroup.svelte";
    import ToolboxPanelButton from "./components/toolbox-panels/ToolboxPanelButton.svelte";
    import ToolPanelBuilder from "./components/tool-panels/ToolPanelBuilder.svelte";
    import ImagePreview from "./components/generals/ImagePreview.svelte";
    import {Linear} from "./core/tools/linear/Linear";
    import ToolCollection from "./core/tools/ToolCollection";
    import {Test} from "./core/tools/test/Test";

    let tools = new ToolCollection();
    tools.addTool( new Linear() );
    tools.addTool( new Test() );


    let activeToolName = "";
    tools.activeToolName.subscribe(value => activeToolName = value);

    tools.setActiveToolByName("test");

</script>

<main class="bg-darkest">
    <ToolboxPanel>
        {#each tools.tools as panel }
            <ToolboxPanelButton active="{panel.active}" onClick="{() => tools.setActiveToolByName(panel.name)}" >
                <Icon icon="filter-left" />
            </ToolboxPanelButton>
        {/each}
    </ToolboxPanel>
    {#if activeToolName !== ""}
        <ToolPanelBuilder config="{tools.getToolByName(activeToolName).uiConfig}" />
    {/if}
    <div class="content">
        <ImagePreview imageUrl=""/>

    </div>
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
    .content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
