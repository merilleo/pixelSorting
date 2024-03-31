<script lang="ts">
    // Todo implement disabled status for form elements
    import ImageImport from "../form-elements/ImageImport.svelte";
    import ToolPanel from "./ToolPanel.svelte";
    import ToolPanelGroup from "./tool-panel-groups/ToolPanelGroup.svelte";
    import ToolPanelGroupHeader from "./tool-panel-groups/ToolPanelGroupHeader.svelte";
    import Checkbox from "../form-elements/Checkbox.svelte";
    import ToolPanelGroupBody from "./tool-panel-groups/ToolPanelGroupBody.svelte";
    import FormGroup from "../form-elements/FormGroup.svelte";
    import Slider from "../form-elements/Slider.svelte";
    import Switch from "../form-elements/Switch.svelte";
    import Dropdown from "../form-elements/Dropdown.svelte";
    export let config;


</script>


<ToolPanel>
    {#each config as { header, body }}
        <ToolPanelGroup>
            <ToolPanelGroupHeader config="{header}" />
            <ToolPanelGroupBody openStore="{header.toggle}" disabledStore="{header.checkbox}">
                {#each body as group}
                    <FormGroup label="{group.title}">
                        {#each group.inputs as input }
                            {#if input.componentName === "checkbox"}
                                <Checkbox config="{input}" />
                            {:else if input.componentName === "slider"}
                                <Slider config="{input}"/>
                            {:else if input.componentName === "switch"}
                                <Switch config="{input}" />
                            {:else if input.componentName === "imageInput"}
                                <ImageImport config="{input}" />
                            {:else if input.componentName === "dropdown"}
                                <Dropdown config="{input}" />
                            {/if}
                        {/each}
                    </FormGroup>
                {/each}
            </ToolPanelGroupBody>
        </ToolPanelGroup>
    {/each}

</ToolPanel>