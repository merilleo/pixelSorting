import type Tool from "./Tool";
import {createStringStore, type StringStoreType} from "../stores/StringStoreObject";

export default class ToolCollection {
    tools: Tool[];
    activeToolName: StringStoreType;

    constructor() {
        this.tools = [];
        this.activeToolName = createStringStore();
    }

    addTool(tool: Tool): void {
        this.tools.push(tool);
    }


    getToolByName(name: string): Tool | undefined {
        return this.tools.find(tool => tool.name === name);
    }

    setActiveToolByName(name: string): void {
        this.tools.forEach(tool => {
            if (tool.name === name) {
                tool.active.setValue(true);
                this.activeToolName.setValue(name);
            }
            else {
                tool.active.setValue(false);
            }
        });
    }
}