<script lang="ts">
    import type {BooleanStoreType, ConfigType} from "../../TypeLibrary";
    import {createCheckboxConfigs} from "../form-elements/Checkbox.svelte";
    import {createBooleanStore} from "../../stores/BooleanStoreObject";
    import type {NumberStoreType} from "../../stores/NumberStoreObject";

    export let object: BooleanStoreType | NumberStoreType;

    let out: any;
    console.log(object);
    console.log(object.number);

    object.subscribe(value => out = value);

</script>

<pre>
    {out}
</pre>