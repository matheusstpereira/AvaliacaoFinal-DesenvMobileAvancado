import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../config/firebaseconfig';
import { signOut } from 'firebase/auth';

export default function TelaInicial({navigation}) {

  //Função Para realização de Logout
  async function logout(){
    await signOut(auth)
    .then(() => {
    alert('Deslogado com Sucesso'), navigation.navigate('TelaInicial');
    })
    .catch(error => alert(error));
  }

  //Front
  return (
    <View style={styles.container}>

    <Image style={styles.logo} source={require('../../assets/logo.png')} />


    <Text style={styles.texto}>
      MinasCell
    </Text>

    <Text style={styles.texto}>
      Assistencia Especializada
    </Text>

    <Text style={styles.texto}>
      Qualidade e preço justo
    </Text>

    <TouchableOpacity style={styles.btnLogout} onPress={() => logout()}>
      <Text style={styles.btnText}>Logout</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  logo: {
    width: 300, 
    height: 200, 
    marginTop: 20
  },
  texto: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 30,
    marginTop: 20,
    resizeMode: 'contain'
  },
  TextInput: {
    marginTop: 5,
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10
  },
  btnLogout:{
    width: '50%',
    height: 40,
    backgroundColor: '#0FA3FF',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 30
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold"
  }
});
