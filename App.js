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
import MenuBloodsAngelsScreen from './src/screens/MenuBloodAngels';
import ArmyBloodAngelsScreen from './src/screens/ArmyBloodAngels';
import MiniBloodAngelsScreen from './src/screens/MiniBloodAngels';

//Importar las pantallas de Chaos Daemons
import ArmyChaosDaemonsScreen from './src/screens/ArmyChaosDaemons';
import ChaosDaemonsScreen from './src/screens/ChaosDaemons';

//Importar las pabtallas de Chaos Knight
import ArmyChaosKnightScreen from './src/screens/ArmyChaosKnight';
import ChaosKnightScreen from './src/screens/ChaosKnight';

//Importar las pantallas de Chaos Space Marines
import ArmyChaosSpaceMarinesScreen from './src/screens/ArmyChaosSpaceMarines';
import ChaosSpaceMarinesScreen from './src/screens/ChaosSpaceMarines';

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
       <Stack.Screen name='MenuBloodAngels' component={MenuBloodsAngelsScreen}/>
       <Stack.Screen name='ArmyBloodAngels' component={ArmyBloodAngelsScreen}/>
       <Stack.Screen name='MiniBloodAngels' component={MiniBloodAngelsScreen}/>

        {/** Definir las pantallas de Chaos Daemons */}
        <Stack.Screen name='ArmyChaosDaemons' component={ArmyChaosDaemonsScreen} options={{tittle: 'Army Chaos Daemons'}}/>
        <Stack.Screen name='ChaosDaemons' component={ChaosDaemonsScreen} options={{tittle: 'Chaos Daemons'}}/>
        
        {/** Definir las pantallas de Chaos Knight */}
        <Stack.Screen name='ArmyChaosKnight' component={ArmyChaosKnightScreen} options={{tittle:'Army Chaos Knights'}}/>
        <Stack.Screen name='ChaosKnight' component={ChaosKnightScreen} options={{tittle:'Chaos Knight'}}/>
        
        {/** Definir las pantallas de Chaos Space Marines */}
        <Stack.Screen name='ArmyChaosSpaceMarines' component={ArmyChaosSpaceMarinesScreen} options={{tittle: 'Army Chaos Space Marines'}}/>
        <Stack.Screen name='ChaosSpaceMarines' component={ChaosSpaceMarinesScreen} options={{tittle:'Chaos Space Marines'}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
