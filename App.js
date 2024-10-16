import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; // Importa las pantallas
import BasicRuleScreen from './src/screens/BasicRule';
import ArmyTyranidScreen from './src/screens/ArmyTyranid';
// Importar las nuevas pantallas
import TyranidsScreen from './src/screens/Tyranids';
import MinTyraScreen from './src/screens/minTyra';
// importar los necrones
import ArmyNecronsScreen  from './src/screens/ArmyNecrons';
import NecronsScreen from './src/screens/Necrons';
import MinNecronsScreen from './src/screens/minNecrons';


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
        {/**Necrones */}
        <Stack.Screen name="ArmyNecrons" component={ArmyNecronsScreen} options={{ title: 'Army Necrons' }} />
        <Stack.Screen name="Necrons" component={NecronsScreen} options={{ title: 'Necrons' }} />
        <Stack.Screen name="minNecrons" component={MinNecronsScreen} options={{ title: 'Min Necrons' }} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
