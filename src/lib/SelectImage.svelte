<script lang="ts">
    import {imageData, stage} from "../store";


    function imageUploaded(event) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        reader.onloadend = function (event) {
            imageData.set(reader.result);
            stage.set(1);
        }
    }

</script>

<div class="select-image">
    <input type="file" accept="image/png, image/jpeg, image/jpg" on:change={imageUploaded} >
</div>

<style>
    .select-image {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }
</style>