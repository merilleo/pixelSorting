import {type BooleanStoreType, createBooleanStore} from "../stores/BooleanStoreObject";

export default class Tool {
    name: string;
    uiConfig: any;
    active: BooleanStoreType;

    constructor(
        name:string,
        uiConfig: any
    ) {
        this.name = name;
        this.uiConfig = uiConfig;
        this.active = createBooleanStore();
    }

    activate() {
        this.active.setValue(true);
    }
    deactivate() {
        this.active.setValue(true);
    }
}