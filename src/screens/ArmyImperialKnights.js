// screens/ArmyTyranidScreen.js
{/*Pantalla 2*/}
import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Dimensions,View } from 'react-native';

const { width } = Dimensions.get('window');

const ArmyImperialKnightsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <TouchableOpacity onPress={() => navigation.navigate('ImperialKnight')}>
        <Image resizeMode="stretch" source={require('../img/TitleImperialKArmyRules.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Imagen que navega a la pantalla ArmyTyranid */}
      <TouchableOpacity onPress={() => navigation.navigate('minImperialK')}>
        <Image resizeMode="stretch" source={require('../img/TitleMinImperialK.jpeg')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#5A756E', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 5
  },
});

export default ArmyImperialKnightsScreen;
