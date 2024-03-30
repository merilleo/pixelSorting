import {CheckboxConfig} from "../../../components/form-elements/Checkbox.svelte";
import {SwitchConfig} from "../../../components/form-elements/Switch.svelte";
import {SliderConfig} from "../../../components/form-elements/Slider.svelte";
import {ImageImportConfig} from "../../../components/form-elements/ImageImport.svelte";
import {
    createToolPanelGroupHeaderConfig, type ToolPanelGroupHeaderConfig
} from "../../../components/tool-panels/tool-panel-groups/ToolPanelGroupHeader.svelte";
import {DropdownConfig, DropdownItem} from "../../../components/form-elements/Dropdown.svelte";
import type {BaseConfig} from "../BaseConfig";


export type uiConfig = {
    header: ToolPanelGroupHeaderConfig;
    body: {
        title: string;
        inputs: BaseConfig[];
    }[];
};

const UIConfig: uiConfig[] = [
    {
        header: createToolPanelGroupHeaderConfig(
            "test",
            new CheckboxConfig("Config Class")
        ),

        body: [
            {
                title: "Config Classes",
                inputs: [
                    new CheckboxConfig("Config Class"),
                    new SwitchConfig("OFF", "ON"),
                    new SliderConfig("float", 5,-5, 10, 0.1, "Kg"),
                    new SliderConfig("integer", 50,0, 100, 1, ""),
                    new DropdownConfig([
                        new DropdownItem("Label 1", "val1", "image"),
                        new DropdownItem("Label 2", "val2")
                    ]),
                    new ImageImportConfig(),
                ]
            }
        ]
    },
];

export default UIConfig;