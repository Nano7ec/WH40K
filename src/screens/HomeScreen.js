import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Botón para navegar a las Reglas Generales */}
      <TouchableOpacity onPress={() => navigation.navigate('BasicRule')}>
        <Image resizeMode="stretch" source={require('../img/RuleBasic.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Botón para navegar a Tyranids */}
      <TouchableOpacity onPress={() => navigation.navigate('ArmyTyranid')}>
        <Image resizeMode="stretch" source={require('../img/ArmyTyrand.png')} style={styles.image} />
      </TouchableOpacity>
      {/*Pantalla 1*/}
      {/* Botón para navegar a Grey Knights */}
      <TouchableOpacity onPress={() => navigation.navigate('ArmyGreyKnights')}>
      <Image resizeMode="stretch" source={require('../img/GreyKnightss.png')} style={styles.image} />
    </TouchableOpacity>
    {/* Botón para navegar a Grey Knights */}
    <TouchableOpacity onPress={() => navigation.navigate('ArmyImperialAgents')}>
      <Image resizeMode="stretch" source={require('../img/GreyKnightss.png')} style={styles.image} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('ArmyImperialGuard')}>
      <Image resizeMode="stretch" source={require('../img/GreyKnightss.png')} style={styles.image} />
    </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#5A756E', paddingVertical: 0 },
  image: { width: width, height: 150, borderRadius: 20, marginBottom: 5 },
  text: { fontSize: 24, color: 'white', textAlign: 'center', padding: 20 },  // Estilo de texto
});

export default HomeScreen;
