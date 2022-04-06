import React from 'react'
import {View, Text, FlatList} from 'react-native'
import UserItem from '../components/UserItems'

const renderItem =({ item })=>{
    return <UserItem user ={item}/>;
    };


const UserList =({users})=>{
    return(
        <FlatList
            style = {{ width: '100%'}}
            data={users}
            keyExtractor = {(item)=> item.user_id +''}
            renderItem={renderItem}
        />
    );
};
export default UserList