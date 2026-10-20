import {readDb,updateCollection,nextId} from "./localStore";
export async function obtenerNiveles(){return readDb().niveles}
export async function obtenerNivelPorId(id){return readDb().niveles.find(x=>String(x.idNivel)===String(id))}
export async function crearNivel(d){const x={...d,idNivel:nextId(readDb().niveles,"idNivel")};updateCollection("niveles",a=>[...a,x]);return x}
export async function actualizarNivel(id,d){let o;updateCollection("niveles",a=>a.map(x=>{if(String(x.idNivel)===String(id)){o={...x,...d};return o}return x}));return o}
export async function eliminarNivel(id){updateCollection("niveles",a=>a.filter(x=>String(x.idNivel)!==String(id)));return {success:true,message:"Nivel eliminado"}}
