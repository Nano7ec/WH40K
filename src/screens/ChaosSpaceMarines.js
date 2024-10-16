import * as React from 'react';
import { Text, ScrollView,} from 'react-native';
import { View } from 'react-native-web';

const ChaosSpaceMarinesScreen = () => {
    return(
        <ScrollView style={{ flex: 1, backgroundColor: '#75332c', padding: 7}}>
            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#676b6c', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>MARINES ESPACIALES DEL CAOS
                {"\n"}<Text style={{textTransform: 'uppercase', fontSize:20,fontStyle:'italic'}}>REGLAS DEL EJÉRCITO</Text>
            </Text>
            <Text style={{ fontSize: 18, backgroundColor: '#6f7773', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            Los campeones profanos de los Herejes Astartes ruegan a los Dioses del Caos con fervor fanático, ofreciendo las ofrendas más viles a cambio de su poder.
            </Text>
            {/** ARMY RULE/ CABALLEROS DEL CAOS*/}
            <br/>

            {/** ------------------------------------ 1 ------------------------------------ */}
            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#676b6c', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>PACTOS OSCUROS
            </Text>
            <Text style={{ fontSize: 18, backgroundColor: '#6f7773', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            Si tu facción es Herejes Astartes, cada vez que una unidad con esta habilidad sea seleccionada para disparar o luchar, puede hacer un Pacto Oscuro. Si lo hace, selecciona una de las siguientes habilidades para que las armas de esa unidad la obtengan hasta el final de la fase:
            {"\n"} ◘ GOLPES LETALES
            {"\n"} ◘ GOLPES SOSTENIDOS 1
            {"\n"}{"\n"} Cada vez que una unidad hace un Pacto Oscuro, después de resolver sus ataques, debe realizar una prueba de Liderazgo; si falla, esa unidad sufre D3 heridas mortales.
            </Text>
            {/** PACTOS OSCUROS*/}
            <br/>
            {/**------------------------------- REGLA DEL DESTACAMENTO ------------------------------- */}
            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#676b6c', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>MARINES ESPACIALES DEL CAOS – ESCLAVOS DE LA OSCURIDAD
                {"\n"} <Text style={{fontSize:20,fontStyle:'italic', textTransform: 'uppercase'}}>REGLA DEL DESTACAMENTO</Text>
           </Text>
           <Text style={{ fontSize: 18, backgroundColor: '#6f7773', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
           Si tu facción del ejército es Herejes Astartes, puedes usar esta regla de Destacamento "Esclavos de la Oscuridad".
           {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase',fontWeight:'bold'}}>MARCAS DEL CAOS</Text>
           {"\n"}Al alistar tu ejército, cada vez que selecciones una unidad de Herejes Astartes para incluir en tu ejército, si esa unidad no es un Héroe Épico y no tiene ya una o más de las palabras clave enumeradas a continuación, debes seleccionar una de las palabras clave de la lista para que esa unidad la obtenga (anota qué unidades obtienen qué palabras clave en tu lista del ejército). Cada vez que una unidad con una de estas palabras clave haga un Pacto Oscuro, obtiene la habilidad asociada a continuación hasta el final de la fase.
            <br/>
            </Text> 
            {/* Cabecera de la tabla */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#676b6c',}}>
                <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#676b6c',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}> Palabra clave</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#676b6c',marginTop: 5,fontSize: 10}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}> Habilidad </Text>
                </View>
                </>
            </View>
            {/* Filas de la tabla */}
            <View style={{flexDirection: 'row', // Alinear elementos en fila
            borderBottomWidth: 1,borderBottomColor: '#2C0069'}}>
            <>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#6f7773',fontSize: 10}}>
                    <Text style={{fontSize: 14, color: '#000'}}>Khorne – Furia Sangrienta</Text>
                </View>
                <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                alignItems: 'center', // Centra el contenido horizontalmente
                justifyContent: 'center', // Centra el contenido verticalmente
                padding: 5,backgroundColor: '#6f7773',fontSize: 10}}>
                    <Text style={{fontSize: 14, color: '#000'}}>En la fase de combate, si las armas de esta unidad obtuvieron la habilidad [GOLPES LETALES] en esta fase como resultado de un Pacto Oscuro, cada vez que un modelo de esta unidad haga un ataque, una tirada no modificada de 5+ para Impactar, obtiene un Impacto Crítico.</Text>
                </View>
            </>
            </View>

            <View style={{flexDirection: 'row', // Alinear elementos en fila
                        borderBottomWidth: 1,borderBottomColor: '#2C0069'}}>
                <>
                    <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                            alignItems: 'center', // Centra el contenido horizontalmente
                            justifyContent: 'center', // Centra el contenido verticalmente
                            padding: 5,backgroundColor: '#6f7773',fontSize: 10}}>
                        <Text style={{fontSize: 14, color: '#000'}}>Tzeentch – Fuego Warp</Text>
                    </View>
                    <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                            alignItems: 'center', // Centra el contenido horizontalmente
                            justifyContent: 'center', // Centra el contenido verticalmente
                            padding: 5,backgroundColor: '#6f7773',fontSize: 10}}>
                        <Text style={{fontSize: 14, color: '#000'}}>En la fase de disparo, si las armas de esta unidad obtuvieron la habilidad [GOLPES LETALES] en esta fase como resultado de un Pacto Oscuro, cada vez que un modelo de esta unidad haga un ataque, una tirada no modificada de 5+ para Impactar, obtiene un Impacto Crítico.</Text>
                    </View>
                </>
            </View>

            <View style={{flexDirection: 'row', // Alinear elementos en fila
                        borderBottomWidth: 1,borderBottomColor: '#2C0069'}}>
                <>
                    <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                            alignItems: 'center', // Centra el contenido horizontalmente
                            justifyContent: 'center', // Centra el contenido verticalmente
                            padding: 5,backgroundColor: '#6f7773',fontSize: 10}}>
                    <Text style={{fontSize: 14, color: '#000'}}>Nurgle – Propagación de la Enfermedad</Text>
                    </View>
                    <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                            alignItems: 'center', // Centra el contenido horizontalmente
                            justifyContent: 'center', // Centra el contenido verticalmente
                            padding: 5,backgroundColor: '#6f7773',fontSize: 10}}>
                    <Text style={{fontSize: 14, color: '#000'}}>En la fase de disparo, si las armas de esta unidad obtuvieron la habilidad [GOLPES SOSTENIDOS 1] en esta fase como resultado de un Pacto Oscuro, cada vez que un modelo de esta unidad haga un ataque, una tirada no modificada de 5+ para Impactar, obtiene un Impacto Crítico.</Text>        
                    </View>
                </>
            </View>

            <View style={{flexDirection: 'row', // Alinear elementos en fila
                        borderBottomWidth: 1,borderBottomColor: '#2C0069'}}>
                        <>
                            <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                            alignItems: 'center', // Centra el contenido horizontalmente
                            justifyContent: 'center', // Centra el contenido verticalmente
                            padding: 5,backgroundColor: '#6f7773',fontSize: 10}}>
                                <Text style={{fontSize: 14, color: '#000'}}>Slaanesh – Crueldad Excesiva</Text>
                            </View>
                            <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                            alignItems: 'center', // Centra el contenido horizontalmente
                            justifyContent: 'center', // Centra el contenido verticalmente
                            padding: 5,backgroundColor: '#6f7773',fontSize: 10}}>
                                <Text style={{fontSize: 14, color: '#000'}}>En la fase de combate, si las armas de esta unidad obtuvieron la habilidad [GOLPES SOSTENIDOS 1] en esta fase como resultado de un Pacto Oscuro, cada vez que un modelo de esta unidad haga un ataque, una tirada no modificada de 5+ para Impactar, obtiene un Impacto Crítico.</Text>
                            </View>
                        </>
            </View>

            <View style={{flexDirection: 'row', // Alinear elementos en fila
                        borderBottomWidth: 1,borderBottomColor: '#2C0069'}}>
                        <>
                            <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                            alignItems: 'center', // Centra el contenido horizontalmente
                            justifyContent: 'center', // Centra el contenido verticalmente
                            padding: 5,backgroundColor: '#6f7773',fontSize: 10}}>
                                <Text style={{fontSize: 14, color: '#000'}}>Caos Indiviso – Gloria al Caos</Text>
                            </View>
                            <View style={{flex: 1, // Distribuye equitativamente el espacio entre columnas
                            alignItems: 'center', // Centra el contenido horizontalmente
                            justifyContent: 'center', // Centra el contenido verticalmente
                            padding: 5,backgroundColor: '#6f7773',fontSize: 10}}>
                                <Text style={{fontSize: 14, color: '#000'}}>Cada vez que un modelo de esta unidad haga un ataque, repite una tirada de Impacto de 1.</Text>
                            </View>
                        </>
            </View>
            {/** FINALIZACION DE LA TABLA */}
            <br/>
            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#676b6c', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>RESTRICCIONES
            </Text>
            <Text style={{ fontSize: 18, backgroundColor: '#6f7773', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            {"\n"} ◘ No puedes seleccionar la palabra clave Khorne para una unidad Psíquica
            {"\n"} ◘ Una unidad de Personaje con la habilidad Líder solo puede ser unida a una unidad de Guardia del Cuerpo si ambas unidades comparten una de las mismas palabras clave de la lista anterior.
            </Text>{/**RESTRICCIONES */}
            {/** REGLAS DE DESTACAMIENTO*/}
            <br/>
            {/**------------------------------- MEJORAS ------------------------------- */}
            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#5e4646', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>MEJORAS – ENHANCEMENTS
           </Text>
           <Text style={{ fontSize: 18, backgroundColor: '#8a7371', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
           Si estás usando la regla del Destacamento Lance Traitoris, puedes utilizar estas Mejoras del Lance Traitoris.
                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>SEÑOR DEL MIEDO</Text>
                    {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#8a7371', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                     Este tiránico Caballero es el epítome del poder del miedo, infundiendo tanto terror en sus secuaces como en el enemigo, asegurando una obediencia inquebrantable.
                    {"\n"}Solo modelo Chaos Knight. Al inicio de la fase de Combate, puedes seleccionar una unidad enemiga dentro del rango de Compromiso del portador; esa unidad enemiga debe realizar una prueba de Battle-shock.
                </Text> {/** SEÑOR DEL MIEDO*/}
                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>AURA DEL TERROR</Text>
                    {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#8a7371', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Este imponente Caballero está envuelto en tentáculos de energía warp que acarician las mentes de cualquier enemigo que se acerque, llevando a aquellos que son tocados a un estado de miedo abyecto. Dondequiera que este Caballero camine, esta aura de terror impregna y corrompe la tierra hasta que pueda ser purificada.
                    {"\n"}Solo modelo Chaos Knight. Si controlas un marcador de objetivo al final de tu fase de Comando, y el portador está dentro del rango de ese marcador de objetivo, ese marcador de objetivo se considera Tainted y permanece bajo tu control incluso si no tienes modelos dentro de su rango, hasta que tu oponente lo controle al inicio o final de cualquier turno. Además, mientras un marcador de objetivo esté Tainted y bajo tu control y la habilidad Desesperación esté activa para tu ejército, ese marcador de objetivo tiene la habilidad Desesperación como si fuera un modelo Chaos Knight de tu ejército (resta 1 a las pruebas de Battle-shock y Liderazgo realizadas por unidades enemigas dentro de 12" de él).
                </Text> {/** AURA DEL TERROR*/}
                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>LA MARCA DEL TRAIDOR</Text>
                    {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#8a7371', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Las oscuras hazañas y la heráldica manchada de sangre de este Caballero del Caos son susurradas en todas partes. Los rumores se extienden de que enfrentarlo es enfrentarse a una muerte dolorosa. Cada blasón en su casco proclama las atrocidades cometidas por el portador, y solo mirarlo provoca un terror antinatural y pesadillas abrumadoras.
                    {"\n"}Solo modelo Chaos Knight. La habilidad Doom y Oscuridad está activa para el portador desde la primera ronda de batalla, en lugar de desde la tercera.
                </Text> {/** LA MARCA DEL TRAIDOR*/}
            </Text> {/** Mejoras*/}
            <br/>
            {/**------------------------------- ESTRATAGEMAS ------------------------------- */}
            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#5e4646', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>ESTRATAGEMAS DEL TRAITORIS LANCE – STRATAGEMS
           </Text>
           <Text style={{ fontSize: 18, backgroundColor: '#8a7371', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
           Si estás usando la regla del Destacamento Lance Traitoris, puedes usar estas Estratagemas del Lance Traitoris
                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>PERROS DEL MIEDO
                   {"\n"} <Text style={{fontSize:16, fontStyle:'italic'}}>ESTRATAGEMA TÁCTICA DE BATALLA DEL TRAITORIS LANCE</Text>
                </Text>
                    {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#8a7371', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Los pilotos de War Dog rodean a sus víctimas aterrorizadas y luego atacan en masa ferozmente.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> cuando:</Text> Al inicio de tu fase de Disparo o de Combate.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> objetivo:</Text> Dos o más unidades War Dog de tu ejército y una unidad enemiga que sea un objetivo elegible para cada una de esas unidades War Dog seleccionadas.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> Efecto:</Text> Hasta el final de la fase, las unidades War Dog seleccionadas solo pueden atacar esa unidad enemiga, pero todas las armas equipadas por esos modelos War Dog obtienen la habilidad <Text style={{fontStyle:'italic', textTransform: 'uppercase'}}>GOLPES SOSTENIDOS 1</Text>. Además, si esa unidad enemiga está bajo los efectos de <Text style={{fontStyle:'italic'}}>Battle-shock</Text>, hasta el final de la fase, cada vez que un modelo War Dog seleccionado realice un ataque contra esa unidad enemiga, una tirada de impacto sin modificar de 5+ cuenta como un Impacto Crítico.
                </Text> {/** PERROS DEL MIEDO*/}

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>DESDÉN POR LOS DÉBILES
                   {"\n"} <Text style={{fontSize:16, fontStyle:'italic'}}>ESTRATAGEMA TÁCTICA DE BATALLA DEL TRAITORIS LANCE</Text>
                </Text>
                    {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#8a7371', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Los pilotos de los Caballeros del Caos se niegan a ceder mientras queden enemigos por matar, ignorando despectivamente a aquellos que sucumben al miedo.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> cuando:</Text> En la fase de Combate, justo después de que una unidad enemiga haya seleccionado sus objetivos.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> objetivo:</Text> Una unidad de Chaos Knights de tu ejército que haya sido seleccionada como objetivo de uno o más ataques de la unidad atacante.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> Efecto:</Text> Hasta el final de la fase, tu modelo obtiene la habilidad <Text style={{fontStyle:'italic'}}>No Hay Dolor 6+</Text>, y la habilidad <Text style={{fontStyle:'italic'}}>No Hay Dolor 5+</Text> contra ataques realizados por modelos bajo los efectos de <Text style={{fontStyle:'italic'}}>Battle-shock</Text>.
                </Text> {/** DESDÉN POR LOS DÉBILES*/}

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>SOMBRAS DE TERROR
                   {"\n"} <Text style={{fontSize:16, fontStyle:'italic'}}>ESTRATAGEMA DE EQUIPO DE GUERRA DEL TRAITORIS LANCE</Text>
                </Text>
                    {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#8a7371', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Gritando con hambre fantasmal, entidades demoníacas descienden en un torbellino alado de sombras para desgarrar las almas de aquellos enemigos que muestran incluso un momento de miedo. Los raptores de almas desgarran a sus víctimas y, mientras se alimentan, canalizan esa fuerza vital para regenerar el daño de batalla o curar al piloto del Caballero en el que estas criaturas anidan.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> cuando:</Text> Cualquier fase, justo después de que una unidad enemiga falle una prueba de Battle-shock.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> objetivo:</Text> Una unidad Chaos Knights de tu ejército que esté a 12" de esa unidad enemiga.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> Efecto:</Text> Tira seis dados D6. Por cada 4+, esa unidad enemiga sufre 1 herida mortal y este modelo recupera hasta 1 herida perdida.
                </Text> {/** SOMBRAS DE TERROR*/}
                
                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>UNA CORREA LARGA
                   {"\n"} <Text style={{fontSize:16, fontStyle:'italic'}}>ESTRATAGEMA ESTRATÉGICA DEL TRAITORIS LANCE</Text>
                </Text>
                    {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#8a7371', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Los War Dogs de los Chaos Knights temen más a sus señores que al enemigo, y obedecen bien a sus amos, pues conocen el precio de la desobediencia o la deslealtad.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> cuando:</Text> En tu fase de Comando.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> objetivo:</Text> Un modelo Abhorrent de tu ejército y hasta tres modelos War Dog de tu ejército.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> Efecto:</Text> Hasta el inicio de tu próxima fase de Comando, esos modelos War Dog cuentan como estando dentro del rango de cualquier habilidad de Aura que tenga ese modelo Abhorrent.
                </Text> {/** UNA CORREA LARGA*/}

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>CABALLEROS DE LAS SOMBRAS
                   {"\n"} <Text style={{fontSize:16, fontStyle:'italic'}}>ESTRATAGEMA DE HAZAÑA ÉPICA DEL TRAITORIS LANCE</Text>
                </Text>
                    {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#8a7371', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Como fantasmas oscuros, algunos Chaos Knights pueden moverse a través de paredes sólidas sin impedimentos.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> cuando:</Text> En tu fase de Movimiento o de Carga.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> objetivo:</Text> Hasta dos modelos War Dog de tu ejército o un modelo Titanic Chaos Knight de tu ejército.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> Efecto:</Text> Hasta el final de la fase, los modelos seleccionados pueden moverse horizontalmente a través de modelos y elementos del terreno como si no estuvieran allí.
                </Text> {/** CABALLEROS DE LAS SOMBRAS*/}

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>ESCUDO DIABÓLICO
                   {"\n"} <Text style={{fontSize:16, fontStyle:'italic'}}>ESTRATAGEMA DE EQUIPO DE GUERRA DEL TRAITORIS LANCE</Text>
                </Text>
                    {"\n"}<Text style={{ fontSize: 18, backgroundColor: '#8a7371', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    La sangre ectoplasmática fluye caliente a través de conductos resplandecientes mientras el Chaos Knight alimenta de poder a sus emisores de escudo.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> cuando:</Text> En la fase de Disparo de tu oponente, justo después de que una unidad enemiga haya seleccionado sus objetivos.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> objetivo:</Text> Una unidad de Chaos Knights de tu ejército que haya sido seleccionada como objetivo de uno o más ataques de la unidad atacante.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> Efecto:</Text> Hasta el final de la fase, ese modelo Chaos Knights tiene una salvación invulnerable de 4+ contra ataques a distancia.
                </Text> {/** ESCUDO DIABÓLICO*/}

            </Text> {/** Estratagemas*/}
        </ScrollView>
    );
}

/*const styles = StyleSheet.create({
    tableRow: {
        flexDirection: 'row', // Alinear elementos en fila
        borderBottomWidth: 1,
        borderBottomColor: '#2C0069',
      },
    tableCelltop: {
        flex: 1, // Distribuye equitativamente el espacio entre columnas
        alignItems: 'center', // Centra el contenido horizontalmente
        justifyContent: 'center', // Centra el contenido verticalmente
        padding: 5,
        backgroundColor: '#2C0069',
        marginTop: 5,
        fontSize: 10
      },
      tableCell: {
        flex: 1, // Distribuye equitativamente el espacio entre columnas
        alignItems: 'center', // Centra el contenido horizontalmente
        justifyContent: 'center', // Centra el contenido verticalmente
        padding: 5,
        backgroundColor: '#C5ACE3',
        fontSize: 10
      },
      headerText: {
        color: '#fff', fontWeight: 'bold', fontSize: 20
      },
      cellText: {
        fontSize: 14,
        color: '#000',
    
      },
});*/

export default ChaosSpaceMarinesScreen;