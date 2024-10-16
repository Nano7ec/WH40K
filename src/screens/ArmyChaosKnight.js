import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Dimensions,View } from 'react-native';

const { width } = Dimensions.get('window');

const ArmyChaosKnightScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <TouchableOpacity onPress={() => navigation.navigate('ChaosKnight')}>
        <Image resizeMode="stretch" source={require('../img/armychaosknight.jpg')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#e0d2c4', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 10
  },
});

export default ArmyChaosKnightScreen;
