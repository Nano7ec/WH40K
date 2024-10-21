// screens/ArmyTyranidScreen.js
import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Dimensions,View } from 'react-native';

const { width } = Dimensions.get('window');

const MenuBloodsAngelsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla Army */}
      <TouchableOpacity onPress={() => navigation.navigate('ArmyBloodAngels')}>
        <Image resizeMode="stretch" source={require('../img/armybloodangels.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Imagen que navega a la pantalla Miniaturas */}
      <TouchableOpacity onPress={() => navigation.navigate('MiniBloodAngels')}>
        <Image resizeMode="stretch" source={require('../img/minibloodangels.png')} style={styles.image} />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ff9f9f', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 5
  },
});

export default MenuBloodsAngelsScreen;
