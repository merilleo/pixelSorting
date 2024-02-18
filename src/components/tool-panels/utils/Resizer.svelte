<script lang="ts">

    export let width: number = 300;

    const minWidth = 250;

    function handleMouseDown(mouseDownEvent) {
        mouseDownEvent.preventDefault();
        let startX = mouseDownEvent.clientX;
        let startWidth = width;


        function handleMouseMove(mouseMoveEvent) {
            const deltaX = startX - mouseMoveEvent.clientX;
            if (startWidth - deltaX < 250) {return;}
            width = startWidth - deltaX;
        }

        function handleMouseUp(mouseUpEvent) {
            window.removeEventListener("mousemove", handleMouseMove);
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    }

    function handleKeyDownEnter(event) {
         if (event.key === "ArrowLeft") {
             if (width - 5 < 250) {return;}
            width = width - 5;
        } else if (event.key === "ArrowRight") {
             width = width + 5;
        }
    }

</script>

<div class="resizer"
    on:mousedown={handleMouseDown}
     role="slider" aria-valuenow={width} tabindex="0" on:keydown={handleKeyDownEnter}>
</div>

<style>
    .resizer {
        height: 100%;
        width: 5px;
        background-color: var(--color-darker);
        border: 1px solid var(--color-darkest);
        border-right-width: 2px;
    }
    .resizer:hover {
        cursor: e-resize;
        background-color: var(--color-dark);
    }
</style>