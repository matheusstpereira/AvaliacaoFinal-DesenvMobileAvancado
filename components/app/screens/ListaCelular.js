import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { collection, addDoc, doc, getDoc , setDoc, updateDoc,  deleteDoc } from "firebase/firestore";
import firebase from "../../../config/firebaseconfig"
import { auth, db } from "../../../config/firebaseconfig"

const ListaCelular = (props) => {
    const [celular, setCelular] = useState([]);

    useEffect(() => {
        getDoc(collection(db, "celular").onSnapshot((querySnapshot) => {
          const celular = [];
          querySnapshot.docs.forEach((doc) => {
            const { marca, modelo, status } = doc.data();
            celular.push({
              id: doc.id,
              marca,
              modelo,
              status,
            });
          });
          setCelular(celular);
        }));
      }, []);
    
      return (
        <ScrollView>
          <Button
            onPress={() => props.navigation.navigate("AvaliacaoCelular")}
            title="Criar Celular"
          />
          {celular.map((cell) => {
            return (
              <ListItem
                key={cell.id}
                bottomDivider
                onPress={() => {
                  props.navigation.navigate("DetalheCelular", {
                    cellId: cell.id,
                  });
                }}
              >
                <ListItem.Chevron />
                <Avatar
                  source={{
                    uri:
                      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                  }}
                  rounded
                />
                <ListItem.Content>
                  <ListItem.Title>{cell.marca}</ListItem.Title>
                  <ListItem.Subtitle>{cell.modelo}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </ScrollView>
  );
}


export default ListaCelular;

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
