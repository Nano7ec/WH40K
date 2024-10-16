import React from 'react';
import { Image, StyleSheet, Dimensions, View, Pressable } from 'react-native';

const { width } = Dimensions.get('window');

const ArmyDarkAngels = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('DarkAngelsRules')}>
        <Image resizeMode="stretch" source={require('../img/DarkAngelsRules.png')} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#003366', paddingVertical: 0 },
  image: { width: width, height: 150, borderRadius: 20, marginBottom: 5 },
});

export default ArmyDarkAngels;