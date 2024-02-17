/**
 * Svelte Component Library
 * ========================
 *
 * This file aggregates all Svelte components in the project and exports them centrally.
 * This keeps our component references organized, easy to find, and prevents potential duplication or inconsistency.
 *
 * IMPORTANT: One rule to code them all, One rule to find them, One rule to bring them all, and in the organization bind them!
 * When you need to use a component, please import the component from this file and not directly from individual component files.
 *
 * As per our project's best practices outlined in CONTRIBUTING.md, all Svelte component imports should be done from this central file.
 *
 * Rule Reminder:
 * --------------
 * Import components from this file.
 *
 *   // Correct way
 *   import { Checkbox, ToolPanel } from './path/to/ComponentLibrary.ts';
 *
 *   // Incorrect way
 *   import { Checkbox } from './path/to/individual/component/Checkbox.svelte';
 *   import { ToolPanel } from './path/to/individual/component/ToolPanel.svelte';
 *
 */


/**
 * Form Element Components
 */
export { default as Checkbox } from "./components/form-elements/Checkbox.svelte";
export { default as Slider } from "./components/form-elements/Slider.svelte";
export { default as Switch } from "./components/form-elements/Switch.svelte";
export { default as FormGroup } from "./components/form-elements/FormGroup.svelte";

/**
 * Tool Panel Components
 */
export { default as ToolPanel } from "./components/tool-panels/ToolPanel.svelte";
export { default as ToolPanelHeader } from "./components/tool-panels/ToolPanelHeader.svelte";

export { default as ToolPanelGroup } from "./components/tool-panels/tool-panel-groups/ToolPanelGroup.svelte";
export { default as ToolPanelGroupHeader } from "./components/tool-panels/tool-panel-groups/ToolPanelGroupHeader.svelte";
export { default as ToolPanelGroupBody } from "./components/tool-panels/tool-panel-groups/ToolPanelGroupBody.svelte";
export { default as ToolPanelGroupToggle } from "./components/tool-panels/tool-panel-groups/utils/ToolPanelGroupToggle.svelte";

// More exports in alphabetical or usage order


/**
 * Toolbox Panel Components
 */
// More exports in alphabetical or usage order

/**
 * General Components
 */
export { default as Icon } from "./components/generals/Icon.svelte";