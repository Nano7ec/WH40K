import * as React from 'react';
import { Text, ScrollView, Image, Dimensions, StyleSheet, View } from 'react-native';

const MiniBloodAngelsScreen = () => {
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
            
            {/* ASTORATH */}
            <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Image 
                    source={require('../img/blood_angels/astorath.png')}
                    style={styles.image}
                    resizeMode="stretch"  // Se ajusta sin recortar la imagen
                />
            </View>
{/**---------------------------ARMAS A DISTANCIA---------------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}> ARMAS A DISTANCIA</Text>
                </View>
                </>
            </View>
            {/**CUERPO DE LA TABLA */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Pistola bólter [PISTOLA]</Text>
                </View>
            </>
            </View>
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Alcance</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>A</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>BS</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>S</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>AP</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>D</Text>
                </View>
            </>
            </View>
            {/**------------------------------------------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>12"</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>1</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>2+</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>4</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>0</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>1</Text>
                </View>
            </>
            </View>
{/**---------------------------ARMAS CUERPO A CUERPO----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>ARMAS CUERPO A CUERPO</Text>
                </View>
                </>
            </View>
            {/**CUERPO DE LA TABLA */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>El hacha del ejecutor [HERIDAS DEVASTADORAS]</Text>
                </View>
            </>
            </View>
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Alcance</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>A</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>WS</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>S</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>AP</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>D</Text>
                </View>
            </>
            </View>
{/**------------------------------------------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Cuerpo a cuerpo</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>4</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>2+</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>6</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>-3</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>2</Text>
                </View>
            </>
            </View>
{/**---------------------------HABILIDADES----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>HABILIDADES</Text>
                </View>
                </>
            </View>
 {/**CUERPO DE LA TABLA */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Nucleo:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Despliegue rápido, Líder</Text>
                </View>
            </>
            </View>
{/**------------------------------------------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>FACCIONES:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Juramento del Momento</Text>
                </View>
            </>
            </View>
            {/**------------------------------------------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Redentor de los Perdidos:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Mientras este modelo lidere una unidad, cada vez que un modelo de esa unidad sea destruido por un ataque cuerpo a cuerpo, si ese modelo no ha luchado en esta fase, tira un D6. Con un 4+, no lo retires del juego; el modelo destruido puede luchar después de que la unidad atacante haya terminado sus ataques, y luego es retirado.</Text>
                </View>
            </>
            </View>
            {/**------------------------------------------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Masa de Perdición:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Una vez por batalla, cuando la unidad de este modelo realice un movimiento de carga, este modelo puede usar esta habilidad. Cuando lo haga, hasta el final del turno, las armas cuerpo a cuerpo equipadas por los modelos de esa unidad tienen la habilidad [HERIDAS DEVASTADORAS].</Text>
                </View>
            </>
            </View>
{/**---------------------------EXTRA----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>SALVACIÓN INVULNERABLE: 4+</Text>
                </View>
                </>
            </View>
{/**ASTORATH */}
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

export default MiniBloodAngelsScreen;