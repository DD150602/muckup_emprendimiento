import {readDb,updateCollection,nextId} from "./localStore";
export async function agregarFavorito(uid,pid){const d=readDb(),old=d.favoritos.find(f=>String(f.usuario?.idUsuario)===String(uid)&&String(f.palabra?.idPalabra)===String(pid));if(old)return old;const x={idFavorito:nextId(d.favoritos,"idFavorito"),usuario:{idUsuario:+uid},palabra:d.palabras.find(p=>String(p.idPalabra)===String(pid))};updateCollection("favoritos",a=>[...a,x]);return x}
export async function eliminarFavorito(id){updateCollection("favoritos",a=>a.filter(x=>String(x.idFavorito)!==String(id)));return {success:true,message:"Favorito eliminado"}}
export async function obtenerFavoritosPorUsuario(id){return readDb().favoritos.filter(x=>String(x.usuario?.idUsuario)===String(id))}
