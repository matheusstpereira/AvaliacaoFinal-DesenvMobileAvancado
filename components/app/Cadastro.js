import React, {useState, useRef} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Animated } from 'react-native';
import { auth } from '../../config/firebaseconfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Cadastro({navigation}) {

  //Animação
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000
    }).start();
  };

  //Declaração Constantes Dados Usuario
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

  //Validação Campos
  const validar = () => {
    if (usuario == ''){
      return false
    } else if(senha == ''){
      return false
    } else if(senha != confirmacaoSenha){
      return false
    } else {
      return true
    }
  }

  //Efetivação do Cadastro ou Retornar Erro
  const cadastrar = () =>{
    if(validar()){
    criarUsuario(), navigation.navigate('TelaInicial');}
    else {alert('Favor preencher todos os campos corretamente')}
  }

  //Função responsavel pela realização do cadastro do usuario
  async function criarUsuario(){
    await createUserWithEmailAndPassword(auth, usuario, senha)
    .then(value => {
      alert('Cadastro de Usuario Realizado com Sucesso'), navigation.navigate('TelaInicial');
    })
    .catch(error => alert(error));
  }

  //Front
  return (
    <View style={styles.container}>

    <Animated.Image style={[styles.logo, {opacity: fadeAnim}]} source={require('../../assets/logo.png')} onLoad={fadeIn}/>

    <Text style={styles.texto}>
      MinasCell
    </Text>

    <Text style={styles.texto}>
      Cadastro de Usuario
    </Text>


    <TextInput placeholder="Novo Usuario" style={styles.TextInput} onChangeText={text=>setUsuario(text)} />

    <TextInput secureTextEntry={true}  placeholder="Nova Senha" style={styles.TextInput} onChangeText={text=>setSenha(text)} />

    <TextInput secureTextEntry={true}  placeholder="Repita sua Nova Senha" style={styles.TextInput} onChangeText={text=>setConfirmacaoSenha(text)} />

    <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastrar()}>
      <Text style={styles.btnText}>Cadastrar</Text>
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
  btnCadastro:{
    width: '50%',
    height: 40,
    backgroundColor: '#0FA3FF',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 10
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold"
  }
});
