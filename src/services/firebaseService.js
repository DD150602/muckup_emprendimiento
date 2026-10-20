// Firebase disabled for offline prototype.
export const storage=null;
export async function uploadFileToFirebase(file,folder){return {url:URL.createObjectURL(file),filePath:"local/"+folder+"/"+file.name}}
export async function deleteFileFromFirebase(){return {success:true}}
