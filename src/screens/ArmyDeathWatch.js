import React from 'react';
import { Image, StyleSheet, Dimensions, View, Pressable } from 'react-native';

const { width } = Dimensions.get('window');

const ArmyDeathWatch = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('DeathWatchRules')}>
        <Image resizeMode="stretch" source={require('../img/DeathWatchRules.png')} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#003366', paddingVertical: 0 },
  image: { width: width, height: 150, borderRadius: 20, marginBottom: 5 },
});

export default ArmyDeathWatch;
