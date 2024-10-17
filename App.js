import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; // Importa las pantallas
import BasicRuleScreen from './src/screens/BasicRule';
import ArmyTyranidScreen from './src/screens/ArmyTyranid';
// Importar las nuevas pantallas
import TyranidsScreen from './src/screens/Tyranids';
import MinTyraScreen from './src/screens/minTyra';
import ArmyDarkAngelsScreen from './src/screens/ArmyDarkAngels';
import DarkAngelsRulesScreen from './src/screens/DarkAngelsRules'; 
import ArmyDeathGuard from './src/screens/ArmyDeathGuard';
import DeathGuardRules from './src/screens/DeathGuardRules';
import ArmyDeathWatch from './src/screens/ArmyDeathWatch';
import DeathwatchRules from './src/screens/DeathWatchRules';
import DeathWatchRules from './src/screens/DeathWatchRules';
import ArmyDrukhari from './src/screens/ArmyDrukhari';
import DrukhariRules from './src/screens/DrukhariRules';
import ArmyGenestealerCults from './src/screens/ArmyGenestealerCults';
import GenestealerCultsRules from './src/screens/GenestealerCultsRules';

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
        <Stack.Screen name="ArmyDarkAngels" component={ArmyDarkAngelsScreen} options={{ title: 'Army Dark Angels' }} />
        <Stack.Screen name="DarkAngelsRules" component={DarkAngelsRulesScreen} options={{ title: 'Dark Angels Rules' }} />
        <Stack.Screen name="ArmyDeathGuard" component={ArmyDeathGuard} options={{ title: 'Army Death Guard' }} />
        <Stack.Screen name="DeathGuardRules" component={DeathGuardRules} options={{ title: 'Army Death Guard'}} />
        <Stack.Screen name="ArmyDeathWatch" component={ArmyDeathWatch} options={{title: 'Army Death Watch'}} />
        <Stack.Screen name="DeathWatchRules" component={DeathWatchRules} options={{title: 'Army Death Watch'}} />
        <Stack.Screen name="ArmyDrukhari" component={ArmyDrukhari} options={{title: 'Army Drukhari'}} />
        <Stack.Screen name="DrukhariRules" component={DrukhariRules} options={{title: 'Army Drukhari'}}/>
        <Stack.Screen name="ArmyGenestealerCults" component={ArmyGenestealerCults} options={{title: 'Army Genestealer Cults'}} />
        <Stack.Screen name="GenestealerCultsRules" component={GenestealerCultsRules} options={{title: 'Army Genestealer Cults'}} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
