<script>
    import {stage} from "../store";

    function backToImageSelect() {
        stage.set(0);
    }
</script>


<div class="stage-1">
    <button on:click={backToImageSelect}>Back</button>

</div>

<style>
    .stage-1 {

    }
</style>