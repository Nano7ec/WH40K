import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Dimensions,View } from 'react-native';

const { width } = Dimensions.get('window');

const MenuChaosDaemonsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <TouchableOpacity onPress={() => navigation.navigate('ArmyChaosDaemons')}>
        <Image resizeMode="stretch" source={require('../img/armychaosdaemons.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Imagen que navega a la pantalla BasicRule */}
      <TouchableOpacity onPress={() => navigation.navigate('MiniChaosDaemons')}>
        <Image resizeMode="stretch" source={require('../img/minichaosdaemons.png')} style={styles.image} />
      </TouchableOpacity>

    </View>   
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#7d8cc3', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 10
  },
});

export default MenuChaosDaemonsScreen;
