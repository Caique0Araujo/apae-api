export default function getImageExtensionThroughType(imageType: string){
    const [,type] = imageType.split('/')
    return '.'+type
}