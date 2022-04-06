
const API = 'http://10.0.2.2:3000/users';
 export const getUser = async ()=>{
    const resp =  await fetch(API)
    return await resp.json()
       
}