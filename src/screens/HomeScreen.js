// screens/HomeScreen.js
import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Dimensions,ScrollView, Pressable } from 'react-native';

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

      {/* Imagen que navega a la pantalla ArmyBloodAngels */}
      <Pressable onPress={() => navigation.navigate('ArmyBloodAngels')}>
        <Image resizeMode="stretch" source={require('../img/bloodangels.jpg')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla ArmyChaosDaemons*/}
      <Pressable onPress={() => navigation.navigate('ArmyChaosDaemons')}>
        <Image resizeMode="stretch" source={require('../img/armychaosdaemons.jpg')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla ArmyChaosKnight*/}
      <Pressable onPress={() => navigation.navigate('ArmyChaosKnight')}>
        <Image resizeMode="stretch" source={require('../img/armychaosknight.jpg')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla ArmyChaosSpaceMarines*/}
      <Pressable onPress={() => navigation.navigate('ArmyChaosSpaceMarines')}>
        <Image resizeMode="stretch" source={require('../img/army_chaos_space_marines.jpg')} style={styles.image} />
      </Pressable>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#5A756E', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 10
  },
});

export default HomeScreen;
