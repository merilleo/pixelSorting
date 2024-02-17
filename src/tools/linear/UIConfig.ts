import {createCheckboxConfigs} from "../../components/form-elements/Checkbox.svelte";
import type {ConfigType} from "../../TypeLibrary";
import {createSwitchConfigs} from "../../components/form-elements/Switch.svelte";
import {createSliderConfigs} from "../../components/form-elements/Slider.svelte";


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
            title: "panelGrouHeader",
            inputs: [
                createCheckboxConfigs("")
            ]
        },
        body: [
            {
                title: "Form Group Title",
                inputs: [
                    createCheckboxConfigs("el1 group2"),
                    createSwitchConfigs("OFF", "ON"),
                    createSliderConfigs("float", 5,-10, 10, 0.1, "Kg")
                ]
            }
        ]
    },
];

export default UIConfig;