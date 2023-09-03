export function initalizeKeyboardEvents() {
    document.addEventListener('keypress', (event) => {
        switch (event.code) {
            case "Enter":
                document.activeElement.blur();
        }
    }, false);
}