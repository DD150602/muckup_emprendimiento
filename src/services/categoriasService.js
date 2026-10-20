import {readDb,updateCollection,nextId} from "./localStore";
export async function obtenerCategorias(){return readDb().categorias}
export async function buscarCategoriaPorId(id){return readDb().categorias.find(x=>String(x.idCategoria)===String(id))}
export async function buscarCategoria(q){return readDb().categorias.filter(x=>x.nombre.toLowerCase().includes(q.toLowerCase()))}
export async function crearCategoria(d){const id=nextId(readDb().categorias,"idCategoria"),x={...d,id,idCategoria:id};updateCollection("categorias",a=>[...a,x]);return x}
export async function eliminarCategoria(id){updateCollection("categorias",a=>a.filter(x=>String(x.idCategoria)!==String(id)));updateCollection("palabras",a=>a.filter(x=>String(x.idCategoria)!==String(id)));return {mensaje:"Categoría eliminada"}}
export async function actualizarCategoria(d){let o;updateCollection("categorias",a=>a.map(x=>{if(String(x.idCategoria)===String(d.id||d.idCategoria)){o={...x,...d};return o}return x}));return o}
