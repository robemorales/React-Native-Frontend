import React, {useState, useEffect} from 'react'
import {FlatList, RefreshControl} from 'react-native'
import UserItem from '../components/UserItems'
import {getUser} from '../api'

const UserList =()=>{
    const [users, setUsers] = useState([]);
    const [refresh, setRefresh] =useState(false)
    const loadUser = async () =>{
       const data =  await getUser();
       setUsers(data)
    }
    //funcion que se ejecuta cada vez que carga la pagina es lo primero que se ejecuta
    useEffect(()=>{
       loadUser()
    }, [])

    const renderItem =({ item })=>{
        return <UserItem user ={item}/>;
    }

    const onRefresh = React.useCallback(async ()=>{
        setRefresh(true)
        await loadUser()
        setRefresh(false)
    })
    return(
        <FlatList
            style = {{ width: '100%'}}
            data={users}
            keyExtractor = {(item)=> item.user_id +''}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    refreshing ={refresh}
                    onRefresh={onRefresh}
                />
            }
        />
    );
};
export default UserList