import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native'
import {getUser} from '../api'
import Layout from '../components/Layout'
import UserList from '../components/UserList'

const HomeScreen = ()=>{

    const [users, setUsers] = useState([]);
    const loadUser = async () =>{
       const data =  await getUser();
       setUsers(data)
    }
    //funcion que se ejecuta cada vez que carga la pagina es lo primero que se ejecuta
    useEffect(()=>{
       loadUser()
    }, [])
    return(
        <Layout>
            <UserList users={users}/>
        </Layout>
            
        
    );

};
export default HomeScreen