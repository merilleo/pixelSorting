

<script lang="ts">

    import ToggleSwitch, {ToggleSwitchPropsClass} from "../formelements/ToggleSwitch.svelte";
import Checkbox, {CheckboxPropsClass} from "../formelements/Checkbox.svelte";
import ContextMenuGroup from "./ContextMenuGroup.svelte";
import InputNumber, {InputNumberPropsClass} from "../formelements/InputNumber.svelte";
import ContextMenuGroupHeader from "./ContextMenuGroupHeader.svelte";
import ContextMenuGroupBody from "./ContextMenuGroupBody.svelte";
import InputGroup from "../formelements/InputGroup.svelte";
import ContextMenu from "./ContextMenu.svelte";


import type {ContextMenuProps} from "./ContextMenu.svelte";

let inputNumberInstance = new InputNumberPropsClass(
    {value: 50, disabled: false},
    {type: "float"}
);
let inputNumberInstance2= new InputNumberPropsClass(
    {value: 50, disabled: false},
    {type: "float"}
);
export let menu: ContextMenuProps = {
    "groups" : [
        {
            "header" : {
                "label": "string",
                "enabled":true,
                "isOpen":true,
                "hasCheckbox":true,
                "hasPresets":true
            },
            "body" :  {
                "isOpen": true,
                "groups": [
                    {
                        "label": "string",
                        "inputs": [
                            inputNumberInstance,
                            new InputNumberPropsClass(
                                {value: 100, disabled: false},
                                {type: "integer", max: 1000}
                            ),
                            new CheckboxPropsClass(
                                {checked: false, disabled: false},
                                {label:"check1"}
                            ),
                            new ToggleSwitchPropsClass(
                                {checked: false, disabled: false},
                                {hasLabel:true}
                            ),
                        ]
                    }
                ]
            }
        }
    ]
}


</script>

{#each menu.groups as contextMenuGroup}
    <ContextMenuGroup>
        <ContextMenuGroupHeader {...contextMenuGroup.header}
                bind:enabled={contextMenuGroup.header.enabled}
                bind:isOpen={contextMenuGroup.header.isOpen} />
        <ContextMenuGroupBody bind:isOpen={contextMenuGroup.body.isOpen} >
            {#each contextMenuGroup.body.groups as inputGroup}
                <InputGroup label={inputGroup.label}>
                    {#each inputGroup.inputs as input}
                        {#if input instanceof InputNumberPropsClass}
                            <InputNumber {...input.optionalProps}
                                         bind:value={input.bindProps.value}
                                         bind:disabled={input.bindProps.disabled}
                            />
                        {:else if input instanceof CheckboxPropsClass}
                            <Checkbox {...input.optionalProps}
                                      bind:checked={input.bindProps.checked}
                                      bind:disabled={input.bindProps.disabled}
                            />
                        {:else if input instanceof ToggleSwitchPropsClass}
                            <ToggleSwitch {...input.optionalProps}
                                          bind:checked={input.bindProps.checked}
                                          bind:disabled={input.bindProps.disabled}
                            />
                        {/if}
                    {/each}
                </InputGroup>
            {/each}
        </ContextMenuGroupBody>
    </ContextMenuGroup>
{/each}

<style>
</style>