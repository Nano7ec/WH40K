import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; // Importa las pantallas existentes
import BasicRuleScreen from './src/screens/BasicRule';
import ArmyTyranidScreen from './src/screens/ArmyTyranid';
import TyranidsScreen from './src/screens/Tyranids';
import MinTyraScreen from './src/screens/minTyra';
import ArmyImperialAgentsScreen from './src/screens/ArmyImperialAgents';
import ImperialAgent from './src/screens/ImperialAgent';
import MinImperialA from './src/screens/minImperialA';
import ArmyImperialGuardScreen from './src/screens/ArmyImperialGuard';
import ImperialGuard from './src/screens/ImperialGuard';
import MinImperialGuard from './src/screens/minImperialGuard';
import MinTauEmpire from './src/screens/minTauEmpire';
import ArmyTauEmpireScreen from './src/screens/ArmyTauEmpire';
import TauEmpire from './src/screens/TauEmpire';
import MinLeguesVotann from './src/screens/minLeguesVotann';
import ArmyLegueVotannScreen from './src/screens/ArmyLegueVotann';
import LegueVotann from './src/screens/LegueVotann';
import ArmyImperialKnightsScreen from './src/screens/ArmyImperialKnights';
import ImperialKnightScreen from './src/screens/ImperialKnight';
import MinImperialRey from './src/screens/MinImperialRey';
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
        <Stack.Screen name="ArmyImperialKnights" component={ArmyImperialKnightsScreen} options={{ title: 'Army Imperial Knights' }} />
        <Stack.Screen name="ImperialKnight" component={ImperialKnightScreen} options={{ title: 'Imperial Knight' }} />
        <Stack.Screen name= "MinImperialRey" component={MinImperialRey} options={{title: 'Min Imperial Knight' }}/>
        <Stack.Screen name="ArmyImperialAgents" component={ArmyImperialAgentsScreen} options={{title: 'Army Imperial Agents'}}/>
        <Stack.Screen name="ImperialAgent" component={ImperialAgent} options={{title: 'Imperial Agents'}} />
        <Stack.Screen name="MinImperialA" component={MinImperialA} options={{title: 'Min Imperial Agents'}} />
        <Stack.Screen name="ArmyImperialGuard" component={ArmyImperialGuardScreen} options={{title: 'Army Imperial Guard'}}/>
        <Stack.Screen name="ImperialGuard" component={ImperialGuard} options={{title: 'Imperial Guard'}} />
        <Stack.Screen name="MinImperialGuard" component={MinImperialGuard} options={{ title: 'Min Imperial Guard' }} />
        <Stack.Screen name="MinTauEmpire" component={MinTauEmpire} options={{title: 'Min Tau Empire'}} />
        <Stack.Screen name="ArmyTauEmpire" component={ArmyTauEmpireScreen} options={{title: 'Army Tau Empire'}}/>
        <Stack.Screen name="TauEmpire" component={TauEmpire} options={{title: 'Tau Empire'}} />
        <Stack.Screen name="MinLeguesVotann" component={MinLeguesVotann} options={{title: 'Min Legues of Votann'}} />
        <Stack.Screen name="ArmyLegueVotann" component={ArmyLegueVotannScreen} options={{title: 'Army Legue of Votann'}}/>
        <Stack.Screen name="LegueVotann" component={LegueVotann} options={{title: 'Legues of votann'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
