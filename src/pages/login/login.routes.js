import React from 'react';
import register from '../register/register'
import login from './login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default props => {
  return (
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="Login Conecta"
          component={login}
          options={({navigation}) => {
            return{
              headerTitleAlign: true,
              headerStyle: {backgroundColor: '#062e54'},
              headerTintColor: '#fff',
            }
          }}
        />
        <Stack.Screen
          name="register"
          component={register}
          options={{
            headerTitleAlign: true,
            headerStyle: {backgroundColor: '#062e54'},
            headerTintColor: '#fff',
          }}
        /> 
      </Stack.Navigator>
  )}