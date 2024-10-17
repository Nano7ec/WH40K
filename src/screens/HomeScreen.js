// screens/HomeScreen.js
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Dimensions,ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <TouchableOpacity onPress={() => navigation.navigate('BasicRule')}>
        <Image resizeMode="stretch" source={require('../img/RuleBasic.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Imagen que navega a la pantalla ArmyTyranid */}
      <TouchableOpacity onPress={() => navigation.navigate('ArmyTyranid')}>
        <Image resizeMode="stretch" source={require('../img/ArmyTyrand.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Imagen que navega a la pantalla ArmyDarkAngels */}
      <TouchableOpacity onPress={() => navigation.navigate('ArmyDarkAngels')}>
        <Image resizeMode="stretch" source={require('../img/ArmyDarkAngels.png')} style={styles.image} />
      </TouchableOpacity>
      
      {/* Imagen que navega a la pantalla ArmyDeathGuard */}
      <TouchableOpacity onPress={() => navigation.navigate('ArmyDeathGuard')}>
        <Image resizeMode='stretch' source={require('../img/ArmyDeathGuard.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Imagen que navega a la pantalla ArmyDeathWatch */}
      <TouchableOpacity onPress={() => navigation.navigate('ArmyDeathWatch')}>
        <Image resizeMode='stretch' source={require('../img/ArmyDeathWatch.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Imagen que navega a la pantalla ArmyDrukhari */}
      <TouchableOpacity onPress={() => navigation.navigate('ArmyDrukhari')}>
        <Image resizeMode='stretch' source={require('../img/ArmyDrukhari.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Imagen que navega a la pantalla ArmyGenestealerCults */}
      <TouchableOpacity onPress={() => navigation.navigate('ArmyGenestealerCults')}>
        <Image resizeMode='stretch' source={require('../img/ArmyGenestealerCults.png')} style={styles.image} />
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#5A756E', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 5
  },
});

export default HomeScreen;
