import React, {useEffect, useRef, useState} from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const CameraApp = () => {

  // Camera
  const [typeCamera, setTypeCamera] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);

  // Modal
  const cameraRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
      // Camera
      (async () => {
          const {status} = await Camera.requestCameraPermissionsAsync();
          //console.log(status);
          setHasPermission(status === 'granted');
      })();

      // Media Library
      (async () => {
          const {res} = await MediaLibrary.requestPermissionsAsync();
          if (res.granted) {
              MediaLibrary.getAlbumsAsync()
                  .then((albums) => console.log(albums))
                  .catch((err) => console.warn(err))
          }
      })();
  }, []);

  // Permissão da câmera
  if (hasPermission == null) {
      return <View/>
  }
  if (hasPermission == false) {
      return <Text style={{fontSize: 30}}>Acesso negado!</Text>
  }

  // Tirando uma foto
  const takePhoto = async () => {
      alert("Photo!")
  }

  // Salvando a foto
  const savePhoto = async () => {
  }

  return (
      <View style={styles.container}>
          <Camera
              style={styles.camera}
              type={typeCamera}
              ref={cameraRef}>
              <TouchableOpacity
                  style={styles.touchButton} onPress={() => {
                  setTypeCamera(
                      typeCamera === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back)
              }}>
                  <Text style={styles.textButton}>Alterar câmera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.touchButton}
                  onPress={takePhoto}>
                  <Text style={styles.textButton}>Tirar foto</Text>
              </TouchableOpacity>

              {photo &&
              <Modal
                  animationType="slide"
                  transparent={false}
                  visible={openModal}
              >
                  <View style={styles.viewModal}>
                      <Text style={styles.text}>My photo!</Text>
                      <Image
                          style={{margin: 20, width: 320, height: 500}}
                          source={{uri: photo}}
                      />
                      <TouchableOpacity
                          style={styles.touchButton}
                          onPress={savePhoto}>
                          <Text>Salvar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={styles.touchButton}
                          onPress={() => {
                          }}>
                          <Text>Voltar</Text>
                      </TouchableOpacity>
                  </View>
              </Modal>
              }
          </Camera>
      </View>
  );
}

export default CameraApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  viewText: {
    flex: 0.1,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',    
  },
  camera: {
    flex: 1,
    margin: 10,
  },
  TextInput: {
    marginTop: 5,
    width: '80%',
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
  },
  viewButton: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  }, 
  touchButton: {
    alignItems: "center",
    backgroundColor: "#0FA3FF",
    padding: 10,
  },
  button: {
    flex: 0.5,
    alignSelf: 'flex-end',
    alignItems: 'center',
    margin:2,
  },
  textButton: {
    width: 320,
    fontSize: 20,
    color: 'white',
  },
  viewModal: {
    flex:1,
    alignItems: 'center',
    margin: 30,
    padding: 20
  },
});
