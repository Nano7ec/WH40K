import * as React from 'react';
import { Text, ScrollView,} from 'react-native';

const BloodAngels = () => {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ff9f9f', padding: 7}}>
                <Text style={{  textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                ÁNGELES SANGRIENTOS – hijos DE SANGUINIUS
                </Text>
                <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                Hijos genéticos del Primarca Sanguinius con alas de ángel, los Ángeles Sangrientos descienden a la batalla
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
                    suma 1 a las caracteristicas de Fuerza y Ataques de armas cuerpo a cuerpo equipadas por miniatura en dicha unidad.
                    </Text>
                </Text>
                <br/>
                <Text style={{  textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                EstrataGemas – Stratagems
                </Text>
                <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                Si estas usando la regla de destacamiento de los hijos de Sanguinius, puedes usar sus siguientes <Text style={{fontStyle: 'italic', textTransform: 'uppercase'}}> Stratagems</Text>:
                </Text>
                <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    <Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    El sacrificio del angel
                    </Text> {"\n"}
                    Los angeles sangrientos se pondrían en peligro con gusto cpn la finalidad de proteger a otros, ejemplificando el sacrificio de Sanguinius.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text> en cualquier fase.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> una unidad de personaje <Text style={{fontStyle: "italic"}}>Adeptus Astartes</Text>
                    de tu ejercito que acaba de ser destruida. Puedes usar esta estrategia en esa unidad incluso si acana de ser destruida.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Hasta el final de la batalla, cada vez que una unidad de <Text style={{fontStyle: "italic"}}>Adeptus Astartes</Text> 
                    amiga realice un ataque contra la unidad enemiga que destruyó a tu personaje, puedes repetir la tirada para impactar.
                    <br/>
                    <Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    Armadura del desdén
                    </Text> {"\n"}
                    La beligerancia de los <Text style={{fontStyle: "italic"}}> Adeptus Astartes</Text> combinada con su fisiologia transhumana los convierte en oponentes inquebrantables.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text> En la fase de disparo de tu oponente o en la fase de combate, justo despues de que una unidad enemiga haya seleccionado sus objetivos.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> una unidad de <Text style={{fontStyle: "italic"}}>Adeptus Astartes</Text>
                    de tu ejercito que haya sido seleccionada como objetivo de uno o más ataques de la unidad atacante.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Hasta el final, cada vez que un ataque apunte a tu unidad, empeora la caracteristica de <Text style={{fontStyle:"italic"}}>Penetracion de Armadura</Text> de ese ataque en 1.
                    <br/>
                    <Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    Embestida Agresiva
                    </Text> {"\n"}
                    Los Hijos de Sanguinius avanzan constantemente hacia nuevos enemigos, desatando la sed de sangre que corre por sus venas con un dinamismo controlado.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text> Fase de combate.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> una unidad de <Text style={{fontStyle: "italic"}}>Adeptus Astartes</Text>
                    de tu ejercito , justo antes de que esa unidad realice un Movimiento de Consolidación.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Hasta el final de la fase, cada vez que un modelo de tu unidad realice un <Text style={{fontStyle:"italic"}}>Movimiento de Consolidación</Text>, puede moverse hasta 6" en lugar de hasta 3", siempre que tu unidad termine ese <Text style={{fontStyle:"italic"}}>Movimiento de Consolidación</Text> en coherencia de unidad y dentro del rango de compromiso de una o más unidades enemigas.
                    <br/>
                    <Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    Desborde rojo
                    </Text> {"\n"}
                    En momentos de gran desesperación, la furia y la ferocidad pueden ser los aliados más fuertes de un guerrero.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text> Fase de combate.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> una unidad de <Text style={{fontStyle: "italic"}}>Adeptus Astartes</Text>
                    de tu ejercito que no haya sido seleccionada para luchar en esta fase.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto</Text>:Hasta el final de la fase, las armas cuerpo a cuerpo equipadas por los modelos en tu unidad tienen las habilidades <Text style={{fontStyle: "italic", textTransform: 'uppercase'}}>LANZA</Text> y <Text style={{fontStyle: "italic", textTransform: 'uppercase'}}>GOLPES LETALES</Text>.
                </Text> {/**Strategems end */}
                

        </ScrollView>
    );
};

export default BloodAngels;