import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const UserItems =({user}) =>{
    return (
        <View style ={styles.itemContainer}>
            <Text style={styles.itemList}>{user.name}</Text>
            <Text style={styles.itemList}>{user.lastname}</Text>
            <Text style={styles.itemList}>{user.address}</Text>
            <Text style={styles.itemList}>{user.email}</Text>
        </View>
    );
};
const styles =StyleSheet.create({
    itemContainer:{
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
    },
    itemList:{
        color: '#ffffff'
    }

});
export default UserItems