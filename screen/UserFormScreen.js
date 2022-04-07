import React, {useState}  from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import Layout from '../components/Layout'
import { saveUser } from '../api'


const UserFormScreen =({navigation})=>{
    
    const [users, setUsers] = useState({
        name: '',
        lastname: '',
        address: '',
        email: '',
    })

    const handleText = (name, value) =>{
        setUsers({...users,[name]: value});
    }

    const addUser=()=>{
        if(users.name ==='' || users.lastname ==='' || users.address ==='' || users.email ===''){
            alert('ERROR')
        }else{
            saveUser(users)
            navigation.navigate('Home')

        }

    }

    return(
        <Layout>
            <TextInput
                style = {style.container}
                placeholder='Name'
                placeholderTextColor='#546574'
                onChangeText={(text) => handleText('name',text)}
            />
            <TextInput
                style = {style.container}
                placeholder='Last Name'
                placeholderTextColor='#546574'
                onChangeText={(text) => handleText('lastname',text)}
            />
            <TextInput
                style = {style.container}
                placeholder='Address'
                placeholderTextColor='#546574'
                onChangeText={(text) => handleText('address',text)}
            />
            <TextInput
                style = {style.container}
                placeholder='email'
                placeholderTextColor='#546574'
                onChangeText={(text) => handleText('email',text)}
            />
            <TouchableOpacity style ={style.buttonStyle} onPress={()=>addUser()} >
                <Text style = {style.textStyle}>Save User</Text>
            </TouchableOpacity>

        </Layout>
    )
}

const style = StyleSheet.create({
    container:{
        width: '90%',
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#10ac84',
        height: 35,
        color:'#ffffff',
        padding: 4,
        borderRadius: 5,
        textAlign: 'center'
    },
    buttonStyle:{
        width:'90%',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#10ac84',
    },
    textStyle:{
        color:'#ffffff',
        textAlign: 'center'
    }

})
export default UserFormScreen 