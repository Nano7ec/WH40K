// screens/ArmyTyranidScreen.js
import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Dimensions,View } from 'react-native';

const { width } = Dimensions.get('window');

const ArmyBloodsAngelsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <TouchableOpacity onPress={() => navigation.navigate('BloodAngels')}>
        <Image resizeMode="stretch" source={require('../img/armybloodangels.jpeg')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#5A756E', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 5
  },
});

export default ArmyBloodsAngelsScreen;
