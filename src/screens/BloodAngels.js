import * as React from 'react';
import { Text, ScrollView,} from 'react-native';

const BloodAngelsScreen = () => {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ff9f9f', padding: 7}}>
                <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>ÁNGELES SANGRIENTOS – hijos DE SANGUINIUS
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
                </Text> {/**DETACHMENT RULE */}
                <br/>
                <Text style={{  textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                EstrataGemas – Stratagems
                </Text>
                <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                Si estas usando la regla de destacamiento de los hijos de Sanguinius, puedes usar sus siguientes: <Text style={{fontStyle: 'italic', textTransform: 'uppercase'}}> Stratagems</Text>:
                </Text>
                {/** ---------------------------------------- 1 ---------------------------------------- */}
                <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    El sacrificio del angel.
                    {"\n"} <Text style={{fontSize:16, textTransform: 'uppercase', textAlign:'center', color : "#fff", fontWeight: 'bold'}}>HIJOS DE SANGUINIUS – ESTRATEGIA DE HAZAÑA ÉPICA</Text>
                    </Text> {"\n"}
                    Los angeles sangrientos se pondrían en peligro con gusto cpn la finalidad de proteger a otros, ejemplificando el sacrificio de Sanguinius.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text> en cualquier fase.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> una unidad de personaje <Text style={{fontStyle: "italic"}}>Adeptus Astartes</Text>
                    de tu ejercito que acaba de ser destruida. Puedes usar esta estrategia en esa unidad incluso si acana de ser destruida.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Hasta el final de la batalla, cada vez que una unidad de <Text style={{fontStyle: "italic"}}>Adeptus Astartes</Text> 
                    amiga realice un ataque contra la unidad enemiga que destruyó a tu personaje, puedes repetir la tirada para impactar.
                    <br/>
                    {/** ---------------------------------------- 2 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    Armadura del desdén.
                    {"\n"} <Text style={{fontSize:16, textTransform: 'uppercase', textAlign:'center', color : "#fff", fontWeight: 'bold'}}>HIJOS DE SANGUINIUS – ESTRATEGIA DE TÁCTICA DE BATALLA</Text>
                    </Text> {"\n"}
                    La beligerancia de los <Text style={{fontStyle: "italic"}}> Adeptus Astartes</Text> combinada con su fisiologia transhumana los convierte en oponentes inquebrantables.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text> En la fase de disparo de tu oponente o en la fase de combate, justo despues de que una unidad enemiga haya seleccionado sus objetivos.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> una unidad de <Text style={{fontStyle: "italic"}}>Adeptus Astartes</Text>
                    de tu ejercito que haya sido seleccionada como objetivo de uno o más ataques de la unidad atacante.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Hasta el final, cada vez que un ataque apunte a tu unidad, empeora la caracteristica de <Text style={{fontStyle:"italic"}}>Penetracion de Armadura</Text> de ese ataque en 1.
                    <br/>
                    {/** ---------------------------------------- 3 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    Embestida Agresiva.
                    {"\n"} <Text style={{fontSize:16, textTransform: 'uppercase', textAlign:'center', color : "#fff", fontWeight: 'bold'}}>HIJOS DE SANGUINIUS – ESTRATEGIA DE TÁCTICA DE BATALLA</Text>
                    </Text> {"\n"}
                    Los Hijos de Sanguinius avanzan constantemente hacia nuevos enemigos, desatando la sed de sangre que corre por sus venas con un dinamismo controlado.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text> Fase de combate.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> una unidad de <Text style={{fontStyle: "italic"}}>Adeptus Astartes</Text>
                    de tu ejercito , justo antes de que esa unidad realice un Movimiento de Consolidación.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Hasta el final de la fase, cada vez que un modelo de tu unidad realice un <Text style={{fontStyle:"italic"}}>Movimiento de Consolidación</Text>, puede moverse hasta 6" en lugar de hasta 3", siempre que tu unidad termine ese <Text style={{fontStyle:"italic"}}>Movimiento de Consolidación</Text> en coherencia de unidad y dentro del rango de compromiso de una o más unidades enemigas.
                    <br/>
                    {/** ---------------------------------------- 4 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    Desborde rojo.
                    {"\n"} <Text style={{fontSize:16, textTransform: 'uppercase', textAlign:'center', color : "#fff", fontWeight: 'bold'}}>HIJOS DE SANGUINIUS – ESTRATEGIA DE TÁCTICA DE BATALLA</Text>
                    </Text> {"\n"}
                    En momentos de gran desesperación, la furia y la ferocidad pueden ser los aliados más fuertes de un guerrero.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text> Fase de combate.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> una unidad de <Text style={{fontStyle: "italic"}}>Adeptus Astartes</Text>
                    de tu ejercito que no haya sido seleccionada para luchar en esta fase.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto</Text>:Hasta el final de la fase, las armas cuerpo a cuerpo equipadas por los modelos en tu unidad tienen las habilidades <Text style={{fontStyle: "italic", textTransform: 'uppercase'}}>LANZA</Text> y <Text style={{fontStyle: "italic", textTransform: 'uppercase'}}>GOLPES LETALES</Text>.
                    <br/>
                    {/** ---------------------------------------- 5 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    Solo en la muerte termina el deber.
                    {"\n"} <Text style={{fontSize:16, textTransform: 'uppercase', textAlign:'center', color : "#fff", fontWeight: 'bold'}}>HIJOS DE SANGUINIUS – ESTRATEGIA DE HAZAÑA ÉPICA</Text>
                    </Text> {"\n"}
                    La muerte inminente no impide que un Marine Espacial ejecute su justicia final sobre los enemigos del Imperio.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text> Fase de Combate, justo después de que una unidad enemiga haya seleccionado sus objetivos.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> Una unidad de <Text style={{fontStyle: "italic"}}>Adeptus Astartes</Text>
                    de tu ejército que haya sido seleccionada como objetivo de uno o más ataques de la unidad atacante.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Hasta el final de la fase, cada vez que un modelo en tu unidad sea destruido, si ese modelo no ha luchado en esta fase, no lo retires del campo. El modelo destruido puede luchar después de que la unidad de modelos atacantes haya terminado de hacer sus ataques, y luego será retirado del campo.
                    <br/>
                    {/** ---------------------------------------- 6 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    ASALTO IMPLACABLE.
                    {"\n"} <Text style={{fontSize:16, textTransform: 'uppercase', textAlign:'center', color : "#fff", fontWeight: 'bold'}}>HIJOS DE SANGUINIUS – ESTRATEGIA DE MANIOBRA ESTRATÉGICA</Text>
                    </Text> {"\n"}
                    A los Ángeles Sangrientos les disgusta recurrir a las estrategias defensivas preferidas por otros Capítulos, y una retirada táctica no es más que un preludio para volver a entrar en la refriega.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text> Fase de Movimiento, justo después de que una unidad de Adeptus Astartes de tu ejército se haya retirado.                    .
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> Esa unidad de <Text style={{fontStyle: "italic"}}>Adeptus Astartes</Text>.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Hasta el final del turno, tu unidad es elegible para declarar una carga aunque se haya retirado en esta fase.
                </Text> {/**Strategems end */}
                <br/>
                <Text style={{  textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                MEJORAS (ENHANCEMENTS)
                </Text> {/**ENHANCEMENTS */}
                <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                Si estás utilizando la regla de Desprendimiento de los Hijos de Sanguinius, puedes usar estas mejoras de los Hijos de Sanguinius.
                    {/** ---------------------------------------- 1 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>ARTESANO DE GUERRA</Text>
                    {"\n"}Este guerrero es un verdadero artista tanto dentro como fuera del campo de batalla. Sus talentos se reflejan en la exquisita manufactura de su equipo de guerra, pues insiste en forjar personalmente sus armas.
                    {"\n"} • <Text style={{fontWeight: "bold", fontStyle: 'italic'}}>Solo para modelos de Adeptus Astartes.</Text> Mejora la característica de Penetración de Armadura de las armas del portador en 1, y el portador tiene una característica de Salvación de 2+.
                    <br/>
                    {/** ---------------------------------------- 2 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>VISAGE DE LA MUERTE</Text>
                    {"\n"}Esta máscara exquisitamente forjada es una obra de belleza oscura para los Ángeles Sangrientos y un presagio de la perdición inminente para sus enemigos. La expresión inmutable de la máscara inspira miedo e incertidumbre incluso en los enemigos más confiados. No ven ira, dolor o emoción en el rostro del portador, lo que les impide discernir su estado de ánimo en un duelo.
                    {"\n"} • <Text style={{fontWeight: "bold", fontStyle: 'italic'}}>Solo para modelos de Adeptus Astartes.</Text> Mientras una unidad enemiga (excluyendo Monstruos y Vehículos) esté dentro del rango de compromiso de la unidad del portador, reduce a la mitad la característica de Control de Objetivos de los modelos en esa unidad enemiga.
                    <br/>
                    {/** ---------------------------------------- 3 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>FRAGMENTO DEL ARCÁNGEL</Text>
                    {"\n"}Cuando Sanguinius luchó contra Horus, su magnífica espada se rompió trágicamente contra la profana armadura de batalla del Warmaster. Los fragmentos fueron reunidos y se forjaron nuevas espadas que incorporan estos fragmentos, cada una de ellas regalada a un Capítulo sucesor distinto.
                    {"\n"} • <Text style={{fontWeight: "bold", fontStyle: 'italic'}}>Solo para modelos de Adeptus Astartes.</Text>  Las armas cuerpo a cuerpo del portador tienen las habilidades <Text style={{fontStyle: "italic", textTransform: 'uppercase'}}>ANTI-CAOS 5+</Text> y <Text style={{fontStyle: "italic", textTransform: 'uppercase'}}>LANZA</Text>.
                    <br/>
                    {/** ---------------------------------------- 4 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>ICONO DEL ÁNGEL</Text>
                    {"\n"}Confiado a uno cuya fe en el primogénito es profunda, el Icono del Ángel toma la forma de un pequeño santuario en la mochila del portador. Al exhibirlo, este guerrero recuerda a sus hermanos los herejes que huyeron después de haber abatido al Ángel, exhortándolos a no dejar que ningún enemigo escape de nuevo de su alcance.
                    {"\n"} • <Text style={{fontWeight: "bold", fontStyle: 'italic'}}>Solo para modelos de Adeptus Astartes.</Text>  Cada vez que una unidad enemiga (excluyendo Monstruos y Vehículos) dentro del rango de compromiso de la unidad del portador sea seleccionada para retirarse, los modelos de esa unidad enemiga deben realizar pruebas de Escape Desesperado como si su unidad estuviera en estado de shock de batalla. Al hacerlo, si esa unidad enemiga también está en estado de shock de batalla por otros medios, resta 1 a cada una de esas pruebas de Escape Desesperado.
                </Text>{/**ENHANCEMENTS */}
        </ScrollView>
    );
};

export default BloodAngelsScreen;