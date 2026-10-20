import {readDb,updateCollection,nextId} from "./localStore";
const enrich=(q,d)=>({...q,palabra:d.palabras.find(x=>String(x.idPalabra)===String(q.idPalabra)),nivel:d.niveles.find(x=>String(x.idNivel)===String(q.idNivel))});
export async function obtenerPreguntas(){const d=readDb();return d.preguntas.map(q=>enrich(q,d))}
export async function obtenerPreguntaPorId(id){const d=readDb(),q=d.preguntas.find(x=>String(x.idPregunta)===String(id));return q&&enrich(q,d)}
export async function obtenerPreguntasPorNivel(id,o={}){let a=(await obtenerPreguntas()).filter(x=>String(x.idNivel)===String(id));if(o.aleatorias)a.sort(()=>Math.random()-.5);return a.slice(0,o.cantidad||10)}
export async function crearPregunta(d){const x={...d,idNivel:d.idNivel||d.nivel?.idNivel,idPalabra:d.idPalabra||d.palabra?.idPalabra,idPregunta:nextId(readDb().preguntas,"idPregunta")};updateCollection("preguntas",a=>[...a,x]);return x}
export async function actualizarPregunta(id,d){let o;updateCollection("preguntas",a=>a.map(x=>{if(String(x.idPregunta)===String(id)){o={...x,...d,idNivel:d.idNivel||d.nivel?.idNivel||x.idNivel,idPalabra:d.idPalabra||d.palabra?.idPalabra||x.idPalabra};return o}return x}));return o}
export async function eliminarPregunta(id){updateCollection("preguntas",a=>a.filter(x=>String(x.idPregunta)!==String(id)));return {success:true,message:"Pregunta eliminada"}}
