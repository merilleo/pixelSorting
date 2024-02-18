<script lang="ts">
    import {
        Checkbox,
        Slider,
        Switch,
        FormGroup,
        ToolPanel,
        ToolPanelGroup,
        ToolPanelGroupBody,
        ToolPanelGroupHeader
    } from "../../ComponentLibrary";

    import UIConfig from "../../tools/linear/UIConfig";
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
                            {/if}
                        {/each}
                    </FormGroup>
                {/each}
            </ToolPanelGroupBody>
        </ToolPanelGroup>
    {/each}
</ToolPanel>