import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native-elements';


export default function register() {

  const [usuario, setUsuario] = useState({
    email: '',
    password: '',
  })

  register = async () => {
    const {email, password} = usuario;
    if(email !== '' && password !== ''){
      const userCredential = await auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Usuário criado com sucesso!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Esse email já existe!');
        }
    
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Email inválido!');
        }
      })
    }else{
      Alert.alert("Email ou senha inválido!")
    }
  }

  return(
      <ScrollView style={styles.container}>
        <View style={styles.passwordAlert}>
          <Text>
            Sua senha deve ter no mínimo 6 caracteres.
          </Text>
        </View>
        <View style={styles.regsiter}>
          <TextInput
          style={styles.input}
          placeholder="Nome completo ou empresa"
          />
          <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={usuario.email}
          onChangeText={email => setUsuario({...usuario, email})}
          />
          <TextInput
          style={styles.input}
          placeholder="Senha"
          value={usuario.password}
          onChangeText={password => setUsuario({...usuario, password})}
          />
          <TextInput
          style={styles.input}
          placeholder="CNPJ"
          />
          <TextInput
          style={styles.input}
          placeholder="Endereço"
          />
          <TextInput
          style={styles.input}
          placeholder="Telefone"
          />
          <TextInput
          style={styles.input}
          placeholder="Bairro"
          />
          <TextInput
          style={styles.input}
          placeholder="Cidade"
          />

          <Button
          buttonStyle={styles.Button}
          title="Cadastrar"
          onPress={register}
          />
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input: {
    height: 45,
    alignSelf: 'stretch',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  regsiter: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    padding: 20,
  },
  passwordAlert:{
    justifyContent: 'flex-start',
    backgroundColor: "#C7DCF5",
    height: 50,
    alignItems: 'center',
  },
  Button: {
    height: 45,
    width:200,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
})