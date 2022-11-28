import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import { collection, addDoc, getDoc , doc, setDoc, updateDoc,  deleteDoc } from "firebase/firestore";
import { auth, db } from "../../../config/firebaseconfig"

const AvaliacaoCelular = (props) => {

  const initalState = {
    marca: "",
    modelo: "",
    status: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, marca) => {
    setState({ ...state, [marca]: value });
  };

  const saveNewCelular = async () => {
    if (state.marca === "") {
      alert("Insira uma marca");
    } else {

      try {
        await addDoc(collection(db, "celular"),{
          marca: state.marca,
          modelo: state.modelo,
          status: state.status,
        });

        props.navigation.navigate("ListaCelular");
      } catch (error) {
        console.log(error)
      }
    }
  };


return (
  <ScrollView style={styles.container}>
  <View style={styles.inputGroup}>
      <TextInput 
      placeholder='Marca'
      onChangeText={(value) => handleChangeText(value, "marca")}
      value={state.marca} 
      />
  </View>

  <View style={styles.inputGroup}>
      <TextInput 
      placeholder='Modelo'
      onChangeText={(value) => handleChangeText(value, "modelo")}
      value={state.modelo}  
      />
  </View>

  <View style={styles.inputGroup}>
      <TextInput 
      placeholder='Status'
      onChangeText={(value) => handleChangeText(value, "status")}
      value={state.status}  
       />
  </View>

  <View>
    <Button title="Salvar" onPress={() => saveNewCelular()}/>
  </View>
  </ScrollView>
);
}

export default AvaliacaoCelular;

const styles = StyleSheet.create({
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  container: {
    flex: 1,
    padding: 35,
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

