// screens/GreyKnightsAbilities.js
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const GreyKnightsAbilities = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Habilidades del Ejército Grey Knights</Text>
      <Text style={styles.text}>
        - **Radiant Strike**: Durante la fase de combate, las armas cuerpo a cuerpo de las unidades Grey Knights ganan la habilidad [DEVASTATING WOUNDS].
        {"\n"}- **Prognosticated Arrival**: Esta habilidad permite que las unidades Grey Knights se desplieguen a 3 pulgadas de las unidades enemigas.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, lineHeight: 22, marginBottom: 10 },
});

export default GreyKnightsAbilities;
