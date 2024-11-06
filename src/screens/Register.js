import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';
import { auth, db } from '../firebase/config'

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      user: '',
      password: '',
      description: '',
      registered: false,
      errorMsg: ''
    };
  }

  onSubmit = (email, password, user, description) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        if (response) {
          db.collection("users")
            .add({
              email: auth.currentUser.email,
              description: description,
              user: user,
              createdAt: Date.now(),
            })
            .then(() => {
              this.setState({ registered: true, errorMsg: '' });
              this.props.navigation.navigate('HomeMenu')
            })
            .catch(error => this.setState({ errorMsg: error.message }));
        }
      }).then((response) => {
        console.log(response)
      })
      .catch(error => this.setState({ errorMsg: error.message }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >Registro</Text>

        <TextInput
          style={styles.field}
          keyboardType=' email-address'
          placeholder='email'
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />

        <TextInput
          style={styles.field}
          keyboardType='default'
          placeholder='user'
          onChangeText={text => this.setState({ user: text })}
          value={this.state.user}
        />

        <TextInput style={styles.field}
          keyboardType='default'
          placeholder='description'
          onChangeText={text => this.setState({ description: text })}
          value={this.state.description}
        />

        <TextInput style={styles.field}
          keyboardType='default'
          placeholder='password'
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        />

        <TouchableOpacity style={styles.buttonGreen} onPress={() => this.onSubmit(this.state.email, this.state.password, this.state.user, this.state.description)} >
          <Text style={styles.buttonText}> Register </Text>
        </TouchableOpacity>

        <View style={styles.preview}>
          <Text style={styles.description}> Email: {this.state.email}</Text>
          <Text style={styles.description}> User: {this.state.user}</Text>
          <Text style={styles.description}> Password: {this.state.password}</Text>
        </View>


        <TouchableOpacity style={styles.buttonBlue} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonText} >Ya tienes cuenta? LOGIN!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Register;

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