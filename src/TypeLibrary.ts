/**
 * TypeScript Type Definitions Library
 * ===================================
 *
 * This file serves as a central repository of all TypeScript type definitions used in this project.
 *
 * IMPORTANT: One rule to code them all, One rule to find them, One rule to bring them all, and in the organization bind them!
 * When you need to use a type, please import the type from this file and not directly from individual files.
 *
 * As per our project's best practices outlined in CONTRIBUTING.md, we maintain a single source of truth for our type definitions.
 *
 * Rule Reminder:
 * --------------
 * Import TypeScript types from this file.
 *
 *   // Correct way
 *   import { YourType } from './path/to/TypeLibrary.ts';
 *
 *   // Incorrect way
 *   import { YourType } from './other/path/to/IndividualFile.ts';
 *
 */

import type { CheckboxConfigs } from "./components/form-elements/Checkbox.svelte";
import type { SliderConfigs } from "./components/form-elements/Slider.svelte";
import type { SwitchConfigs } from "./components/form-elements/Switch.svelte";

// TODO rename configs to config
/**
 * Form Element Component Config Types
 */
export type {CheckboxConfigs} from "./components/form-elements/Checkbox.svelte";
export type {SwitchConfigs} from "./components/form-elements/Switch.svelte";
export type {SliderConfigs, NumberTypes} from "./components/form-elements/Slider.svelte";

export type ConfigType = CheckboxConfigs | SwitchConfigs | SliderConfigs;

/**
 * Tool Panel Component Config Types
 */
export type {ToolPanelGroupHeaderConfigs} from "./components/tool-panels/tool-panel-groups/ToolPanelGroupHeader.svelte";
export type {ToolPanelGroupToogleConfig} from "./components/tool-panels/tool-panel-groups/utils/ToolPanelGroupToggle.svelte";


/**
* Store Object Types
*/
export type {BooleanStoreType} from "./stores/BooleanStoreObject";

