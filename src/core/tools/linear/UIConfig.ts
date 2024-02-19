import type {ConfigType} from "../../../TypeLibrary";
import {createCheckboxConfig} from "../../../components/form-elements/Checkbox.svelte";
import {createSwitchConfig} from "../../../components/form-elements/Switch.svelte";
import {createSliderConfig} from "../../../components/form-elements/Slider.svelte";
import {createImageImportConfig} from "../../../components/form-elements/ImageImport.svelte";
import {type BooleanStoreType, createBooleanStore} from "../../stores/BooleanStoreObject";
import {
    createToolPanelGroupHeaderConfig, type ToolPanelGroupHeaderConfig
} from "../../../components/tool-panels/tool-panel-groups/ToolPanelGroupHeader.svelte";


export type uiConfig = {
    header: ToolPanelGroupHeaderConfig;
    body: {
        title: string;
        inputs: ConfigType[];
    }[];
};

const UIConfig: uiConfig[]  = [
    {
        header: createToolPanelGroupHeaderConfig("test", createCheckboxConfig("")),

        body: [
            {
                title: "Form Group Title",
                inputs: [
                    createCheckboxConfig("el1 group2"),
                    createSwitchConfig("OFF", "ON"),
                    createSliderConfig("float", 5,-5, 10, 0.1, "Kg"),
                    createSliderConfig("integer", 50,0, 100, 1, ""),
                    createImageImportConfig(),
                ]
            }
        ]
    },
];

export default UIConfig;