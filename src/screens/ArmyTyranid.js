// screens/ArmyTyranidScreen.js
import React from 'react';
import {Pressable, Image, StyleSheet,Dimensions,View } from 'react-native';

const { width } = Dimensions.get('window');

const ArmyTyranidScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <Pressable onPress={() => navigation.navigate('Tyranids')}>
        <Image resizeMode="stretch" source={require('../img/Tyranids.png')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla ArmyTyranid */}
      <Pressable onPress={() => navigation.navigate('minTyra')}>
        <Image resizeMode="stretch" source={require('../img/MinT.png')} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#5A756E', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 5
  },
});

export default ArmyTyranidScreen;
