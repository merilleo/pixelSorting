<script lang="ts">

    import ImageImport from "../form-elements/ImageImport.svelte";
    import ToolPanel from "./ToolPanel.svelte";
    import ToolPanelGroup from "./tool-panel-groups/ToolPanelGroup.svelte";
    import ToolPanelGroupHeader from "./tool-panel-groups/ToolPanelGroupHeader.svelte";
    import Checkbox from "../form-elements/Checkbox.svelte";
    import ToolPanelGroupBody from "./tool-panel-groups/ToolPanelGroupBody.svelte";
    import FormGroup from "../form-elements/FormGroup.svelte";
    import Slider from "../form-elements/Slider.svelte";
    import Switch from "../form-elements/Switch.svelte";
    import UIConfig from "../../core/tools/linear/UIConfig";
    export const config = UIConfig;
</script>


<ToolPanel>
    {#each config as { header, body }}
        <ToolPanelGroup>
            <ToolPanelGroupHeader label={ header.title } >
                {#each header.inputs as input}
                    {#if input.componentName === "checkbox"}
                        <Checkbox config="{input}" />
                    {/if}
                {/each}
            </ToolPanelGroupHeader>
            <ToolPanelGroupBody>
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
                            {/if}
                        {/each}
                    </FormGroup>
                {/each}
            </ToolPanelGroupBody>
        </ToolPanelGroup>
    {/each}
</ToolPanel>