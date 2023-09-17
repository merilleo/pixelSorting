<script lang="ts">
    import Toolbar from "./lib/toolbar/Toolbar.svelte";
    import ToolbarGroup from "./lib/toolbar/ToolbarGroup.svelte";
    import ToolBarTool from "./lib/toolbar/ToolBarTool.svelte";
    import ContextMenu from "./lib/contextmenu/ContextMenu.svelte";
    import ContextMenuHeader from "./lib/contextmenu/ContextMenuHeader.svelte";
    import ContextMenuGroup from "./lib/contextmenu/ContextMenuGroup.svelte";
    import ContextMenuGroupHeader from "./lib/contextmenu/ContextMenuGroupHeader.svelte";
    import ContextMenuGroupBody from "./lib/contextmenu/ContextMenuGroupBody.svelte";
    import InputNumber from "./lib/formelements/InputNumber.svelte";
    import InputGroup from "./lib/formelements/InputGroup.svelte";
    import Checkbox from "./lib/formelements/Checkbox.svelte";
    import ToggleSwitch from "./lib/formelements/ToggleSwitch.svelte";
    import Icon from "./lib/Icon.svelte";
    import ContextMenuBuilder from "./lib/contextmenu/ContextMenuBuilder.svelte";

    import type {ContextMenuProps} from "./lib/contextmenu/ContextMenu.svelte";


</script>

<main class="bg-darkest">
    <Toolbar>
        <ToolbarGroup>
            <ToolBarTool> <Icon icon="filter-left" /></ToolBarTool>
            <ToolBarTool />
        </ToolbarGroup>
        <ToolbarGroup>
            <ToolBarTool />
            <ToolBarTool />
        </ToolbarGroup>
    </Toolbar>
    <ContextMenu>
        <ContextMenuBuilder />
    </ContextMenu>


    <!--
    <ContextMenu>
        <ContextMenuGroup>
            <ContextMenuGroupHeader
                    label="Header One"
                    hasCheckbox="{true}"
                    bind:enabled={checkboxValue}
                    bind:isOpen={open}
            />
            <ContextMenuGroupBody bind:isOpen={open} >
                <InputGroup label="Input Number">
                    <InputNumber disabled="{!checkboxValue}"/>
                    <InputNumber type="integer" unit="px" hasConstraints="{false}" disabled="{!checkboxValue}"/>
                    <InputNumber unit="m" start="{0}" min="{-100}" max="{100}" step="{10}" disabled="{!checkboxValue}"/>
                </InputGroup>
                <InputGroup label="Checkbox">
                    <Checkbox label="teste" disabled="{!checkboxValue}"/>
                    <Checkbox label="tester" disabled="{!checkboxValue}" />
                    <Checkbox label="testerino" disabled="{!checkboxValue}"/>
                </InputGroup>
                <InputGroup label="Checkbox">
                    <ToggleSwitch disabled="{!checkboxValue}"/>
                    <ToggleSwitch labelOff="Disabled" labelOn="Enabled" disabled="{!checkboxValue}"/>
                </InputGroup>
            </ContextMenuGroupBody>
        </ContextMenuGroup>
    </ContextMenu>
    -->
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
