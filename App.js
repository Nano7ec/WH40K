import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; // Importa las pantallas
import BasicRuleScreen from './src/screens/BasicRule';
import ArmyTyranidScreen from './src/screens/ArmyTyranid';
// Importar las nuevas pantallas
import TyranidsScreen from './src/screens/Tyranids';
import MinTyraScreen from './src/screens/minTyra';
//Importar las pantallas de Blood Angels
import BloodAngelsScreen from './src/screens/BloodAngels';
import ArmyBloodsAngelsScreen from './src/screens/ArmyBloodAngels';
//Importar las antallas de Chaos Daemons
import ArmyChaosDaemonsScreen from './src/screens/ArmyChaosDaemons';
import ChaosDaemonsScreen from './src/screens/ChaosDaemons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WH40K" >
        <Stack.Screen name="WH40K" component={HomeScreen} options={{ title: 'WH40K' }} />
        <Stack.Screen name="BasicRule" component={BasicRuleScreen} options={{ title: 'Basic Rule' }} />
        <Stack.Screen name="ArmyTyranid" component={ArmyTyranidScreen} options={{ title: 'Army Tyranid' }} />
         {/* Definir las nuevas pantallas */}
         <Stack.Screen name="Tyranids" component={TyranidsScreen} options={{ title: 'Tyranids' }} />
        <Stack.Screen name="minTyra" component={MinTyraScreen} options={{ title: 'Min Tyra' }} />
        {/** Definir las nuevas pantallas de Blood Angels */}
        <Stack.Screen name="BloodAngels" component={BloodAngelsScreen} options={{ tittle : 'Blood Angels'}}/>
        <Stack.Screen name="ArmyBloodAngels" component={ArmyBloodsAngelsScreen} options={{title: 'Army Blood Angels'}}/>
        {/** Definir las pantallas de Chaos Daemons */}
        <Stack.Screen name='ArmyChaosDaemons' component={ArmyChaosDaemonsScreen} options={{tittle: 'Army Chaos Daemons'}}/>
        <Stack.Screen name='ChaosDaemons' component={ChaosDaemonsScreen} options={{tittle: 'Chaos Daemons'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
