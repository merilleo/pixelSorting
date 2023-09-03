<script lang="ts">
    import CreateCanvasForm from "./lib/CreateCanvasForm.svelte";
    import {canvasContainerId, sketch, stage} from "./store.js";
    import SelectImage from "./lib/SelectImage.svelte";
    import StageSelectImage from "./lib/StageSelectImage.svelte";
    import StageSelectSorting from "./lib/StageSelectSorting.svelte";
    import Toolbar from "./lib/toolbar/Toolbar.svelte";
    import ToolbarGroup from "./lib/toolbar/ToolbarGroup.svelte";
    import ToolBarTool from "./lib/toolbar/ToolBarTool.svelte";
    import ContextMenu from "./lib/contextmenu/ContextMenu.svelte";
    import ContextMenuHeader from "./lib/contextmenu/ContextMenuHeader.svelte";
    import ContextMenuGroup from "./lib/contextmenu/ContextMenuGroup.svelte";
    import ContextMenuGroupHeader from "./lib/contextmenu/ContextMenuGroupHeader.svelte";
    import ContextMenuGroupBody from "./lib/contextmenu/ContextMenuGroupBody.svelte";
    import InputNumber from "./lib/formelements/InputNumber.svelte";

</script>

<main class="bg-darkest">
    <Toolbar>
        <ToolbarGroup>
            <ToolBarTool active="{false}" />
            <ToolBarTool active="{false}" />
        </ToolbarGroup>
        <ToolbarGroup>
            <ToolBarTool active="{false}" />
            <ToolBarTool active="{false}" />
        </ToolbarGroup>
    </Toolbar>
    <ContextMenu>
        <ContextMenuHeader>

        </ContextMenuHeader>
        <ContextMenuGroup>
            <ContextMenuGroupHeader>

            </ContextMenuGroupHeader>
            <ContextMenuGroupBody>
                <InputNumber disabled="{true}"/>
                <InputNumber />
                <InputNumber type="integer" unit="px" hasConstraints="{false}"/>
                <InputNumber unit="m" start="{750}" min="{100}" max="{1000}" step="{10}" />
            </ContextMenuGroupBody>
        </ContextMenuGroup>
    </ContextMenu>

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
