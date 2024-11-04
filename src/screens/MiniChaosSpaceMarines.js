import * as React from 'react';
import { Text, ScrollView, Image, Dimensions, StyleSheet, View } from 'react-native';

const MiniChaosSpaceMarinesScreen = () => {
    return(
        <ScrollView style={{ flex: 1, backgroundColor: '#ff9f9f', padding: 7}}>
            {/**INICIA LA TABLA DE LA GRAMATICA */}
    <Text style={{textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderRadius: 10 }}>
        Gramatica Usada
    </Text>
{/* Cabecera de la tabla */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5, backgroundColor: '#ff0000', marginTop: 5}}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>Concepto</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5, backgroundColor: '#ff0000', marginTop: 5}}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>Abreviatura</Text>
        </View>
    </>
</View>

{/* Filas de la tabla */}
{/* Movimiento */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Movimiento</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>M</Text>
        </View>
    </>
</View>

{/* Dureza */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Dureza</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>T</Text>
        </View>
    </>
</View>

{/* Salvación */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Salvación</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>SV</Text>
        </View>
    </>
</View>

{/* Heridas */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Heridas</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>W</Text>
        </View>
    </>
</View>

{/* Liderazgo */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Liderazgo</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Ld</Text>
        </View>
    </>
</View>

{/* Objetivo de Control */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Objetivo de Control</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>OC</Text>
        </View>
    </>
</View>

{/* Habilidad de Arma */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Habilidad de Arma</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>WS</Text>
        </View>
    </>
</View>

{/* Habilidad de Disparo */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Habilidad de Disparo</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>BS</Text>
        </View>
    </>
</View>

{/* Fuerza */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Fuerza</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>S</Text>
        </View>
    </>
</View>

{/* Penetración de Armadura */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Penetración de Armadura</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>AP</Text>
        </View>
    </>
</View>

{/* Daño */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Daño</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>D</Text>
        </View>
    </>
</View>
{/** FINALIZACION DE LA TABLA DE LA GRAMATICA*/}
        
            

{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*ASTORATH* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*  */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Image 
                    source={require('../img/blood_angels/astorath.png')}
                    style={styles.image}
                    resizeMode="stretch"  // Se ajusta sin recortar la imagen
                />
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Allí donde los hijos de Sanguinius están al borde de la Rabia Negra, es donde va Astorath. Decidido a dar a esos guerreros una última victoria gloriosa, lucha como un hombre poseído, decapitando a sus enemigos mientras lidera a los Marines Espaciales enfurecidos y consumidos por la furia desatada</Text>
                </View>
            </>
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
{/**---------------------------OPCIONES DE EQUIPO----------------------------------------- */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>OPCIONES DE EQUIPO</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Ninguna</Text>
                </View>
            </>
            </View>
{/**---------------------------COMPOSICIÓN DE LA UNIDAD----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>COMPOSICIÓN DE LA UNIDAD</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>1 Astorath – Héroe Épico</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo está equipado con: pistola bólter; el Hacha del Verdugo</Text>
                </View>
            </>
            </View>
{/**---------------------------LÍDER----------------------------------------- */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>LÍDER</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo puede unirse a la siguiente unidad:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Marines de la Compañía de la Muerte con Mochilas de Salto</Text>
                </View>
            </>
            </View>
{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*ASTORATH* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*  */}


{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* BAAL PREDATOR* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*  */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Image 
                    source={require('../img/blood_angels/baal_predator.png')}
                    style={styles.image}
                    resizeMode="stretch"  // Se ajusta sin recortar la imagen
                />
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Solo los Angeles Sangrientos y sus sucesores tienen acceso a la tecnología STC necesaria para producir Baal Predators. Con motores rugientes, estos tanques pueden seguir el ritmo de las rápidas cargas de los Blood Angels o correr para apoyar ataques orbitales, vertiendo torrentes de fuego sobre el enemigo a medida que avanzan.</Text>
                </View>
            </>
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
            {/** 1 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Cañón Baal de llama tormentosa [IGNORA COBERTURA, TORRENTE]</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>18"</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>D6+3</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>N/A</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>-2</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>2</Text>
                </View>
            </>
            </View>
             {/** 2 */}
             <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Bólter pesado [IMPACTOS SOSTENIDOS 1]</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>36"</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>3</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>3+</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>5</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>-1</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>2</Text>
                </View>
            </>
            </View>
            {/** 3 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Llama pesada [IGNORA COBERTURA, TORRENTE]</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>D6</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>N/A</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>5</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>-1</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>1</Text>
                </View>
            </>
            </View>
            {/** 4 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Misil cazador-asesino [UN SOLO USO]</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>48"</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>14</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>D6</Text>
                </View>
            </>
            </View>
            <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f'}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Un Solo Uso: El portador solo puede disparar esta arma una vez por batalla.</Text>
                </View>
            {/** 5 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Bólter de tormenta [FUEGO RÁPIDO 2]</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>24"</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>2</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>3+</Text>
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
            {/** 6 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Cañón de asalto doble [HERIDAS DEVASTADORAS, GEMELO]</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>24"</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>3+</Text>
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
                    <Text style={{fontSize: 16, color: '#fff'}}>Orugas blindadas</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>3</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>4+</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Motores Sobrecargados:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Puedes repetir las tiradas de Avance hechas para este modelo. Cada vez que este modelo Avanza, hasta el final del turno, las armas a distancia que lleve este modelo tienen la habilidad [ASALTO], pero solo pueden atacar a unidades de Infantería.</Text>
                </View>
            </>
            </View>
            {/**------------------------------------------------------------------------- */}
{/**---------------------------EXTRA----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>Daño: 1-4 Heridas Restantes
                    </Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>Mientras este modelo tenga de 1 a 4 heridas restantes, cada vez que haga un ataque, resta 1 de la tirada de Impacto.</Text>
                </View>
            </>
            </View>
{/**---------------------------OPCIONES DE EQUIPO----------------------------------------- */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>OPCIONES DE EQUIPO</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>↕El cañón de asalto doble de este modelo puede reemplazarse por 1 cañón Baal de llama tormentosa.</Text>
                </View>
            </>
            </View>
            {/** */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>↕Este modelo puede estar equipado con 1 misil cazador-asesino.</Text>
                </View>
            </>
            </View>
            {/** */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>↕Este modelo puede estar equipado con 1 bólter de tormenta.</Text>
                </View>
            </>
            </View>
            {/** */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>↕Este modelo puede estar equipado con una de las siguientes opciones:
                        {"\n"}  ‼ 2 bólteres pesados
                        {"\n"}  ‼ 2 llamas pesadas
                    </Text>
                </View>
            </>
            </View>
{/**---------------------------COMPOSICIÓN DE LA UNIDAD----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>COMPOSICIÓN DE LA UNIDAD</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>1 Baal Predator</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo está equipado con: cañón de asalto doble; orugas blindadas.</Text>
                </View>
            </>
            </View>
{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* BAAL PREDATOR* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*  */}


{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* HERMANO CORBULO* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*  */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Image 
                    source={require('../img/blood_angels/brother_corbulo.png')}
                    style={styles.image}
                    resizeMode="stretch"  // Se ajusta sin recortar la imagen
                />
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
                    <Text style={{fontSize: 13, color: '#fff'}}>El Alto Sacerdote Sanguinario, Hermano Corbulo, es altamente respetado por su dedicación al Capítulo, su nobleza y su don de la previsión, una habilidad que muchos creen compartía Sanguinius. En el campo de batalla, corre al auxilio de los hermanos heridos, derribando a cualquier enemigo en su camino con poderosos golpes de los Dientes Celestiales.</Text>
                </View>
            </>
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
            {/** 1 */}
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
                    <Text style={{fontSize: 16, color: '#fff'}}>Dientes Celestiales [IMPACTOS SOSTENIDOS 1]</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>6</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>5</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>-1</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>1</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>NÚCLEO:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Líder</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>FACCIÓN:</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Sacerdote Sanguinario:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Mientras este modelo esté liderando una unidad, los modelos de esa unidad tienen la habilidad No Sienten Dolor 5+.</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>El Cáliz Rojo:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Mientras este modelo esté liderando una unidad, añade 1 a la característica de Ataques de las armas cuerpo a cuerpo equipadas por los modelos de esa unidad.</Text>
                </View>
            </>
            </View>
{/**---------------------------OPCIONES DE EQUIPO----------------------------------------- */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>OPCIONES DE EQUIPO</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>↕Ninguna</Text>
                </View>
            </>
            </View>
{/**---------------------------COMPOSICIÓN DE LA UNIDAD----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>COMPOSICIÓN DE LA UNIDAD</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>1 Brother Corbulo – Héroe Épico</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo está equipado con: pistola bólter; Dientes Celestiales.</Text>
                </View>
            </>
            </View>
{/**---------------------------LIDER----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>LÍDER</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo puede unirse a las siguientes unidades:
                        {"\n"} ¶ Escuadra de Asalto
                        {"\n"} ¶ Escuadra Devastadora
                        {"\n"} ¶ Escuadra Táctica
                        {"\n"} ¶ Escuadra de Veteranos Vanguardistas
                    </Text>
                </View>
            </>
            </View>
{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* HERMANO CORBULO* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*  */}


{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* CAPITAN TYCHO* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*  */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Image 
                    source={require('../img/blood_angels/capitan_tycho.png')}
                    style={styles.image}
                    resizeMode="stretch"  // Se ajusta sin recortar la imagen
                />
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
                    <Text style={{fontSize: 13, color: '#fff'}}>El Capitán Tycho fue una vez uno de los comandantes más talentosos de los Blood Angels, un ejemplo de todos los ideales que sostenía su Capítulo. Fue mientras luchaba en innumerables batallas contra los Orkos en Armageddon que ganó fama y renombre, y allí sufrió la herida que cambiaría su vida para siempre.</Text>
                </View>
            </>
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
            {/** 1 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Canción de Sangre [ANTI-INFANTERÍA 4+, HERIDAS DEVASTADORAS, MELTA 2]</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>24"</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>2</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>-1</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>2</Text>
                </View>
            </>
            </View>
            {/** 2 */}
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
                    <Text style={{fontSize: 16, color: '#fff'}}>Mano del Muerto</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>6</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>-1</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>NÚCLEO:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Líder</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>FACCIÓN:</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Comandante Dotado:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Mientras este modelo esté liderando una unidad, cada vez que esa unidad sea seleccionada para disparar, selecciona una de las siguientes habilidades para aplicar a las armas a distancia equipadas por los modelos en esa unidad hasta el final de la fase:
                        {"\n"} ¶ ASALTO
                        {"\n"} ¶ PESADA
                        {"\n"} ¶ FUEGO RAPIDO 1
                    </Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Amargado:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>La primera vez que un ataque sea asignado a este modelo, después de que la unidad atacante haya terminado de hacer sus ataques, hasta el final de la batalla, cambia la característica de Ataques de la Mano del Muerto de este modelo a 12.</Text>
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
{/**---------------------------OPCIONES DE EQUIPO----------------------------------------- */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>OPCIONES DE EQUIPO</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>↕Ninguna</Text>
                </View>
            </>
            </View>
{/**---------------------------COMPOSICIÓN DE LA UNIDAD----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>COMPOSICIÓN DE LA UNIDAD</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>1 Captain Tycho – Héroe Épico</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo está equipado con: Canción de Sangre; pistola bólter; Mano del Muerto.</Text>
                </View>
            </>
            </View>
{/**---------------------------LIDER----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>LÍDER</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo puede unirse a las siguientes unidades:
                        {"\n"} ¶ Escuadra de Asalto
                        {"\n"} ¶ Escuadra de Mando
                        {"\n"} ¶ Escuadra Táctica
                        {"\n"} ¶ Escuadra de Veteranos Vanguardistas
                    </Text>
                </View>
            </>
            </View>
{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* CAPITAN TYCHO* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*  */}


{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* BIBLIOTECARIO JEFE MEPHISTON* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*  */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Image 
                    source={require('../img/blood_angels/bibliotecario_jefe_mefisto.png')}
                    style={styles.image}
                    resizeMode="stretch"  // Se ajusta sin recortar la imagen
                />
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Mephiston es un guerrero y psíquico de poder descomunal. Es el único Angel Sangriento conocido por haber suprimido la Rabia Negra, resurgiendo de la muerte con fuerza, vigor y velocidad excepcionales. Muchos susurran a sus espaldas, preguntándose cuál fue el precio que pagó por esa transformación.</Text>
                </View>
            </>
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
            {/** 1 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Furia de los Ancestros – brujería [PISTOLA, PSÍQUICO, IMPACTOS SOSTENIDOS 1]</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>3</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>-1</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>D3</Text>
                </View>
            </>
            </View>
            {/** 2 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Furia de los Ancestros – brujería enfocada [PELIGROSO, PISTOLA, PSÍQUICO, IMPACTOS SOSTENIDOS 3]</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>3</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>5</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>-2</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>D3</Text>
                </View>
            </>
            </View>
            {/** 3 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Pistola de plasma – estándar [PISTOLA]</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>7</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>-2</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>1</Text>
                </View>
            </>
            </View>
            {/** 4 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Pistola de plasma – sobrecargada [PELIGROSO, PISTOLA]</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>8</Text>
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
            {/** 1 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Vitarus [PSÍQUICO]</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>6</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>9</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>D3</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>NÚCLEO:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>No Sienten Dolor 5+, Líder</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>FACCIÓN:</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>La Aceleración (Psíquico):</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Mientras este modelo esté liderando una unidad, los modelos de esa unidad tienen la habilidad Pelea Primero.
                    </Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Capucha Psíquica:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Mientras este modelo esté liderando una unidad, los modelos de esa unidad tienen la habilidad No Sienten Dolor 4+ contra ataques psíquicos.</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Mirada Transfixiante (Psíquico):</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Al comienzo de la fase de Combate, puedes seleccionar una unidad enemiga que esté en el rango de compromiso de la unidad de este psíquico y tirar un D6: con un 1, este modelo psíquico sufre D3 heridas mortales; con un 2-5, hasta el final de la fase, empeora en 1 la característica de Habilidad de Arma de las armas cuerpo a cuerpo equipadas por los modelos en esa unidad enemiga; con un 6, hasta el final de la fase, empeora en 1 la Habilidad de Arma y la característica de Ataques de esas armas.</Text>
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
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>SALVACIÓN INVULNERABLE: 5+</Text>
                </View>
                </>
            </View>
{/**---------------------------OPCIONES DE EQUIPO----------------------------------------- */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>OPCIONES DE EQUIPO</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>↕Ninguna</Text>
                </View>
            </>
            </View>
{/**---------------------------COMPOSICIÓN DE LA UNIDAD----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>COMPOSICIÓN DE LA UNIDAD</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>1 Bibliotecario Jefe Mefisto – Héroe Épico</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo está equipado con: pistola de plasma; Furia de los Ancestros; Vitarus.</Text>
                </View>
            </>
            </View>
{/**---------------------------LIDER----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>LÍDER</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo puede unirse a las siguientes unidades:
                        {"\n"} ¶ Escuadra de Intercesores de Asalto
                        {"\n"} ¶ Escuadra de Intercesores
                        {"\n"} ¶ Escuadra de Veteranos de Sternguard
                    </Text>
                </View>
            </>
            </View>
{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* BIBLIOTECARIO JEFE MEPHISTON *-*-*-*-*-*-*-*-*-*-*-*-*-*  */}


{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* COMANDANTE DANTE *-*-*-*-*-*-*-*-*-*-*-*-*-*  */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Image 
                    source={require('../img/blood_angels/comandante_dante.png')}
                    style={styles.image}
                    resizeMode="stretch"  // Se ajusta sin recortar la imagen
                />
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Dante surca el campo de batalla, resplandeciente en su armadura dorada, antes de lanzarse a la sangrienta batalla con estelas de fuego. Una vez en la refriega, la penetrante mirada de su máscara de muerte congela a los enemigos de miedo, mientras que sus golpes perfectamente dirigidos con el Hacha Mortalis derriban a sus enemigos uno tras otro.</Text>
                </View>
            </>
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
            {/** 1 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Perdición [MELTA 2, PISTOLA, IMPACTOS SOSTENIDOS D3]</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>6"</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>8</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>-4</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>D6</Text>
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
            {/** 1 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>El Hacha Mortalis [IMPACTOS LETALES]</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>8</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>7</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>NÚCLEO:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Despliegue Rápido, Líder</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>FACCIÓN:</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Regente del Imperium Nihilus:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Mientras este modelo esté liderando una unidad, suma 1 a las tiradas de Carga realizadas para esa unidad y, cada vez que un modelo en esa unidad realice un ataque, suma 1 a la tirada de Impacto.
                    </Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Máscara de Muerte de Sanguinius:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Al inicio de la fase de Combate, cada unidad enemiga a 6" de este modelo debe realizar una prueba de Moral, restando 1 a esa prueba cuando la realicen.</Text>
                </View>
            </>
            </View>
            {/**------------------------------------------------------------------------- */}
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
{/**---------------------------OPCIONES DE EQUIPO----------------------------------------- */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>OPCIONES DE EQUIPO</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>↕Ninguna</Text>
                </View>
            </>
            </View>
{/**---------------------------COMPOSICIÓN DE LA UNIDAD----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>COMPOSICIÓN DE LA UNIDAD</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>1 Commander Dante – Héroe Épico</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo está equipado con: Perdición; el Hacha Mortalis.</Text>
                </View>
            </>
            </View>
{/**---------------------------LIDER----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>LÍDER</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo puede unirse a las siguientes unidades:
                        {"\n"} ¶ Escuadra de Asalto con Mochilas de Salto
                        {"\n"} ¶ Guardia Sanguinaria
                        {"\n"} ¶ Escuadra de Veteranos Vanguardistas con Mochilas de Salto
                    </Text>
                </View>
            </>
            </View>
{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* COMANDANTE DANTE *-*-*-*-*-*-*-*-*-*-*-*-*-*  */}


{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* DEATH COMPANY DREADNOUGHT
 *-*-*-*-*-*-*-*-*-*-*-*-*-*  */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Image 
                    source={require('../img/blood_angels/compañia_de_la_muerte.png')}
                    style={styles.image}
                    resizeMode="stretch"  // Se ajusta sin recortar la imagen
                />
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Ni siquiera ser encerrado en el sarcófago de un Dreadnought es suficiente para mantener a raya la Rabia Negra. Los Dreadnoughts de la Compañía de la Muerte son como arietes furiosos, ansiosos por embestir al enemigo y destrozarlos. Son armas de terror muy potentes, desatadas para causar el mayor daño posible.</Text>
                </View>
            </>
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
            {/** 1 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Llama pesada [IGNORA COBERTURA, TORRENTE]</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>D6</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>N/A</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>5</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>-1</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>1</Text>
                </View>
            </>
            </View>
            {/** 2 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Fusil de fusión [MELTA 2]</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>3+</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>9</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>-4</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>D6</Text>
                </View>
            </>
            </View>
            {/** 2 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Bólter de tormenta [FUEGO RÁPIDO 2]</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>24"</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>2</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>3+</Text>
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
            {/** 1 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Garras de Sangre [GEMELO]</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>7</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>3+</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>8</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>-2</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>3</Text>
                </View>
            </>
            </View>
            {/** 2 */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>Puños Gemelos de Furioso [GEMELO]</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>5</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>3+</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>12</Text>
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
                    <Text style={{fontSize: 14, color: '#fff'}}>3</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>NÚCLEO:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Destrucción Mortal 1, No Sienten Dolor 6+</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>FACCIÓN:</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Rabia Negra:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Cada vez que este modelo haga un ataque, puedes repetir la tirada de Impacto. Mientras este modelo no esté a 12" de uno o más modelos amigos de Capellán, no puede seleccionarse para Retirarse y su característica de Control de Objetivo es 0.
                    </Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Represalia Frenética:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Cada vez que una unidad enemiga ataque a este modelo, después de que esa unidad haya terminado sus ataques, este modelo puede disparar como si fuera tu fase de Disparo o combatir como si fuera la fase de Combate.</Text>
                </View>
            </>
            </View>
{/**---------------------------HABILIDADES DE EQUIPO----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>HABILIDADES DE EQUIPO</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Magna-grappler:</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>El portador pierde la palabra clave de Humo, pero añade 2 a las tiradas de Carga realizadas para el portador si uno o más de los objetivos de esa carga es una unidad de Monstruo o Vehículo.</Text>
                </View>
            </>
            </View>
{/**---------------------------OPCIONES DE EQUIPO----------------------------------------- */}
<View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>OPCIONES DE EQUIPO</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}> ↕ El bólter de tormenta de este modelo puede ser reemplazado por 1 llama pesada.
                        {"\n"} ↕ El fusil de fusión de este modelo puede ser reemplazado por 1 llama pesada.
                        {"\n"} ↕ Los puños de Furioso de este modelo pueden ser reemplazados por 1 par de garras de sangre.
                        {"\n"} ↕ Este modelo puede estar equipado con 1 magna-grappler.
                    </Text>
                </View>
            </>
            </View>
{/**---------------------------COMPOSICIÓN DE LA UNIDAD----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>COMPOSICIÓN DE LA UNIDAD</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>1 Death Company Dreadnought</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5}}>
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo está equipado con: fusil de fusión; bólter de tormenta; puños gemelos de Furioso.</Text>
                </View>
            </>
            </View>
{/**---------------------------LIDER----------------------------------------- */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#c03f3f',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>LÍDER</Text>
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
                    <Text style={{fontSize: 13, color: '#fff'}}>Este modelo puede unirse a las siguientes unidades:
                        {"\n"} ¶ Escuadra de Asalto con Mochilas de Salto
                        {"\n"} ¶ Guardia Sanguinaria
                        {"\n"} ¶ Escuadra de Veteranos Vanguardistas con Mochilas de Salto
                    </Text>
                </View>
            </>
            </View>
{/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* DEATH COMPANY DREADNOUGHT
 *-*-*-*-*-*-*-*-*-*-*-*-*-*  */}



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

export default MiniChaosSpaceMarinesScreen;