import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Dimensions,View } from 'react-native';

const { width } = Dimensions.get('window');

const ArmyChaosSpaceMarinesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <TouchableOpacity onPress={() => navigation.navigate('ChaosSpaceMarines')}>
        <Image resizeMode="stretch" source={require('../img/army_chaos_space_marines.jpg')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#75332c', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 10
  },
});

export default ArmyChaosSpaceMarinesScreen;
