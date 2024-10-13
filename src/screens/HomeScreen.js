// screens/HomeScreen.js
import React from 'react';
import {Pressable, Image, StyleSheet,Dimensions,ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <Pressable onPress={() => navigation.navigate('BasicRule')}>
        <Image resizeMode="stretch" source={require('../img/RuleBasic.png')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla ArmyTyranid */}
      <Pressable onPress={() => navigation.navigate('ArmyTyranid')}>
        <Image resizeMode="stretch" source={require('../img/ArmyTyrand.png')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla ArmyAdepta */}
      <Pressable onPress={() => navigation.navigate('ArmyAdepta')}>
        <Image resizeMode="stretch" source={require('../img/ArmyAdepta.png')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla ArmyCustodes */}
      <Pressable onPress={() => navigation.navigate('ArmyCustodes')}>
        <Image resizeMode="stretch" source={require('../img/ArmyCustodes.png')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla ArmyMechanicus */}
      <Pressable onPress={() => navigation.navigate('ArmyMechanicus')}>
        <Image resizeMode="stretch" source={require('../img/ArmyMechanicus.png')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla ArmyAeldari */}
      <Pressable onPress={() => navigation.navigate('ArmyAeldari')}>
        <Image resizeMode="stretch" source={require('../img/ArmyAeldari.png')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla ArmyBlacktemplars */}
      <Pressable onPress={() => navigation.navigate('ArmyBlacktemplars')}>
        <Image resizeMode="stretch" source={require('../img/ArmyBlacktemplars.png')} style={styles.image} />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#5A756E', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 5
  },
});

export default HomeScreen;
