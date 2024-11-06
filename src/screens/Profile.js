import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';


const Profile = ({navigation}) => {
    return (
      <View style={styles.container} >
        <Text style={styles.title} >Mi Perfil</Text>
        
        <TouchableOpacity style={styles.buttonOrange} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText} > Desloguearse</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Profile;

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
})