import React from 'react';
import {View } from 'react-native';
import { Icon } from 'react-native-elements';
import Home from './pages/home/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import loginRegister from './pages/login/login.routes';
const { Navigator, Screen} = createBottomTabNavigator();

export default props => {
  return (
    <NavigationContainer>
      <Navigator 
        tabBarOptions={{
          style: {
            height: 60,
          },
          tabStyle:{
            alignItems: 'center',
            justifyContent: 'center',

          },
          iconStyle:{
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle:{
            fontSize: 11,
            marginTop: 5,
          }
        }}
        initialRouteName = "home"
      >
        <Screen name="Conecta" component={Home} options={{
          tabBarIcon:({size, focused}) => {
            return(
              <Icon
                name="home"
                size={size}
                color={focused ? color="blue" : color="grey"}
              />
            )              
          }
        }}/>
        <Screen name="Negocios" component={View} options={{
          tabBarIcon:({size, focused}) => {
            return(
              <Icon
                name="article"
                size={size}
                color={focused ? color="blue" : color="grey"}
              />
            )              
          }
        }}/>
        <Screen name="Criar anúncio" component={View} options={{
          tabBarIcon:({size, focused}) => {
            return(
              <Icon
                name="addchart"
                size={size}
                color={focused ? color="blue" : color="grey"}
              />
            )              
          }
        }}/>
        <Screen name="Perfil" component={loginRegister} options={{
          tabBarIcon:({size, focused}) => {
            return(
              <Icon
                name="person"
                size={size}
                color={focused ? color="blue" : color="grey"}
              />
            )              
          }
        }}/>
      </Navigator>
        
    </NavigationContainer>
  );
}
