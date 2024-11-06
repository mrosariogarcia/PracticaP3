import React from "react";
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';


function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Bienvenido a Home</Text>
        </View>
    )
}

export default Home;

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
    }
})