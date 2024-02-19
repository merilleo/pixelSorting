<script lang="ts" context="module">

export type ImageImportConfig = {
    componentName: "imageInput";
};

export function createImageImportConfig(): ImageImportConfig {

    return {
        componentName: "imageInput"
    };
}

</script>

<script lang="ts">
    import ErrorMessage from "./utils/ErrorMessage.svelte";
    import Spinner from "../generals/Spinner.svelte";
    import Icon from "../generals/Icon.svelte";
    import ImageCollection from "../../core/image/ImageCollection";

    let imageUrl:string = "";
    let isReading: boolean = false;
    let showError:boolean = false;
    let errorMessageText:string = "";


    function loadFile(event: Event) {
        const inputElement = event.target as HTMLInputElement;

        isReading = true;

        if (inputElement.files === null || inputElement.files.length === 0) {
            isReading = false;
            return;
        }

        const file: File = inputElement.files[0];
        const readImageUrl = URL.createObjectURL(file);

        const img = new ImageCollection();
        img.initialize(readImageUrl)
            .then(() => {
                URL.revokeObjectURL(imageUrl);
                // img.originalImagePreview.filterRedChannel();
                imageUrl = img.originalImagePreview.url;
            })
            .catch((error) => {
                errorMessageText = "Image could not be read";
                showError = true;
                URL.revokeObjectURL(readImageUrl);
            })
            .finally(() => {
                isReading = false;
            });
    }
</script>
<div class="input-container input-image">
    <label for="file-upload" class="custom-file-upload button">
        <span class="label-text">Image Upload</span>
        <Icon icon="upload" size="{1}" inline="{true}"/>
    </label>
    <input type="file"
           id="file-upload"
           accept=".png, .jpeg, .jpg"
           class="file-input"
           on:change={loadFile}
           disabled="{isReading}"
    />
    <div class="preview-container">
        {#if isReading}
            <div class="loading-text">Loading Image</div>
            <Spinner />
        {:else if imageUrl === "" && !isReading}
            <Icon icon="image" size="{2}" fill="mid"/>
        {:else if imageUrl !== "" && !isReading}
            <img src="{imageUrl}" alt="" />
        {/if}
    </div>

    <ErrorMessage bind:show="{showError}" text="{errorMessageText}" />
</div>

<style>
    .input-image {
        position: relative;
        margin-bottom: var(--margin-input-container-bottom);
    }
    .loading-text {
        padding-bottom: 1rem;
    }
    .label-text {
        padding-right: 0.5rem;
    }
    .preview-container {
        height: calc(4 * var(--input-height));
        border: 1px solid var(--color-darkest);
        background-color: var(--color-darker);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .preview-container img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .file-input {
        display: none;
    }

</style>
