// screens/ArmyTyranidScreen.js
import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Dimensions,View } from 'react-native';

const { width } = Dimensions.get('window');

const ArmyChaosDaemonsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <TouchableOpacity onPress={() => navigation.navigate('ChaosDaemons')}>
        <Image resizeMode="stretch" source={require('../img/armychaosdaemons.jpg')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#7d8cc3', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 10
  },
});

export default ArmyChaosDaemonsScreen;
