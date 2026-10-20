import {readDb,updateCollection,nextId} from "./localStore";
const safe=u=>{if(!u)return u;const {contrasena,...x}=u;return x};
export async function crearUsuario(d){const db=readDb();if(db.usuarios.some(x=>x.correo.toLowerCase()===d.correo.toLowerCase()))throw Error("Correo ya registrado");const u={...d,idUsuario:nextId(db.usuarios,"idUsuario"),rol:"USUARIO"};updateCollection("usuarios",a=>[...a,u]);return safe(u)}
export async function obtenerUsuarios(){return readDb().usuarios.map(safe)}
export async function obtenerUsuarioPorId(id){const u=readDb().usuarios.find(x=>String(x.idUsuario)===String(id));if(!u)throw Error("Usuario no encontrado");return safe(u)}
export async function obtenerUsuarioPorCorreo(c){const u=readDb().usuarios.find(x=>x.correo.toLowerCase()===c.toLowerCase());if(!u)throw Error("Usuario no encontrado");return safe(u)}
export async function actualizarUsuario(d){let o;updateCollection("usuarios",a=>a.map(x=>{if(String(x.idUsuario)===String(d.idUsuario)){o={...x,...d};return o}return x}));return safe(o)}
export async function eliminarUsuario(id){updateCollection("usuarios",a=>a.filter(x=>String(x.idUsuario)!==String(id)));return {success:true}}
