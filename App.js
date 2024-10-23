import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; // Importa las pantallas existentes
import BasicRuleScreen from './src/screens/BasicRule';
import ArmyTyranidScreen from './src/screens/ArmyTyranid';
import TyranidsScreen from './src/screens/Tyranids';
import MinTyraScreen from './src/screens/minTyra';
import	ArmyGreyKnights from './src/screens/ArmyGreyKnights';
import GreyKnight from './src/screens/GreyKnight';
import minGreyKScreen from './src/screens/minGreyK';
import GreyKnight from './src/screens/GreyKnight';
import minGreyKScreen from './src/screens/minGreyK';
import ArmyImperialAgentsScreen from './src/screens/ArmyImperialAgents';
import ImperialAgent from './src/screens/ImperialAgent';
import MinImperialA from './src/screens/minImperialA';
import ArmyImperialGuardScreen from './src/screens/ArmyImperialGuard';
import ImperialGuard from './src/screens/ImperialGuard';
import MinImperialGuard from './src/screens/minImperialGuard';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WH40K">
        <Stack.Screen name="WH40K" component={HomeScreen} options={{ title: 'WH40K' }} />
        <Stack.Screen name="BasicRule" component={BasicRuleScreen} options={{ title: 'Basic Rule' }} />
        <Stack.Screen name="ArmyTyranid" component={ArmyTyranidScreen} options={{ title: 'Army Tyranid' }} />
        <Stack.Screen name="Tyranids" component={TyranidsScreen} options={{ title: 'Tyranids' }} />
        <Stack.Screen name="minTyra" component={MinTyraScreen} options={{ title: 'Min Tyra' }} />

        {/* Definir las nuevas pantallas para Grey Knights */}
        <Stack.Screen name="ArmyGreyKnights" component={ArmyGreyKnights} options={{ title: 'Army Grey Knights' }} />
        <Stack.Screen name="GreyKnight" component={GreyKnight} options={{ title: 'Grey Knight' }} />
        <Stack.Screen name="minGreyK" component={minGreyKScreen} options={{ title: 'Min Grey Knights' }} />
        <Stack.Screen name="ArmyImperialAgents" component={ArmyImperialAgentsScreen} options={{title: 'Army Imperial Agents'}}/>
        <Stack.Screen name="ImperialAgent" component={ImperialAgent} options={{title: 'Imperial Agent'}} />
        <Stack.Screen name="MinImperialA" component={MinImperialA} options={{title: 'Min ImperialA'}} />
        <Stack.Screen name="ArmyImperialAgents" component={ArmyImperialGuardScreen} options={{title: 'Army Imperial Guard'}}/>
        <Stack.Screen name="ImperialAgent" component={ImperialGuard} options={{title: 'Imperial Guard'}} />
        <Stack.Screen name="MinImperialA" component={MinImperialGuard} options={{title: 'Min ImperialGuard'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
