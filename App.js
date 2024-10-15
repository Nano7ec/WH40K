import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; // Importa las pantallas
import BasicRuleScreen from './src/screens/BasicRule';
import ArmyTyranidScreen from './src/screens/ArmyTyranid';
// Importar las nuevas pantallas
import TyranidsScreen from './src/screens/Tyranids';
import MinTyraScreen from './src/screens/minTyra';
import AdeptaRulesScreen from './src/screens/AdeptaRules';
import ArmyAdeptaScreen from './src/screens/ArmyAdepta';
import ArmyCustodesScreen from './src/screens/ArmyCustodes';
import CustodesRulesScreen from './src/screens/CustodesRules';
import ArmyMechanicusScreen from './src/screens/ArmyMechanicus';
import MechanicusRulesScreen from './src/screens/MechanicusRules';
import AeldariScreen from './src/screens/ArmyAeldari';
import AeldariRulesScreen from './src/screens/AeldariRules';
import BlacktemplarsRulesScreen from './src/screens/BlacktemplarsRules';
import ArmyBlacktemplarsScreen from './src/screens/ArmyBlacktemplars';
import ArmyWorldEatersScreen from './src/screens/ArmyWorldEaters';
import WorldEatersRulesScreen from './src/screens/WorldEatersRules';
import ArmyThousandSonsScreen from './src/screens/ArmyThousandSons';
import ThousandSonsRulesScreen from './src/screens/ThousandSonsRules';

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
        <Stack.Screen name='ArmyAdepta' component={ArmyAdeptaScreen} options ={{title: 'Adepta Sororitas'}}/>
        <Stack.Screen name='AdeptaRules' component={AdeptaRulesScreen} options ={{title: 'Adepta Sororitas'}}/>
        <Stack.Screen name='ArmyCustodes' component={ArmyCustodesScreen} options ={{title: 'Adeptus Custodes - Shield Host'}}/>
        <Stack.Screen name='CustodesRules' component={CustodesRulesScreen} options ={{title: 'Adeptus Custodes - Shield Host'}}/>
        <Stack.Screen name='ArmyMechanicus' component={ArmyMechanicusScreen} options={{title: 'Adeptus Mechanicus'}}/>
        <Stack.Screen name='MechanicusRules' component={MechanicusRulesScreen} options={{title: 'Adeptus Mechanicus'}}/>
        <Stack.Screen name='ArmyAeldari' component={AeldariScreen} options={{title: 'Aeldari'}}/>
        <Stack.Screen name='AeldariRules' component={AeldariRulesScreen} options={{title: 'Aeldari'}}/>
        <Stack.Screen name='ArmyBlacktemplars' component={ArmyBlacktemplarsScreen} options={{title: 'Blacktemplars - Righteous Crusaders'}}/>
        <Stack.Screen name='BlacktemplarsRules' component={BlacktemplarsRulesScreen} options={{title: 'Blacktemplars - Righteous Crusaders'}}/>
        <Stack.Screen name='ArmyWorldEaters' component={ArmyWorldEatersScreen} options={{title: 'World Eaters'}}/>
        <Stack.Screen name='WorldEatersRules' component={WorldEatersRulesScreen} options={{title: 'World Eaters'}}/>
        <Stack.Screen name='ArmyThousandSons' component={ArmyThousandSonsScreen} options={{title: 'World Eaters'}}/>
        <Stack.Screen name='ThousandSonsRules' component={ThousandSonsRulesScreen} options={{title: 'World Eaters'}}/>
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
