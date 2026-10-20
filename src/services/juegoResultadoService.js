import {readDb,updateCollection,nextId} from "./localStore";
const deco=(r,d)=>({...r,usuario:{...r.usuario,...d.usuarios.find(x=>String(x.idUsuario)===String(r.usuario?.idUsuario))},nivel:{...r.nivel,...d.niveles.find(x=>String(x.idNivel)===String(r.nivel?.idNivel))}});
export async function guardarResultado(d){const x={...d,idJuego:nextId(readDb().resultados,"idJuego")};updateCollection("resultados",a=>[...a,x]);return x}
export async function actualizarResultado(id,d){let o;updateCollection("resultados",a=>a.map(x=>{if(String(x.idJuego)===String(id)){o={...x,...d};return o}return x}));return o}
export async function obtenerHistorialPorUsuario(id){const d=readDb();return d.resultados.filter(x=>String(x.usuario?.idUsuario)===String(id)).map(x=>deco(x,d))}
export async function obtenerMejoresPuntajesPorNivel(id,n=10){const d=readDb();return d.resultados.filter(x=>String(x.nivel?.idNivel)===String(id)).sort((a,b)=>b.puntaje-a.puntaje).slice(0,n).map(x=>deco(x,d))}
export async function obtenerPuntajeTotalUsuario(id){return (await obtenerHistorialPorUsuario(id)).reduce((s,x)=>s+(+x.puntaje||0),0)}
export async function obtenerRankingGlobal(p){const d=readDb();let a=[...d.resultados];if(p&&typeof p==="object"&&p.idPartida)a=a.filter(x=>x.idPartida===p.idPartida);return a.sort((x,y)=>y.puntaje-x.puntaje).slice(0,typeof p==="number"?p:10).map(x=>deco(x,d))}
