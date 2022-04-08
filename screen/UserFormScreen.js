import React, {useState, useEffect}  from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import Layout from '../components/Layout'
import { saveUser, loadUserField, updateUser } from '../api'


const UserFormScreen =({navigation, route})=>{
    const [users, setUsers] = useState({
        name: "", 
        lastname: "",
        address: "",
        email: "",
    });
    const [edit, setEdit] = useState(false);
    
    const handleText = (name, value) =>{
        setUsers({...users,[name]: value});
    };
    
    const handleSubmit = ()=>{
        if(users.name === '' || users.lastname === '' || users.address === '' || users.email === '' ){
            alert('Pleace insert all fields')

        }else{
          if(!edit){
            //console.log('estoy aqui')
             saveUser(users);
             console.log('estoy aqui')  
             navigation.navigate("Home"); 
          } else {
             updateUser(route.params.id, users);
             navigation.navigate("Home");
          }
          
        }
        };
    
    useEffect(()=>{
        if(route.params && route.params.id){
            navigation.setOptions({headerTitle: "Update User"});
            setEdit(true);
            (async()=>{
                const user = await loadUserField(route.params.id);
                setUsers({name: user[0].name, lastname: user[0].lastname, address: user[0].address, email: user[0].email})
            })();
        }
    },[])

    return(
        <Layout>
            <TextInput
                style = {style.container}
                placeholder='Name'
                placeholderTextColor='#546574'
                onChangeText={(text) => handleText('name',text)}
                value={users.name}
                
            />
            <TextInput
                style = {style.container}
                placeholder='Last Name'
                placeholderTextColor='#546574'
                onChangeText={(text) => handleText('lastname',text)}
                value={users.lastname}
            />
            <TextInput
                style = {style.container}
                placeholder='Address'
                placeholderTextColor='#546574'
                onChangeText={(text) => handleText('address',text)}
                value={users.address}
            />
            <TextInput
                style = {style.container}
                placeholder='email'
                placeholderTextColor='#546574'
                onChangeText={(text) => handleText('email',text)}
                value={users.email}
            />
           {
               !edit ?(
                <TouchableOpacity style={style.saveButtonStyle} onPress={handleSubmit}>
                    <Text style={style.textStyle}>Save User</Text>
                </TouchableOpacity>
               ):(
                <TouchableOpacity style={style.updateButtonStyle} onPress={handleSubmit}>
                    <Text style={style.textStyle}>Update User</Text>
                </TouchableOpacity>
               )
           }
            
               
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
    saveButtonStyle:{
        width:'90%',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#10ac84',
    },
    updateButtonStyle:{
        width:'90%',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#e58e26',
    },
    textStyle:{
        color:'#ffffff',
        textAlign: 'center'
    }

})
export default UserFormScreen 