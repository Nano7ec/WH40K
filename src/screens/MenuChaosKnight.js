import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Dimensions,View } from 'react-native';

const { width } = Dimensions.get('window');

const MenuChaosKnightScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <TouchableOpacity onPress={() => navigation.navigate('ArmyChaosKnight')}>
        <Image resizeMode="stretch" source={require('../img/armychaosknight.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Imagen que navega a la pantalla BasicRule */}
      <TouchableOpacity onPress={() => navigation.navigate('MiniChaosKnight')}>
        <Image resizeMode="stretch" source={require('../img/minichaosknight.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#e0d2c4', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 10
  },
});

export default MenuChaosKnightScreen;
