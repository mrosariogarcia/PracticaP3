import  React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';
import {auth} from '../firebase/config'

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
        };
    }

    onSubmit = () => {
      const { email, password } = this.state;
      console.log("Email:", email);
      console.log("Password:", password);
    };
  

    login(email, password){
      auth.signInWithEmailAndPassword(email, password)
       .then((res) => {
           this.setState({loggedIn: true});
           this.props.navigation.navigate('HomeMenu')
       })
       .catch(error => {
         this.setState({error: 'Credenciales inválidas.'})
       })
    }


	render() {

        return (
            <View style={styles.container} >
                <Text style={styles.title}> Ingresar </Text>

                <TextInput style={styles.field}
                  keyboardType=' email-address' 
                  placeholder= 'email'
                  onChangeText={ text => this.setState({email:text}) }
                  value={this.state.email}
                />

                <TextInput style={styles.field}
                  keyboardType= 'default'
                  placeholder= 'password' 
                  secureTextEntry={true}
                  onChangeText={ text => this. setState({password: text}) } 
                  value={this.state.password}
                />

                <TouchableOpacity  style={styles.buttonGreen} onPress={() => this.login(this.state.email, this.state.password)} >
                  <Text style={styles.buttonText}> Login </Text>
                </TouchableOpacity>

                <View style={styles.preview}>
                  <Text style={styles.description}> Email: {this.state.email}</Text>
                  <Text style={styles.description}> Password: {this.state.password}</Text>
                </View>
                                
                <TouchableOpacity style={styles.buttonBlue} onPress={ ()=> this.props.navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>No tienes cuenta? REGISTER!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonOrange} onPress={() => this.props.navigation.navigate('HomeMenu')}>
                    <Text style={styles.buttonText}>Entrar en la app</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

export default Login; 

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
      margin: 20,
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
    },
    buttonBlue: {
      backgroundColor: '#67b7f7',
      padding: 15,
      margin: 20,
      borderRadius: 10,
      width: 600,
      height:50,
      alignItems: 'center',
    },
    buttonOrange: {
      backgroundColor: '#f7a667',
      padding: 15,
      margin: 20,
      borderRadius: 10,
      width: 600,
      height:50,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    field:{
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
      height:30,
    },
    buttonGreen: {
      backgroundColor: '#28a745',
      padding: 15,
      margin: 20,
      borderRadius: 10,
      width: 600,
      height:50,
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
  });