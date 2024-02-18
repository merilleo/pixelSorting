# Code Organization and Best Practices

## Svelte Component Imports

In our project, we organize all our Svelte component exports in a central file. This helps keep our component references organized, easy to find and avoids potential duplication or inconsistency.

[//]: # (TODO check if src/ComponentLibrary.ts is correct after refactoring)
### Rule:
All Svelte component imports should be done from the `src/ComponentLibrary.ts` file. No other files should be directly imported for their Component definitions.

```typescript
// Correct way
import { Checkbox, ToolPanel } from './path/to/ComponentLibrary.ts';

// Incorrect way 
import { Checkbox } from './path/to/individual/component/Checkbox.svelte'; 
import { ToolPanel } from './path/to/individual/component/ToolPanel.svelte';
```

## TypeScript Type Definitions

In our project, we organize all our TypeScript type definitions in a central file called TypeLibrary.ts. This helps keep our type definitions organized, easy to find and avoids possible duplication or inconsistency of types.

[//]: # (TODO change src/TypeLibrary.ts after refactoring)
### Rule:
All TypeScript type imports should be done from the `src/TypeLibrary.ts` file. No other files should be directly imported for their Type definitions.

```typescript
// Correct way
import { YourType } from './path/to/TypeLibrary.ts';

// Incorrect way
import { YourType } from './other/path/to/IndividualFile.ts';
```
