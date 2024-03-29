<script lang="ts" context="module">

    import type {IconName} from "../generals/Icon.svelte";

    // TODO refactor to class structure
    export type DropdownItem = {
        label: string;
        value: string;
        icon: IconName | null;
    };

    export type DropdownConfig = {
        activeItem: DropdownItem;
        items: DropdownItem[];
        componentName: "dropdown";
    };


    export function createDropdownItem(label:string , value: string, icon?: IconName): DropdownItem {
        return {
            label: label,
            value: value,
            icon: icon === undefined ? null : icon
        };
    }
    export function createDropdownConfig(items: DropdownItem[], defaultItem?: DropdownItem, icon?: IconName): DropdownConfig {
        return {
            activeItem: defaultItem === undefined ? items[0] : defaultItem,
            items: items,
            componentName: "dropdown"
        };
    }

</script>


<script lang="ts">
    import Icon from "../generals/Icon.svelte";

    let showDropdown = false;

    const itemIconSize = 1; // is in rem

    export let config = createDropdownConfig([]);

    function toggleDropdown() {
        showDropdown = !showDropdown;
    }

    function setActiveItemByValue(value: string) {
        if (value === undefined) {
            throw new Error("Value on dropdown option is not defined");
        }

        const selectedItem = getItemByValue(value);

        if (selectedItem === undefined) {
            throw new Error("Dropdown option value is not in item array");
        }

        config.activeItem = selectedItem;
    }

    function getItemByValue(value: string): DropdownItem|undefined {
        return config.items.find(item => item.value === value);
    }

    function handleBlur(event: FocusEvent) {

        showDropdown = false;
        event.target?.blur();
    }

    function handleClick(event: MouseEvent): void {
        const selectedValue = event.currentTarget?.getAttribute("data-value");
        setActiveItemByValue(selectedValue);
    }

    function handleKeyUp(event: KeyboardEvent): void {

        if (event.key === "Enter") {
            toggleDropdown();
        }
    }

    function selectOptionOnEnter(event: KeyboardEvent): void {
        event.preventDefault();

        if (event.key === "Enter") {
            const selectedValue = event.currentTarget?.getAttribute("data-value");
            setActiveItemByValue(selectedValue);
        }
    }

</script>

<div class="input-container input-dropdown button"
     on:click={toggleDropdown}
     on:keyup={handleKeyUp}
     on:blur={handleBlur}
     role="listbox" tabindex="0"
     data-value="{config.activeItem.value}" >

    {#if showDropdown}
        <Icon icon="caret-down-fill" />
    {:else}
        <Icon icon="caret-right-fill" />
    {/if}

    <div class="selected-item-wrapper">
        {#if config.activeItem.icon !== null}
            <Icon icon="{config.activeItem.icon}" inline="{true}" size="{itemIconSize}"/>
        {/if}
            <span class="item-label">{config.activeItem.label}</span>
    </div>
    <div></div>

    {#if showDropdown}
        <div class="dropdown text-thin">
            <ul>
                {#each config.items as item (item.value)}
                    <li data-value="{item.value}"
                        role="option"
                        aria-selected="{config.activeItem.value === item.value}"
                        on:click={handleClick}
                        on:keyup={selectOptionOnEnter}>
                        {#if item.icon !== null}
                            <Icon icon="{item.icon}" inline="{true}" size="{itemIconSize}"/>
                        {:else}
                            <span class="icon-placeholder" style="--width:{itemIconSize}rem"></span>
                        {/if}
                        <span class="item-label">{item.label}</span>
                    </li>
                {/each}
            </ul>
        </div>
    {/if}

</div>

<style>
    .input-dropdown {
        position: relative;
        display: flex;
        justify-content: space-between;
        height: var(--input-height);
        text-align: left;
    }
    .selected-item-wrapper {
        flex-grow: 1;
        display: flex;
        justify-content: center;
    }
    .dropdown {
        position: absolute;
        background-color: var(--color-dark);
        padding: calc(0.5 * var(--input-height)) 1rem;
        width: calc(100% - 2rem);
        right: 0;
        top: calc( var(--input-height) * 2);
        z-index: 1;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        padding-bottom: var(--margin-input-container-bottom);
    }
    li:hover {
        background-color: var(--color-mid);
    }
    li[aria-selected="false"] {
        color: var(--color-light);
    }
    .icon-placeholder {
        display: inline-block;
        width: var(--width);
    }
    .item-label {
        padding-left: 0.5rem;
    }
</style>