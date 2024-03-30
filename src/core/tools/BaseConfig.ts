export abstract class BaseConfig {
    componentName: string;
    constructor(componentName: string) {
        this.componentName = componentName;
    }
}