export async function subirArchivo(file,folder){if(!(file instanceof File))throw Error("Archivo inválido");const url=await new Promise((ok,no)=>{const r=new FileReader();r.onload=()=>ok(r.result);r.onerror=no;r.readAsDataURL(file)});return {url,filePath:"local/"+folder+"/"+file.name}}
export async function eliminarArchivo(){return {success:true}}
