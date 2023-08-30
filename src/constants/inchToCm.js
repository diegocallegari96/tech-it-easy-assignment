
export function inchesToCentimers(value) {

return value * 2.54.toFixed(0)
}
 export function generateTelevisionSizeString(television) {
    let string = ''

    for (let i = 0; i < television.availableSizes.length; i++) {
        const size = television.availableSizes[i];
        const sizeCm = inchesToCentimers(size);


        string = string + size + ' inches (' + sizeCm + ' cm)';

        if (i !== television.availableSizes.length -1) {
            string = string + ' | ';
        }
    }
 return string;
 }