import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import register from '../register/register';
import logado from './verifyAuth';
import {Button} from 'react-native-elements';

export default function login({navigation}) {

  const isAuth = logado();
  
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  logando = async () => {
    const { email, password} = user;
    if(email !== '' &&  password !== ''){
      try{
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        Alert.alert("Logado com sucesso!");
      } catch(err){
        Alert.alert("Email ou senha incorreta!");
      }
    }else{
      Alert.alert("Email ou senha inválido!")
    }
  }

  signingOut = async () => {
    auth()
  .signOut()
  .then(() => Alert.alert('Usuário deslogado com sucesso!'));
  }  

  if (!isAuth) {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          placeholder="Digite seu e-mail"
          value={user.email}
          onChangeText={email => setUser({...user, email})}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Digite seua senha"
          value={user.password}
          onChangeText={password => setUser({...user, password})}
        />
        <Button
        buttonStyle={styles.ButtonLogin}
         title="Entrar"
         onPress={logando}
        />
        <Text
          style={styles.Text}
        >
          É novo por aqui?
        </Text>
        <Button
         buttonStyle={styles.Button}
         title="Criar minha conta"
         onPress={() => navigation.navigate(register)}
        />
      </View>
    );
  }

  return (
    <View>
      <Button
         style={styles.button}
         title="Deslogar"
         onPress={signingOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    padding: 20,
  },
  input: {
    height: 45,
    alignSelf: 'stretch',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  Button: {
    height: 45,
    width:200,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5,
  },
  ButtonLogin: {
    height: 45,
    width:200,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  Text:{
    marginTop:100,
  }
});