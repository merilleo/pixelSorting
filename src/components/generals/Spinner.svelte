<script lang="ts">
    // Reference: https://www.loadership.com/loaders/dot_linear_shift

</script>

<div class="loadership_WLLNZ"><div></div><div></div><div></div><div></div></div>

<style>
    .loadership_WLLNZ {
        display: flex;
        position: relative;
        width: 54px;
        height: 12px;
    }
    .loadership_WLLNZ div {
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #ffffff;
        top: 0px;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .loadership_WLLNZ div:nth-child(1) {
        left: 0px;
        animation: loadership_WLLNZ_scale_up 0.6000000000000001s infinite;
    }
    .loadership_WLLNZ div:nth-child(2) {
        left: 0px;
        animation: loadership_WLLNZ_translate 0.6000000000000001s infinite;
    }
    .loadership_WLLNZ div:nth-child(3) {
        left: 21px;
        animation: loadership_WLLNZ_translate 0.6000000000000001s infinite;
    }
    .loadership_WLLNZ div:nth-child(4) {
        left: 42px;
        animation: loadership_WLLNZ_scale_down 0.6000000000000001s infinite;
    }
    @keyframes loadership_WLLNZ_scale_up {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes loadership_WLLNZ_scale_down {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes loadership_WLLNZ_translate {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(21px, 0);
        }
    }
</style>

