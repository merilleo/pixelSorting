<script lang="ts">
    import {sketch} from "../store";

    let imageData = "";

    function imageUploaded(event) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        reader.onloadend = function () {
            imageData = reader.result;
        }
    }

    function loadImage() {
        if (imageData) {
            sketch.c.loadImage(imageData, (img) => {
                sketch.c.image(img, 0, 0, img.width, img.height);
            });
            imageData = "";
        }
    }
</script>


<input type="file" accept="image/png, image/jpeg, image/jpg" on:change={imageUploaded} >
{#if imageData}
<img class="image-upload-preview" id="image-upload-preview" src="{imageData}">
{/if}
<button on:click={loadImage}>Import File</button>

<style>
    .image-upload-preview {
        width: 64px;
        height: 64px;
    }
</style>