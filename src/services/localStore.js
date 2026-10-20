import seed from "../data/mockData.json";
const KEY="yuwelongo-demo-db-v1";
export const readDb=()=>{try{return {...seed,...JSON.parse(localStorage.getItem(KEY)||"{}")}}catch{return seed}};
export const updateCollection=(key,fn)=>{const db=readDb();db[key]=fn(db[key],db);localStorage.setItem(KEY,JSON.stringify(db));return db[key]};
export const nextId=(a,k)=>Math.max(0,...a.map(x=>+x[k]||0))+1;
export const demoToken="demo-local-token";
