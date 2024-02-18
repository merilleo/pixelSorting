# `<script context="module" lang="ts">`
## 1. Defining a Type for Configuration

Create and export a data type to represent the configuration of your component. 
### Example

```typescript
export type CheckboxConfig = { 
    checked: BooleanStoreType; 
    disabled: BooleanStoreType; 
    componentName: "checkbox"; 
    label?: string; 
};
```

## 2. Creating a Configuration Factory Function

Create a function that produces instance of your configuration type.
### Example

```typescript
export function createCheckboxConfig(label:string): CheckboxConfig { 
    return { 
        checked: createBooleanStore(), 
        disabled: createBooleanStore(), 
        label: label, 
        componentName: "checkbox" 
    }; 
}
```
# `</script>`

---
[//]: # (TODO write more)
# `<script lang="ts">`

# `</script>`
