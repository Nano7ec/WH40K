import * as React from 'react';
import { Text, ScrollView, Image, Dimensions, StyleSheet, View } from 'react-native';

const MiniChaosDaemonsScreen = () => {
    return(
        <ScrollView style={{ flex: 1, backgroundColor: '#ff9f9f', padding: 7}}>
            {/**INICIA LA TABLA DE LA GRAMATICA */}
            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomRightRadius:10, borderBottomLeftRadius:10 }}>Gramatica usada
            </Text>
        {/* Cabecera de la tabla */}
        <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}> Palabra</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}> Acronimo </Text>
                </View>
                </>
            </View>
            {/* Filas de la tabla */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Movimiento</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>M</Text>
                </View>
            </>
            </View>
            {/**---------------------------------------------------------------------------------------*/}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Dureza</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>T</Text>
                </View>
            </>
            </View>
            {/**---------------------------------------------------------------------------------------*/}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Salvación</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>SV</Text>
                </View>
            </>
            </View>
            {/**---------------------------------------------------------------------------------------*/}
                        <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Heridas</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>W</Text>
                </View>
            </>
            </View>
            {/**---------------------------------------------------------------------------------------*/}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Liderazgo</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Ld</Text>
                </View>
            </>
            </View>
            {/**---------------------------------------------------------------------------------------*/}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Potencial Nominal</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Oc</Text>
                </View>
            </>
            </View>
            {/**---------------------------------------------------------------------------------------*/}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Distancia del Arma</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>AD</Text>
                </View>
            </>
            </View>
            {/**---------------------------------------------------------------------------------------*/}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Armas Cuerpo a Cuerpo (Mele)</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>ACC</Text>
                </View>
            </>
            </View>
            {/**---------------------------------------------------------------------------------------*/}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Rango</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>R</Text>
                </View>
            </>
            </View>
            {/**---------------------------------------------------------------------------------------*/}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Exito de Conexion   </Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>BS</Text>
                </View>
            </>
            </View>
            {/**---------------------------------------------------------------------------------------*/}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Fuerza</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>S</Text>
                </View>
            </>
            </View>
            {/**---------------------------------------------------------------------------------------*/}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Penetracion de Armadura</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>AP</Text>
                </View>
            </>
            </View>
            {/**---------------------------------------------------------------------------------------*/}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Daño</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>D</Text>
                </View>
            </>
            </View>
            {/** FINALIZACION DE LA TABLA DE LA GRAMATICA*/}           
            
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width * 1,  // Ajusta el ancho al 90% de la pantalla
        height: 80,  // Deja que la altura se ajuste automáticamente
        aspectRatio: 0.5,   // Mantiene las proporciones
        marginTop: 15,
    },
});

export default MiniChaosDaemonsScreen;