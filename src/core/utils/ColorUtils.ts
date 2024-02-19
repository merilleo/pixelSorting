import ImageObject from "../image/ImageObject";

export function isLittleEndian() {
    const buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, true);
    return new Int16Array(buffer)[0] === 256;
}

const isLittleEndianSystem = isLittleEndian();

export function convertUint8To32Array(uint8Data: Uint8ClampedArray):Uint32Array {
    const buffer: ArrayBuffer = new ArrayBuffer(uint8Data.length);
    const view8: DataView  = new DataView(buffer);

    for (let i = 0; i < uint8Data.length; i++) {
        view8.setUint8(i, uint8Data[i]);
    }

    return new Uint32Array(buffer);
}

export function convertUint32To8Array(uint32Array: Uint32Array): Uint8ClampedArray {
    return new Uint8ClampedArray(uint32Array.buffer);
}



type RGBAToU32Function = (r:number, g:number, b:number, a:number) => number;
export const rgbaToUint32: RGBAToU32Function = isLittleEndianSystem ?
    function( r:number, g:number, b:number, a:number): number {
        // TODO compare performance between tenerary and if() checks
        a = a < 0 ? 0 : a > 255 ? 255 : a;
        r = r < 0 ? 0 : r > 255 ? 255 : r;
        g = g < 0 ? 0 : g > 255 ? 255 : g;
        b = b < 0 ? 0 : b > 255 ? 255 : b;
        return (a << 24) | (b << 16) | (g << 8) | r;
    } :
    function(r:number, g:number, b:number, a:number): number {
        a = a < 0 ? 0 : a > 255 ? 255 : a;
        r = r < 0 ? 0 : r > 255 ? 255 : r;
        g = g < 0 ? 0 : g > 255 ? 255 : g;
        b = b < 0 ? 0 : b > 255 ? 255 : b;
        return (a) | (b << 8) | (g << 16) | (r << 24);
    };

type GetColorFunction= (color:number) => number;

export const red: GetColorFunction = isLittleEndianSystem ?
    function(color: number): number {
        return color & 0xFF;
    } :
    function(color: number): number {
        return (color >> 24) & 0xFF;
    };

export const green: GetColorFunction = isLittleEndianSystem ?
    function(color: number): number {
        return (color >> 8) & 0xFF;
    } :
    function(color: number): number {
        return (color >> 16) & 0xFF;
    };

export const blue: GetColorFunction = isLittleEndianSystem ?
    function(color: number): number {
        return (color >> 16) & 0xFF;
    } :
    function(color: number): number {
        return (color >> 8) & 0xFF;
    };

export const alpha: GetColorFunction = isLittleEndianSystem ?
    function(color: number): number {
        return (color >> 24) & 0xFF;
    } :
    function(color: number): number {
        return color & 0xFF;
    };

/*export function drawToCanvas(imageData: ImageData): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) {
        throw new Error("Unable to get canvas context");
    }

    canvas.width = imageData.width;
    canvas.height = imageData.height;
    context.putImageData(imageData, 0, 0);

    return canvas;
}

export function getImageDataUrl(imageData:ImageData): string {
    const canvas = drawToCanvas(imageData);
    const url = canvas.toDataURL();
    return url;
}*/
