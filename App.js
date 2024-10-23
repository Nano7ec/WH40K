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
import MenuChaosDaemonsScreen from './src/screens/MenuChaosDaemons';
import ArmyChaosDaemonsScreen from './src/screens/ArmyChaosDaemons';
import MiniChaosDaemonsScreen from './src/screens/MiniChaosDaemons';

//Importar las pabtallas de Chaos Knight
import MenuChaosKnightScreen from './src/screens/MenuChaosKnight';
import ArmyChaosKnightScreen from './src/screens/ArmyChaosKnight';
import MiniChaosKnightScreen from './src/screens/MiniChaosKnight';

//Importar las pantallas de Chaos Space Marines
import MenuChaosSpaceMarinesScreen from './src/screens/MenuChaosSpaceMarines';
import ArmyChaosSpaceMarinesScreen from './src/screens/ArmyChaosSpaceMarines';
import MiniChaosSpaceMarinesScreen from './src/screens/MiniChaosSpaceMarines';

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
       <Stack.Screen name='MenuBloodAngels' component={MenuBloodsAngelsScreen} options={{title: 'Menu Blood Angels'}}/>
       <Stack.Screen name='ArmyBloodAngels' component={ArmyBloodAngelsScreen} options={{title: 'Reglas del juego Angeles Sangrientos'}}/>
       <Stack.Screen name='MiniBloodAngels' component={MiniBloodAngelsScreen} options={{title: 'Miniaturas Angeles Sangrientos'}}/>

        {/** Definir las pantallas de Chaos Daemons */}
        <Stack.Screen name='MenuChaosDaemons' component={MenuChaosDaemonsScreen} options={{title: 'Menu Demonios del Caos'}}/>
        <Stack.Screen name='ArmyChaosDaemons' component={ArmyChaosDaemonsScreen} options={{title: 'Reglas del juego Demonios del Caos'}}/>
        <Stack.Screen name='MiniChaosDaemons' component={MiniChaosDaemonsScreen} options={{title: 'Miniaturas Demonios del Caos'}}/>
        
        {/** Definir las pantallas de Chaos Knight */}
        <Stack.Screen name='MenuChaosKnight' component={MenuChaosKnightScreen} options={{title:'Menu Caballeros del Caos'}}/>
        <Stack.Screen name='ArmyChaosKnight' component={ArmyChaosKnightScreen} options={{title:'Reglas del juego Caballeros del Caos'}}/>
        <Stack.Screen name='MiniChaosKnight' component={MiniChaosKnightScreen} options={{title:'Miniaturas Caballeros del Caos'}}/>
        
        {/** Definir las pantallas de Chaos Space Marines */}
        <Stack.Screen name='MenuChaosSpaceMarines' component={MenuChaosSpaceMarinesScreen} options={{title: 'Menu Marinos Espaciales del Caos'}}/>
        <Stack.Screen name='ArmyChaosSpaceMarines' component={ArmyChaosSpaceMarinesScreen} options={{title:'Reglas del juego Marinos Espaciales del Caos'}}/>
        <Stack.Screen name='MiniChaosSpaceMarines' component={MiniChaosSpaceMarinesScreen} options={{title:'Miniaturas Marinos Espaciales del Caos'}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
