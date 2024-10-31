import * as React from 'react';
import { Text, ScrollView, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

const MiniDarkAngels = () => {
  return (
    <ScrollView>
      <>
        <Text style={styles.border}>Gramática utilizada</Text>
        {/* Tabla de términos clave */}
        <View style={styles.tableRow}>
          <View style={styles.tableCelltop}>
            <Text style={styles.headerText}>Palabra</Text>
          </View>
          <View style={styles.tableCelltop}>
            <Text style={styles.headerText}>Acrónimos</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}><Text style={styles.wapo}>Movimiento</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Dureza</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Salvación</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Heridas</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Liderazgo</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Potencia Nominal</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Arma a Distancia</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Arma Cuerpo a Cuerpo</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Rango</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Habilidad de Disparo</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Fuerza</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Penetración de Armadura</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Daño</Text></Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>M</Text>
            <Text style={styles.cellText}>T</Text>
            <Text style={styles.cellText}>SV</Text>
            <Text style={styles.cellText}>W</Text>
            <Text style={styles.cellText}>LD</Text>
            <Text style={styles.cellText}>OC</Text>
            <Text style={styles.cellText}>AD</Text>
            <Text style={styles.cellText}>ACC</Text>
            <Text style={styles.cellText}>R</Text>
            <Text style={styles.cellText}>BS</Text>
            <Text style={styles.cellText}>S</Text>
            <Text style={styles.cellText}>AP</Text>
            <Text style={styles.cellText}>D</Text>
          </View>
        </View>

        {/* Continuar llenando la tabla de acrónimos según sea necesario */}
        
        {/** Primera unidad: Azrael */}
        <>
          <Image resizeMode="stretch" style={styles.image} source={require('../img/AzraelDarkAngels.png')} />
          <Text style={styles.border}>Habilidades</Text>
          <Text style={styles.descrip}>
            <Text style={styles.wapo}>Core:</Text>Lider{"\n"}
            <Text style={styles.wapo}>Facción:</Text> Juramento del Momento (Oath of Moment){"\n"}
            <Text style={styles.wapo}>Gran Maestro de la Deathwing:</Text> Mientras lidera una unidad, si un modelo de esa unidad obtiene un impacto crítico, ese ataque tiene la habilidad [PRECISIÓN].{"\n"}
            <Text style={styles.wapo}>Golpes de Retribución:</Text> Cada vez que este modelo recibe un ataque cuerpo a cuerpo, lanza un dado de 6 caras (máx. seis por unidad atacante). Por cada 2+, la unidad atacante sufre 1 herida mortal.{"\n"}
            </Text>
          {/* Cabecera de la tabla de armas a distancia */}
          <View style={styles.tableRow}>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>AD</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>R</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>A</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>BS</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>S</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>AP</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>D</Text>
            </View>
          </View>

          {/* Filas de la tabla de armas a distancia*/}
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Lion’s Wrath</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>24"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>8</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </View>

            {/* Cabecera de la tabla de armas cuerpo a cuerpo*/}
          <View style={styles.tableRow}>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>ACC</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>R</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>A</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>BS</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>S</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>AP</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>D</Text>
            </View>
          </View>
          
          {/* Filas de la tabla de armas cuerpo a cuerpo*/}
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>The Sword of Silence [PRECISION]</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>MELEE</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </View>

          {/* Continuar con más armas y habilidades si es necesario */}
        </>

        {/* Segunda unidad de ejemplo: Ravenwing Bikers */}
        <>
          <Image resizeMode="stretch" style={styles.image} source={require('../img/RavenwingBikers.png')} />
          <Text style={styles.border}>Habilidades</Text>
          <Text style={styles.descrip}>
            <Text style={styles.wapo}>Core:</Text> Rapid Deployment{"\n"}
            <Text style={styles.wapo}>Facción:</Text> Adeptus Astartes{"\n"}
            <Text style={styles.wapo}>Escudo de Velocidad:</Text> Esta unidad gana un bono de +1 a la Salvación mientras se mueve a toda velocidad.
          </Text>

          {/* Cabecera de la tabla de armas */}
          <View style={styles.tableRow}>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>AD</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>R</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>A</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>BS</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>S</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>AP</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>D</Text>
            </View>
          </View>

          {/* Filas de la tabla de armas */}
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Twin Boltgun</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>24"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </View>
        </>
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  border: { color: '#fff', fontWeight: 'bold', backgroundColor: '#004d00', fontSize: 20, padding: 5, marginTop: 6, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  descrip: { fontSize: 18, backgroundColor: '#3b3b3b', color: '#dcdcdc', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
  image: { width: width, height: 100, borderRadius: 20, marginTop: 15 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#004d00' },
  tableCelltop: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5, backgroundColor: '#004d00', marginTop: 5, fontSize: 10 },
  tableCell: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5, backgroundColor: '#3b3b3b', fontSize: 10 },
  headerText: { color: '#fff', fontWeight: 'bold', fontSize: 20 },
  cellText: { fontSize: 14, color: '#dcdcdc' },
  wapo: { color: '#004d00', fontWeight: 'bold' },
  MinDes: { fontSize: 18, color: '#dcdcdc', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }
});

export default MiniDarkAngels;
