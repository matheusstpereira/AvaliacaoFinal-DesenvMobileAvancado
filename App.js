import * as React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

// Novas Telas Trabalho Final
import TelaInicial from './components/app/TelaInicial';
import Cadastro from './components/app/Cadastro';
import Home from './components/app/Home';

//AvaliacaoCelular
import AvaliacaoCelular from './components/app/screens/AvaliacaoCelular';
import ListaCelular from './components/app/screens/ListaCelular';

//Camera
import CameraApp from './components/app/CameraApp';

//Navegações
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
		tabBarIcon: ({ color, size }) => {
			let iconName;

			switch (route.name) {
				case 'Home':
					iconName = 'home';
					break;
				case 'Avaliação Celular':
					iconName = 'phone';
					break;
        case 'Camera':
					iconName = 'camera';
					break;  
			}

			return <Icon name={iconName} size={size} color={color} />;
		},
	})}
		tabBarOptions={{
		activeTintColor: '#0FA3FF',
		inactiveTintColor: '#161313',
	}}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Avaliação Celular" component={AvaliacaoCelular}/>
        <Tab.Screen name="Camera" component={CameraApp}/>
      </Tab.Navigator>
  )
}


export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="AvaliacaoCelular" component={AvaliacaoCelular} />
        <Stack.Screen name="ListaCelular" component={ListaCelular} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
