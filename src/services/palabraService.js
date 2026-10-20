import {readDb,updateCollection,nextId} from "./localStore";
export async function obtenerPalabras(){const d=readDb();return d.palabras.map(x=>({...x,categoria:d.categorias.find(c=>String(c.idCategoria)===String(x.idCategoria))}))}
export async function buscarPalabra(q,t="palabraNasa"){return readDb().palabras.filter(x=>String(x[t]||"").toLowerCase().includes(q.toLowerCase()))}
export async function crearPalabra(d){const x={...d,idPalabra:nextId(readDb().palabras,"idPalabra")};updateCollection("palabras",a=>[...a,x]);return x}
export async function actualizarPalabra(d){let o;updateCollection("palabras",a=>a.map(x=>{if(String(x.idPalabra)===String(d.idPalabra)){o={...x,...d};return o}return x}));return o}
export async function eliminarPalabra(id){updateCollection("palabras",a=>a.filter(x=>String(x.idPalabra)!==String(id)));return {success:true}}
export async function obtenerPalabrasPorCategoria(id){const d=readDb();return d.palabras.filter(x=>String(x.idCategoria)===String(id)).map(x=>({...x,categoria:d.categorias.find(c=>String(c.idCategoria)===String(x.idCategoria))}))}
