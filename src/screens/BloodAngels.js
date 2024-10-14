import * as React from 'react';
import { Text, ScrollView,} from 'react-native';

const BloodAngels = () => {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ff9f9f', padding: 7}}>
                <Text style={{  textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                ÁNGELES DE SANGRE – hijos DE SANGUINIUS
                </Text>
                <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                Hijos genéticos del Primarca Sanguinius con alas de ángel, los Ángeles de sangre descienden a la batalla
                con alas llameantes para interponerse entre los sirvientes del Emperador y las hordas heréticas y alienígenas que buscan destruirlos. 
                Maestros del rápido asalto, la ofensiva mecanizada y el rápido ataque aéreo, han forjado un legado de victorias que se extienden a lo largo de los siglos.
                {"\n"} Si tu facción del ejército es Adeptus Astartes, puedes usar esta regla de destacamiento de los Hijos de Sanguinius.
                </Text>
                <br/>
                <Text style={{textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                 SED ROJA
                </Text>
                <Text style={{ textAlign: 'center', fontStyle: 'italic', fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                Aunque se esfuerzan por contener la furia asesina los angeles de sangre, hierve a fuego lento bajo la superficie de su mente. Durante la batalla, esta furia se descarga contra los enemigos, otorgando una gran fuerza a cada golpe.
                    <br/>
                    <Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    Cada vez que una unidad Adeptus Astartes de tu ejército es seleccionado para luchar, si esta unidad realiza una carga durante el movimiento, hasta el final de la fase,
                    suma 1 a las caracteristicas de Fuerza y Ataques de armas cuerpo a cuerpo equipadas por modelo en dicha unidad.
                    </Text>
                </Text>
                <br/>
                <Text style={{  textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                EstrataGemas – Stratagems
                </Text>
                <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                Si estas usando la regla de destacamiento de los hijos de Sanguinius, puedes usar sus siguientes <Text style={{fontStyle: 'italic', textTransform: 'uppercase'}}> Stratagems</Text>:
                </Text>
        </ScrollView>
    );
};

export default BloodAngels;