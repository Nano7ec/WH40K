// screens/ArmyGreyKnights.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions, View } from 'react-native';

const { width } = Dimensions.get('window');

const ArmyGreyKnightsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Botón para navegar a las Reglas del Ejército */}
      <TouchableOpacity onPress={() => navigation.navigate('GreyKnightsRules')}>
        <Image resizeMode="stretch" source={require('../img/GreyKnightsRules.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Botón para navegar a las Habilidades del Ejército */}
      <TouchableOpacity onPress={() => navigation.navigate('GreyKnightsAbilities')}>
        <Image resizeMode="stretch" source={require('../img/GreyKnightsAbilities.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#5A756E', paddingVertical: 0 },
  image: { width: width, height: 150, borderRadius: 20, marginBottom: 5 },
});

export default ArmyGreyKnightsScreen;