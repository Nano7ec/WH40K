import * as React from 'react';
import { Text, ScrollView,} from 'react-native';
import { View } from 'react-native-web';

const ChaosDaemonsScreen = () => {
    return(
        <ScrollView style={{ flex: 1, backgroundColor: '#7d8cc3', padding: 7}}>
            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#11183f', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>Demonios del caos
            </Text>
            <Text style={{ fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            Cuando los demonios irrumpen en el espacio real, torbellinos de energía del vórtice se derraman a su paso. La emoción manifestada y las fuerzas desatadas y pesadillescas retuercen todo lo que tocan, remodelando el paisaje en formas extrañas mientras atormentan a los seres mortales hasta la locura. Estar atrapado en tales tempestades es soportar condiciones completamente anáthemas a las leyes fundamentales de la realidad, provocando un terror primal incluso en los guerreros más impasibles.
            </Text>
            {/** ARMY RULE/ DEMONIO DEL CAOS */}
            <br/>
           {/** ------------------------------------ 1 ------------------------------------ */}
           <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#11183f', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>La sombra del caos
            </Text>
            <Text style={{ fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            Si la Facción de tu Ejército es Legiones Daemónicas, ciertas áreas del campo de batalla se consideran dentro de la Sombra del Caos de tu ejército, de la siguiente manera:
            </Text>
            {"\n"} <Text style={{fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            ■ Tu zona de despliegue siempre está dentro de la Sombra del Caos de tu ejército.
            </Text>
            {"\n"} <Text style={{fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            ■ Al inicio de cualquier fase, si controlas al menos la mitad de los marcadores de objetivos dentro de Tierra de Nadie, hasta el final de esa fase, Tierra de Nadie estará dentro de la Sombra del Caos de tu ejército.
            </Text>
            {"\n"} <Text style={{fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            ■ Al inicio de cualquier fase, si controlas al menos la mitad de los marcadores de objetivos dentro de la zona de despliegue de tu oponente, hasta el final de esa fase, la zona de despliegue de tu oponente estará dentro de la Sombra del Caos de tu ejército.
            </Text>
            {/**SOMBRA DEL CAOS */}
            <br/>
            <Text style={{ fontStyle: 'italic',fontWeight: 'bold',fontSize: 20, backgroundColor: '#3b3d5e', color: '#fff', textTransform: 'uppercase', textAlign: 'center',borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
            Manifestacion demoniaca
            </Text>
            {"\n"} <Text style={{ontSize: 18, backgroundColor: '#3b3d5e', color: '#fff',paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            Mientras una unidad de Legiones Daemónicas de tu ejército esté dentro de la Sombra del Caos de tu ejército, cada vez que esa unidad realice una prueba de Choque de Batalla, suma 1 a esa prueba y, si la prueba se supera, una miniatura en esa unidad recupera hasta D3 heridas perdidas (si esa unidad es una unidad de Línea de Batalla y se supera la prueba, en su lugar pueden devolverse hasta D3 miniaturas destruidas a esa unidad).
            </Text>
            {/**MANIFESTACION DEMONIACA */}
            <br/>
            <Text style={{ fontStyle: 'italic',fontWeight: 'bold',fontSize: 20, backgroundColor: '#3b3d5e', color: '#fff', textTransform: 'uppercase', textAlign: 'center',borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
            TERROR DAEMÓNICO
            </Text>
            {"\n"} <Text style={{ontSize: 18, backgroundColor: '#3b3d5e', color: '#fff',paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            Mientras una unidad enemiga esté dentro de la Sombra del Caos de tu ejército, cada vez que esa unidad realice una prueba de conmoción (Battle-shock), resta 1 a esa prueba y, si la prueba falla, esa unidad enemiga sufre D3 heridas mortales.
            </Text>
            {/**TERROR DAEMÓNICO */}
            <br/>
            {/** ------------------------------------ 2 ------------------------------------ */}
            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#11183f', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>Pacto demoniaco
            </Text>
            <Text style={{ fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            Cuando los siervos mortales de los Dioses Oscuros marchan a la guerra, los más favorecidos pueden encontrarse acompañados por entidades demoníacas.
            </Text>
            {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            Si todas las miniaturas de tu ejército tienen la palabra clave Caos, puedes incluir unidades de Legiones Daemónicas en tu ejército, incluso si no tienen la palabra clave de Facción que seleccionaste en el paso de Selección de Facción del Ejército. El costo combinado en puntos de dichas unidades que puedes incluir depende del tamaño de tu batalla, como se muestra a continuación.
            </Text>
            {"\n"} <Text style={{fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            ■ Incursión - Hasta 250 pts
            </Text>
            {"\n"} <Text style={{fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            ■ Fuerza de Combate - Hasta 500 pts
            </Text>
            {"\n"} <Text style={{fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            ■ Embate - Hasta 750 pts
            </Text>
            {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            Ninguno de estos modelos puede ser tu Señor de la Guerra, y no pueden recibir Mejoras. Además:
            </Text>
            {"\n"} <Text style={{fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            ■ Si la Facción de tu Ejército es Devoradores de Mundos, solo puedes incluir unidades de Legiones Daemónicas de Khorne utilizando estas reglas.
            </Text>
            {"\n"} <Text style={{fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            ■ Si la Facción de tu Ejército es Mil Hijos, solo puedes incluir unidades de Legiones Daemónicas de Tzeentch utilizando estas reglas.
            </Text>
            {"\n"} <Text style={{fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            ■ Si la Facción de tu Ejército es Guardia de la Muerte, solo puedes incluir unidades de Legiones Daemónicas de Nurgle utilizando estas reglas.
            </Text>
            {"\n"} <Text style={{fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            ■ Si tu Señor de la Guerra es Lucius el Eterno, solo puedes incluir unidades de Legiones Daemónicas de Slaanesh utilizando estas reglas.
            </Text>
            {/**PACTO DEMONIACO */}
            <br/>
            {/**----------------------------------------------------------------------------------------- */}
            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#11183f', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>Demonios DEL CAOS – REGLAS DEL DESTACAMENTO DE INCURSIÓN demoniaca
            </Text>
            <Text style={{ fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            Si la Facción de tu Ejército es Legiones Daemónicas, puedes usar esta regla de Destacamento de Incursión Demoníaca.
            </Text>
            {"\n"}<Text style={{ fontSize: 20, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, textTransform: 'uppercase', fontStyle: 'italic',fontWeight: 'bold'}}>
            WARP RIFTS
            </Text>
            {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
            Las legiones demoníacas desgarran la tela del espacio real, entidades malévolas parpadeando en existencia como fantasmas de una pesadilla. Peor aún, a medida que el terror y el pánico se apoderan de sus víctimas, sus almas mortales se convierten en presas cada vez más fáciles para las entidades que emergen del vórtice.
            </Text>
            {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            Cada vez que una unidad de <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>Legiones Daemonica</Text> de tu ejército se despliegue en el campo de batalla usando la habilidad de Ataque Profundo, si se despliega completamente dentro de la Sombra del Caos de tu ejército, puede ser colocada en cualquier lugar que esté a más de 6" de distancia horizontalmente de todos los modelos enemigos, en lugar de más de 9".
            </Text>
            {/** ARMY RULE/ DEMONIO DEL CAOS */}
        </ScrollView>
    );
}
export default ChaosDaemonsScreen;