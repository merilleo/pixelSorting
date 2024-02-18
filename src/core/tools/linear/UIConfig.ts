import type {ConfigType} from "../../../TypeLibrary";
import {createCheckboxConfig} from "../../../components/form-elements/Checkbox.svelte";
import {createSwitchConfig} from "../../../components/form-elements/Switch.svelte";
import {createSliderConfig} from "../../../components/form-elements/Slider.svelte";
import {createImageImportConfig} from "../../../components/form-elements/ImageImport.svelte";


export type uiConfig = {
    header: {
        title: string;
        inputs: ConfigType[];
    };
    body: {
        title: string;
        inputs: ConfigType[];
    }[];
};

const UIConfig: uiConfig[]  = [
    {
        header: {
            title: "panelGroupHeader",
            inputs: [
                createCheckboxConfig("")
            ]
        },
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