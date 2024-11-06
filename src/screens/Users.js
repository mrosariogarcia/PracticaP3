import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { db } from '../firebase/config'

class Users extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        db.collection("users").onSnapshot(
            (docs) => {
                let users = []
                docs.forEach((doc) => {
                    users.push({ id: doc.id, data: doc.data()})
                })

                this.setState({
                    users: users
                })
            })
    }

  render() {
    return(
        <View style={styles.container}>
            <Text style={styles.title} >Lista de Usuarios</Text>
            <FlatList data={this.state.users}
                keyExtractor={(item) => item.id}
                renderItem={({item})=> (
                <View>
                    <Text>Email: {item.data.email} </Text>
                    <Text>User Name: {item.data.user} </Text>
                    <Text>Created At: {item.data.createdAt} </Text>
                </View>
            )}>

            </FlatList>
        </View>
    )
  }

}

export default Users;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 10,
    },
    buttonBlue: {
      backgroundColor: '#67b7f7',
      padding: 15,
      margin: 20,
      borderRadius: 10,
      width: 600,
      height: 50,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    field: {
      height: 20,
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderStyle: 'solid',
      borderRadius: 6,
      marginVertical: 10,
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#333',
      width: 600,
      height: 30,
    },
    buttonGreen: {
      backgroundColor: '#28a745',
      padding: 15,
      margin: 20,
      borderRadius: 10,
      width: 600,
      height: 50,
      alignItems: 'center',
    },
    preview: {
      padding: 15,
      margin: 20,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 6,
      backgroundColor: '#f9f9f9',
      width: 600,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center'
    },
  })