export default function getImageExtensionThroughType(imageType){
    if(imageType == 'image/png') return '.png'
    if(imageType == 'image/jpg') return '.jpg'
    if(imageType == 'image/jpeg') return  '.jpeg'
    return '.png'
}