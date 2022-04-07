import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const UserItems =({user, handleDelete}) =>{
    return (
        <View style ={styles.itemContainer}>
            <TouchableOpacity>
                <Text>
                    <Text style={styles.itemList}>{user.name}</Text>
                    <Text>  </Text>
                    <Text style={styles.itemList}>{user.lastname}</Text>
                </Text>
            
                <Text style={styles.itemList}>{user.address}</Text>
                <Text style={styles.itemList}>{user.email}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteButton}
                onPress={()=>handleDelete(user.user_id)}
            >
                <Text>Delete</Text>
            </TouchableOpacity>

        </View>

       
   
    );
};
const styles =StyleSheet.create({
    itemContainer:{
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: "space-between"

    },
    itemList:{
        color: '#ffffff'
    },
    name_lastname:{
        flexDirection: 'row',
        color:'#ffffff'
    },
    deleteButton:{
        padding: 10,
        marginBottom: 15,
        alignItems: 'center',
        backgroundColor: '#ff3b3f',
        borderRadius: 5,
    }
   
});
export default UserItems