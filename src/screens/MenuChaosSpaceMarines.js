import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Dimensions,View } from 'react-native';

const { width } = Dimensions.get('window');

const MenuChaosSpaceMarinesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <TouchableOpacity onPress={() => navigation.navigate('ArmyChaosSpaceMarines')}>
        <Image resizeMode="stretch" source={require('../img/army_chaos_space_marines.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Imagen que navega a la pantalla BasicRule */}
      <TouchableOpacity onPress={() => navigation.navigate('MiniChaosSpaceMarines')}>
        <Image resizeMode="stretch" source={require('../img/mini_chaos_space_marines.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#75332c', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 10
  },
});

export default MenuChaosSpaceMarinesScreen;
