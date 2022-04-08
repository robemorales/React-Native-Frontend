
const API = 'http://10.0.2.2:3000/users';
 export const getUser = async ()=>{
    const resp =  await fetch(API)
    return await resp.json()
       
}

export const saveUser = async (newUser) =>{
    const res = await fetch(API,{
        method:"POST",
        headers:{
            Accept: "application/json", "Content-Type":"application/json"
        },
        body: JSON.stringify(newUser)
    });
    return await res.json()
};

export const deletUser=async(id)=>{
    await fetch(`${API}/${id}`,{
        method:'DELETE'
    })
};

export const loadUserField = async(id)=>{
    const res = await fetch(`${API}/${id}`)
    return await res.json();
    
};
export const updateUser = async(id, newUser)=>{
   const res =  await fetch(`${API}/${id}`,{
        method:'PUT',
        headers:{
            Accept: "application/json", "Content-Type":"application/json"
        },
        body: JSON.stringify(newUser)

    });
    return res
}