import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; // Importa las pantallas
import BasicRuleScreen from './src/screens/BasicRule';
import ArmyTyranidScreen from './src/screens/ArmyTyranid';
import ArmyGreyKnightsScreen from './src/screens/ArmyGreyKnights';
// Importar las nuevas pantallas
import TyranidsScreen from './src/screens/Tyranids';
import MinTyraScreen from './src/screens/minTyra';
import GreyKnightsRules from './src/screens/GreyKnigthsRules';
import GreyKnightsAbilities from './src/screens/GreyKnigthsAbilities';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WH40K" >
        <Stack.Screen name="WH40K" component={HomeScreen} options={{ title: 'WH40K' }} />
        <Stack.Screen name="BasicRule" component={BasicRuleScreen} options={{ title: 'Basic Rule' }} />
        <Stack.Screen name="ArmyTyranid" component={ArmyTyranidScreen} options={{ title: 'Army Tyranid' }} />
        <Stack.Screen name="ArmyGreyKnights" component={ArmyGreyKnightsScreen} options={{ title: 'Grey Knights' }} />
         {/* Definir las nuevas pantallas */}
         <Stack.Screen name="Tyranids" component={TyranidsScreen} options={{ title: 'Tyranids' }} />
        <Stack.Screen name="minTyra" component={MinTyraScreen} options={{ title: 'Min Tyra' }} />
        <Stack.Screen name="GreyKnightsRules" component={GreyKnightsRules} options={{ title: 'Reglas Grey Knights' }} />
        <Stack.Screen name="GreyKnightsAbilities" component={GreyKnightsAbilities} options={{ title: 'Habilidades Grey Knights' }} />

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
