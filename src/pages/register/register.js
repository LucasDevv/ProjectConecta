import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';


export default function register({navigation}) {

  const usersCollection = firestore().collection('users');

  const [user, setUser] = useState({
    email: '',
    password: '',
    name:'',
    CNPJ:'',
    address:'',
    telephone:'',
    bairro:'',
    city:'',
  })

  registerAuth = async () => {
    const {email, password, name, CNPJ, address, telephone , bairro, city} = user;
    if(email !== '' && password !== ''){
      const userCredential = await auth().createUserWithEmailAndPassword(email, password)
        .then(data => {
          const uid = data.user.uid;

          firestore()
            .collection('users')
            .doc(uid)
            .set({
              CNPJ: CNPJ,
              address: address,
              bairro: bairro,
              city: city,
              name: name,
              telephone: telephone,
            })
            .then(() => {
              navigation.goBack();
              Alert.alert('Usuário criado com sucesso!');
            });
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
          value={user.name}
          onChangeText={name => setUser({...user, name})}
          />
          <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={user.email}
          onChangeText={email => setUser({...user, email})}
          />
          <TextInput
          style={styles.input}
          placeholder="Senha"
          value={user.password}
          onChangeText={password => setUser({...user, password})}
          />
          <TextInput
          style={styles.input}
          placeholder="CNPJ"
          value={user.CNPJ}
          onChangeText={CNPJ => setUser({...user, CNPJ})}
          />
          <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={user.address}
          onChangeText={address => setUser({...user, address})}
          />
          <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={user.telephone}
          onChangeText={telephone => setUser({...user, telephone})}
          />
          <TextInput
          style={styles.input}
          placeholder="Bairro"
          value={user.bairro}
          onChangeText={bairro => setUser({...user, bairro})}
          />
          <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={user.city}
          onChangeText={city => setUser({...user, city})}
          />

          <Button
          buttonStyle={styles.Button}
          title="Cadastrar"
          onPress={registerAuth}
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