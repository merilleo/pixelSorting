import {rgbaToUint32, convertUint8To32Array, red} from "../utils/ColorUtils";

export default class SingleImage {
    width: number;
    height: number;
    data: Uint32Array;
    url: string;
    constructor() {
        this.width = 0;
        this.height = 0;
        this.data = new Uint32Array;
        this.url = "";
    }

    loadImage(imageUrl: string, maxWidth?: number, maxHeight?: number): Promise<void> {
        return new Promise((resolve, reject) => {

            this.url = imageUrl;

            const img = new window.Image();
            img.onload = () => {
                let currentWidth = img.width;
                let currentHeight = img.height;
                if (maxWidth !== undefined) {
                    currentWidth = maxWidth;
                }
                if (maxHeight !== undefined) {
                    currentHeight = maxHeight;
                }
                this.setResizedDimensions(currentWidth, currentHeight, img.width, img.height);

                const canvas = document.createElement("canvas");
                canvas.width = this.width;
                canvas.height = this.height;

                const context = canvas.getContext("2d");
                if (!context) {
                    throw new Error("Unable to get canvas context for Image");
                }

                context.drawImage(img, 0, 0, this.width, this.height);

                const imageData = context.getImageData(0, 0, this.width, this.height, { colorSpace: "srgb" });
                this.data = convertUint8To32Array(imageData.data);
                this.updateUrl();
                resolve();
            };

            img.onerror = () => reject(new Error("Failed to load image"));

            img.src = imageUrl; // Using the object URL directly
        });
    }

    setResizedDimensions(maxWidth: number, maxHeight: number, imageWidth: number, imageHeight: number) {
        const aspectRatio = imageWidth / imageHeight;

        if (imageWidth > imageHeight) {
            this.width = Math.floor(maxWidth);
            this.height = Math.floor(maxWidth / aspectRatio);
        }
        else {
            this.height = Math.floor(maxHeight);
            this.width = Math.floor(maxHeight * aspectRatio);
        }
    }

    updateUrl(): void {
        // Create a Uint8ClampedArray from the buffer of the Uint32Array
        const uint8ClampedArray = new Uint8ClampedArray(this.data.buffer);

        // Create ImageData from the Uint8ClampedArray
        const imgData = new ImageData(uint8ClampedArray, this.width, this.height);

        // Draw the image data to a canvas
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Unable to get canvas context");
        }

        canvas.width = this.width;
        canvas.height = this.height;
        context.putImageData(imgData, 0, 0);  // at coords 0,0

        // Get the data URL from the canvas
        this.url = canvas.toDataURL();

    }
    filterRedChannel() {
        for (let i = 0; i < this.data.length; i++) {
            this.data[i] = rgbaToUint32(red(this.data[i]), 0, 0, 255);
        }
        this.updateUrl();
    }

    /*getBrightness(pixel: number): number {
        const r = (pixel >> 24) & 0xFF;
        const g = (pixel >> 16) & 0xFF;
        const b = (pixel >>  8) & 0xFF;
        return 0.2126*r + 0.7152*g + 0.0722*b;  // luminosity formula
    }
    sort() {
        // TODO outsource sorting functions to Webworkers
        this.data.sort((a, b) => {
            const brightnessA = this.getBrightness(a);
            const brightnessB = this.getBrightness(b);
            if (brightnessA > brightnessB) return -1;
            if (brightnessA < brightnessB) return 1;
            return 0;
        });
        this.updateUrl();
    }*/
}