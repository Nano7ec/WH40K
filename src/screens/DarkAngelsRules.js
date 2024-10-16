import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

const DarkAngelsRules = () => {

    return (
        <ScrollView style={styles.scroll}>
            <Text style={styles.maintitle}>REGLA DEL DESTACAMENTO</Text>
            <Text style={styles.desc}>
                Los Dark Angels son conocidos por su firme resolución y su capacidad para luchar sin rendirse. Esta regla del Destacamento Unforgiven se aplica si tu facción es Adeptus Astartes.
            </Text>

            <Text style={styles.subtitle}>RESTRICCIONES</Text>
            <Text style={styles.desc}>
                Tu ejército solo puede incluir unidades de Dark Angels, y no puede incluir unidades de Adeptus Astartes de otros capítulos.
            </Text>

            <Text style={styles.title}>ESTRATEGIAS</Text>
            <Text style={styles.desc}>
                ■ **Furia Implacable**: En la fase de Disparo o Combate, una unidad seleccionada gana la habilidad [GOLPES LETALES].
            </Text>
            <Text style={styles.desc}>
                ■ **Armour of Contempt**: Reduce en 1 la Penetración de Armadura de los ataques contra tu unidad.
            </Text>

            <Text style={styles.title}>RESOLUCIÓN FIRME</Text>
            <Text style={styles.desc}>
                Cuando una unidad de Adeptus Astartes de tu ejército está en estado de Batalla Impactada, cambia su característica de Control de Objetivos a 1 en lugar de 0.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    maintitle: { color: '#fff', fontWeight: 'bold', backgroundColor: '#003366', fontSize: 25, padding: 5, borderRadius: 10, marginTop: 5 },
    title: { color: '#fff', fontWeight: 'bold', backgroundColor: '#003366', fontSize: 20, padding: 5, borderRadius: 10, marginTop: 5 },
    subtitle: { color: '#fff', fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#003366', fontSize: 15, padding: 5, borderRadius: 10, marginTop: 5 },
    desc: { fontSize: 15, backgroundColor: '#99ccff', color: '#000', padding: 3, borderRadius: 10, marginBottom: 5 },
    scroll: { flex: 1, backgroundColor: '#e0e0e0', padding: 5 },
});

export default DarkAngelsRules;
