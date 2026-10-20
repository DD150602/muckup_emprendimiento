import {readDb,demoToken} from "./localStore";
export async function loginUser(correo,contrasena){const u=readDb().usuarios.find(x=>x.correo.toLowerCase()===correo.toLowerCase()&&x.contrasena===contrasena);if(!u)throw Error("Credenciales inválidas. Usa maria@demo.com / demo123 o admin@demo.com / admin123.");const {contrasena:_secret,...safe}=u;return {...safe,token:demoToken}}
