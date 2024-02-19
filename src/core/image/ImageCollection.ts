import SingleImage from "./SingleImage";
import {convertUint8To32Array} from "../utils/ColorUtils";

export default class ImageCollection {
    originalImage: SingleImage = new SingleImage();
    originalImagePreview: SingleImage = new SingleImage();
    sortedImage: SingleImage = new SingleImage();
    sortedImagePreview: SingleImage = new SingleImage();

    previewMaxWidth: number = 200;
    previewMaxHeight: number = 200;

    constructor() {

    }
    initialize(imageUrl: string): Promise<void>  {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.originalImage.loadImage(imageUrl),
                this.originalImagePreview.loadImage(imageUrl, this.previewMaxWidth, this.previewMaxHeight),
                this.sortedImage.loadImage(imageUrl),
                this.sortedImagePreview.loadImage(imageUrl, this.previewMaxWidth, this.previewMaxHeight)
            ]).then(() => resolve())
                .catch((error) => reject(error));
        });
    }

}