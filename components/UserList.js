import React, {useState, useEffect} from 'react'
import {FlatList, RefreshControl} from 'react-native'
import UserItem from '../components/UserItems'
import {getUser, deletUser} from '../api'
import { useIsFocused } from '@react-navigation/native'

const UserList =()=>{
    const [users, setUsers] = useState([]);
    const [refresh, setRefresh] =useState(false)
    const loadUser = async () =>{
       const data =  await getUser();
       setUsers(data)
    }
    const isFocused = useIsFocused();
    //funcion que se ejecuta cada vez que carga la pagina es lo primero que se ejecuta
    useEffect(()=>{
        loadUser()
    }, [isFocused])

    const handleDelete = async(user_id) =>{
        await deletUser(user_id)
        await loadUser()

    } 
    const renderItem =({ item })=>{
        return <UserItem user ={item} handleDelete={handleDelete}/>;
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