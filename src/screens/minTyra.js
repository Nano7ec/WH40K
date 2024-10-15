import * as React from "react";
import {
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const MinTyra = () => {
  return (
    <ScrollView>
      <>
        <Text style={styles.border}>Gramatica usada</Text>
        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>Paabra</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>Acronimos</Text>
            </View>
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Movimiento</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>M</Text>
            </View>
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Dureza</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>T</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Salvacion</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>SV</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Heridas</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>W</Text>
            </View>
          </>
        </View>

        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Liderazgo</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>Ld</Text>
            </View>
          </>
        </View>

        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Potencial nominal</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>Oc</Text>
            </View>
          </>
        </View>

        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Arma distancia</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>AD</Text>
            </View>
          </>
        </View>

        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Armas cuerpo a cuerpo</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>ACC</Text>
            </View>
          </>
        </View>

        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Rango</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>R</Text>
            </View>
          </>
        </View>

        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>exito de conexion</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>BS</Text>
            </View>
          </>
        </View>

        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Fuerza</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>S</Text>
            </View>
          </>
        </View>

        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Penetracion de armadura</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>AP</Text>
            </View>
          </>
        </View>

        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Daño</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D</Text>
            </View>
          </>
        </View>
      </>
      {/**Barbguants */}
      <>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/Barbguants.png")}
        />
        <Text style={styles.border}>Habilidades</Text>
        <Text style={styles.descrip}>
          {"\n"}
          <Text style={styles.wapo}>Faccion:</Text> Synapse
          {"\n"}
          <Text style={styles.wapo}>Bombardeo de interrupción:</Text> En tu fase
          de Disparo, después de que esta unidad haya disparado, si una unidad
          de Infantería enemiga fue alcanzada por uno o más de esos ataques
          realizados por los biocañones de esta unidad, hasta el final del
          siguiente turno de tu oponente, esa unidad enemiga queda
          desorganizada.
          {"\n"}Mientras una unidad esté desorganizada, resta 2 a su
          característica Mover, y resta 2 a las tiradas de Avance y Carga que se
          hagan para ella.
        </Text>
        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Bio-cannon [BLAST, HEAVY]</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>24"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Xenos claws and teeth</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
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
          </>
        </View>
        <>
          <Text style={styles.border}>Composicion de la min</Text>
          <Text style={styles.descrip}>
            ■ 5-10 Barbgaunts
            {"\n"}Cada modelo está equipado con: bio-cañón; garras xenos y
            dientes.
          </Text>
        </>
        <Text style={styles.MinDes}>
          5 models
          ............................................................50 pts
          {"\n"}10 models
          .......................................................100 pts
        </Text>
      </>
      {/**Biovores */}
      <>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/Biovores.png")}
        />
        <Text style={styles.border}>Habilidades</Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Core:</Text>Deadly Demise 1{"\n"}
          <Text style={styles.wapo}>Faccion:</Text> Synapse
          {"\n"}
          <Text style={styles.wapo}>Minas de esporas de semillas:</Text> En tu
          fase de Disparo, cada vez que esta unidad sea seleccionada para
          disparar, puede usar esta habilidad en vez de efectuar cualquier
          ataque con sus armas a distancia.
          {"\n"}Si lo hace, puedes añadir una nueva unidad de Minas de esporas a
          tu ejército y colocarla en cualquier lugar del campo de batalla que
          esté a 48" o menos de esta unidad pero a más de 9" en horizontal de
          todas las unidades enemigas. Esa unidad de Minas de esporas contiene 1
          modelo por cada modelo de esta unidad.
        </Text>
        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Spore Mine launcher [BLAST, DEVASTATING WOUNDS, HEAVY,
                  INDIRECT FIRE]
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>48"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>
        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Chitin-barbed limbs </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        <>
          <Text style={styles.border}>Composicion de la min</Text>
          <Text style={styles.descrip}>
            ■ 1-3 Biovores
            {"\n"}Cada modelo está equipado con: Lanzador de minas de esporas;
            extremidades con barras de quitina.
          </Text>
        </>
        <Text style={styles.MinDes}>
          1 model
          ..............................................................40 pts
          {"\n"}2 models
          ............................................................80 pts
          {"\n"}3 models
          ..........................................................120 pts
        </Text>
      </>
      {/**Broodlord */}
      <>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/Broodlord.png")}
        />
        <Text style={styles.border}>Habilidades</Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Core:</Text>Leader, Scouts 8"
          {"\n"}
          <Text style={styles.wapo}>Faccion:</Text> Synapse
          {"\n"}
          <Text style={styles.wapo}>Perspicacia viciosa:</Text> Mientras este
          modelo lidera una unidad, las armas equipadas por los modelos de esa
          unidad tienen la habilidad [HERIDAS DEVASTADORAS].
          {"\n"}
          <Text style={styles.wapo}>Mirada hipnótica (Psíquica):</Text> Al
          inicio de la fase de combate, elige una unidad enemiga a distancia de
          combate de esta miniatura.
          {"\n"}Hasta el fin de la fase, cada vez que una miniatura de esa
          unidad efectúe un ataque, resta 1 a la tirada para golpear.
        </Text>
        <Text style={styles.border}>Invulnerable save 4+</Text>

        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Broodlord claws and talons [DEVASTATING WOUNDS, TWIN-LINKED]
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>25</Text>
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
          </>
        </View>
        <>
          <Text style={styles.border}>Composicion de la min</Text>
          <Text style={styles.descrip}>
            ■ 1-3 Biovores
            {"\n"}Cada modelo está equipado con: Lanzador de minas de esporas;
            extremidades con barras de quitina.
          </Text>
        </>
        <Text style={styles.MinDes}>
          1 model
          ..............................................................40 pts
          {"\n"}2 models
          ............................................................80 pts
          {"\n"}3 models
          ..........................................................120 pts
        </Text>
      </>
      {/**Carnifexes */}
      <>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/Carnifexes.png")}
        />
        <Text style={styles.border}>Habilidades</Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Core:</Text> Deadly Demise 1{"\n"}
          <Text style={styles.wapo}>Faccion:</Text> Synapse
          {"\n"}
          <Text style={styles.wapo}>Asalto abrasador:</Text> Cada vez que una
          unidad enemiga es seleccionada para disparar, después de que esa
          unidad haya disparado, si alguna miniatura de esta unidad perdió una o
          más heridas como resultado de esos ataques, esta unidad puede realizar
          un movimiento de Asalto abrasador.
          {"\n"}Para ello, tira un D6, sumando 2 al resultado.
          {"\n"}cada modelo de esta unidad puede moverse una distancia en
          pulgadas hasta el resultado, pero esta unidad debe terminar ese
          movimiento lo más cerca posible de la unidad enemiga más cercana.
          {"\n"}Al hacerlo, esas miniaturas pueden moverse dentro del Alcance de
          Combate de esa unidad enemiga. Cada unidad sólo puede efectuar un
          movimiento de Asalto abrasador por fase.
        </Text>

        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Bio-plasma [ASSAULT, BLAST]</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D3"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Deathspitters with slimer maggots
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>24"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Devourers with brainleech worms</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>18"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Heavy venom cannon [BLAST]</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>9</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Spine banks [ASSAULT]</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Stranglethorn cannon [BLAST]</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6+1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>

        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Carnifex crushing claws</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6+1</Text>
            </View>
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Carnifex extra scything talons [EXTRA ATTACKS]
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>9</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Carnifex scything talons </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>9</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Xenos claws and teeth </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        <>
          <Text style={styles.border}>OPCIONES DE EQUIPO</Text>
          <Text style={styles.descrip}>
            ■ Cualquier número de modelos puede tener cada uno sus garras de
            guadaña extra Carnifex reemplazados por uno de los las siguientes:
            {"\n"}◦ 1 deathspitters with slimer maggots
            {"\n"}◦ 1 devourers with brainleech worms
            {"\n"}◦ 1 heavy venom cannon
            {"\n"}◦ 1 stranglethorn cannon
            {"\n"}◦ 1 Carnifex crushing claws
            {"\n"}■ Cualquier número de modelos puede tener cada uno sus garras
            trituradoras de Carnifex reemplazadas por una de las
            {"\n"}los siguientes:
            {"\n"}◦ 1 deathspitters with slimer maggots
            {"\n"}◦ 1 devourers with brainleech worms
            {"\n"}◦ 1 Carnifex crushing claws
            {"\n"}■ Cualquier número de modelos pueden equiparse cada uno con 1
            bioplasma.
            {"\n"}■ Cualquier número de modelos puede equiparse cada uno con 1
            bancos de espinas.
          </Text>
        </>

        <Text style={styles.border}>COMPOSICIÓN DE LA UNIDAD</Text>
        <Text style={styles.descrip}>
          ■ 1-2 Carnifexes
          {"\n"}Cada modelo está equipado con: Garras guadañadoras Carnifex;
          {"\n"}Garras guadañadoras adicionales Carnifex; garras y dientes
          xenos.
        </Text>
        <Text style={styles.MinDes}>
          1 model
          ..............................................................125 pts
          {"\n"}2 models
          ............................................................250 pts
        </Text>
      </>
      {/**Deathleaper */}
      <>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/Deathleaper.png")}
        />
        <Text style={styles.border}>Habilidades</Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Core:</Text> : Fights First, Infiltrators,
          Lone Operative, Stealth
          {"\n"}
          <Text style={styles.wapo}>Faccion:</Text> Synapse
          {"\n"}
          <Text style={styles.wapo}>Feeder Tendrils:</Text> Cada vez que este
          modelo destruye un modelo de Personaje enemigo, ganas 1CP.
          {"\n"}
          <Text style={styles.wapo}>Fear of the Unseen (Aura):</Text> Mientras
          una unidad enemiga esté a 6" o menos de esta miniatura, empeora el
          atributo Liderazgo de las miniaturas de esa unidad en 1.
          {"\n"}Además, en el paso de Conmoción de batalla de la fase de Mando
          de tu oponente, si esa unidad enemiga está por debajo de su Fuerza
          inicial, debe efectuar un Battle-shock test.
        </Text>

        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Lictor claws and talons [PRECISION]
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>

        <Text style={styles.border}>COMPOSICIÓN DE LA UNIDAD</Text>
        <Text style={styles.descrip}>
          ■ 1 Deathleaper - Epic Hero
          {"\n"}Este modelo está equipado con: Garras y garras de Lictor.
        </Text>

        <Text style={styles.border}>ORGANISMO CAZADOR</Text>
        <Text style={styles.descrip}>
          Este modelo no puede ser tu Señor de la Guerra.
        </Text>
        <Text style={styles.MinDes}>
          1 model
          ..............................................................80 pts
        </Text>
      </>

      {/**Exocrine */}
      <>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/Exocrine.png")}
        />
        <Text style={styles.border}>DAMAGED:</Text>
        <Text style={styles.descrip}>
          {"\n"}1-5 HERIDAS RESTANTES Mientras este modelo tenga 1-5 heridas
          restantes, cada vez que este modelo haga un ataque, resta 1 de la
          tirada para golpear.
        </Text>

        <Text style={styles.border}>ORGANISMO CAZADOR</Text>
        <Text style={styles.descrip}>
          Este modelo no puede ser tu Señor de la Guerra.
        </Text>
        <Text style={styles.MinDes}>
          1 model
          ..............................................................80 pts
        </Text>

        {/* Cabecera de la tabla daño distancia */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla de armas distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Bio-plasmic cannon [BLAST, HEAVY]
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6+3"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>8</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>

        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Powerful limbs</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>

        <Text style={styles.border}>COMPOSICIÓN DE LA UNIDAD</Text>
        <Text style={styles.descrip}>
          ■ 1 Deathleaper - Epic Hero
          {"\n"}Este modelo está equipado con: Garras y garras de Lictor.
        </Text>

        <Text style={styles.border}>ORGANISMO CAZADOR</Text>
        <Text style={styles.descrip}>
          Este modelo no puede ser tu Señor de la Guerra.
        </Text>
        <Text style={styles.MinDes}>
          1 model
          ..............................................................80 pts
        </Text>
      </>
      {/**Gargoyles */}
      <>
        {/**Imagenes */}
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/Gargoyles.png")}
        />

        {/**Tabla de habilidades */}
        <Text style={styles.border}>Habilidades</Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Core:</Text>: Deep Strike
          {"\n"}
          <Text style={styles.wapo}>Faccion:</Text> Shadow in the Warp, Synapse
          {"\n"}
          <Text style={styles.wapo}>Winged Swarm:</Text> En tu fase de Disparo,
          después de que esta unidad haya disparado, si no está a distancia de
          combate de ninguna unidad enemiga, puede hacer un movimiento Normal de
          hasta 6".
          {"\n"}Si lo hace, hasta el final del turno, esta unidad no puede
          declarar una carga.
        </Text>

        {/* Cabecera de la tabla daño distancia */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla de armas distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Fleshborer [ASSAULT]</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>18"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>

        {/* Cabecera de la tabla daño cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla armas cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Blinding venom</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        <>
          {/**Reglas extras */}
          <Text style={styles.border}>Composicion de la min</Text>
          <Text style={styles.descrip}>
            ■ 10-20 Gargoyles
            {"\n"}Cada modelo está equipado con: perforador de carne; veneno
            cegador.
          </Text>

          {/**Composicion de las unidades */}
          <Text style={styles.border}>Composicion de la min</Text>
          <Text style={styles.descrip}>
            ■ 1 WingedHiveTyrant.
            {"\n"}Este modelo va equipado con: espada de huesos monstruosa y
            látigo azotador; garras de tirano.
            {"\n"}10 models
            .........................................................75 pts
            {"\n"}20 models
            ........................................................150 pts
          </Text>
        </>
      </>

      {/**Genestealers */}
      <>
        {/**Imagenes */}
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/Genestealers.png")}
        />

        {/**Tabla de habilidades */}
        <Text style={styles.border}>Habilidades</Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Core:</Text>: Scouts 8"
          {"\n"}
          <Text style={styles.wapo}>Faccion:</Text> Shadow in the Warp, Synapse
          {"\n"}
          <Text style={styles.wapo}>Vanguard Predator:</Text> Cada vez que una
          miniatura de esta unidad ataque, repite la tirada de 1 para Herir.
          {"\n"}Si el objetivo está dentro del alcance de un marcador de
          objetivo, puedes repetir la tirada para Herir.
        </Text>

        {/**Invulnerabilidad */}
        <Text style={styles.border}>Invulnerable Save 5+</Text>

        {/* Cabecera de la tabla daño cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla armas cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Genestealer claws and talons </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        <>
          {/**Reglas extras */}
          <Text style={styles.border}>Composicion de la min</Text>
          <Text style={styles.descrip}>
            ■ 5-10 Genestealers
            {"\n"}Cada modelo está equipado con: Garras Genestealer
            {"\n"}5 models
            ............................................................90 pts
            {"\n"}10 models
            .......................................................180 pts
          </Text>
        </>
      </>

      {/**Harpy */}
      <>
        {/**Imagenes */}
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/Harpy.png")}
        />

        {/**Tabla de habilidades */}
        <Text style={styles.border}>Habilidades</Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Core:</Text> Deadly Demise D3, Hover
          {"\n"}
          <Text style={styles.wapo}>Faccion:</Text> Shadow in the Warp, Synapse
          {"\n"}
          <Text style={styles.wapo}>Spore Mine Cysts: </Text> Una vez por turno,
          una unidad Tiránida en un radio de 12" de una o más miniaturas con
          esta habilidad.
          {"\n"} objetivo con una Estratagema por 0 PJ, incluso si otra unidad
          de tu ejército ya ha sido objetivo con esa Estratagema esta fase.
          {"\n"}
          <Text style={styles.wapo}>Paroxismo (Psíquico):</Text> Al inicio de la
          fase de combate, puedes seleccionar una unidad enemiga a 12" o menos y
          visible para esta miniatura y tirar un D6: con un 1, este Psyker sufre
          D3 heridas mortales; con un 2+, hasta el final de la fase, resta 1 al
          atributo Attacks de las armas equipadas por las miniaturas de esa
          unidad.
        </Text>

        {/**Tabla de habilidades */}
        <Text style={styles.border}>DAMAGED: 1-4 WOUNDS REMAINING</Text>
        <Text style={styles.descrip}>
          Mientras este modelo tenga 1-4 heridas restantes, cada vez que este
          modelo realice un ataque, resta 1 de la tirada para golpear.
        </Text>

        {/* Cabecera de la tabla daño distancia */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla de armas distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Stinger salvoes </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>24"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>8</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla de armas distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Twin heavy venom cannon [BLAST, TWIN-LINKED]
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>9</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla de armas distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Twin stranglethorn cannon [BLAST, TWIN-LINKED]
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6+1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>

        {/* Cabecera de la tabla daño cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla armas cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Scything wings</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>
        <>
          {/**Reglas extras */}
          <Text style={styles.border}>Opciones de equipo</Text>
          <Text style={styles.descrip}>
            ■ 1 WingedHiveTyrant.
            {"\n"}■ El cañón gemelo de estrangulamiento de este modelo puede
            sustituirse por 1 cañón pesado gemelo de veneno.
          </Text>

          {/**Composicion de las unidades */}
          <Text style={styles.border}>Composicion de la min</Text>
          <Text style={styles.descrip}>
            ■ 1 Harpy
            {"\n"}Este modelo va equipado con: salvas de aguijón; cañones
            gemelos de estrangulamiento; alas de guadaña.
            {"\n"}1 model
            ............................................................170 pts
          </Text>
        </>
      </>

      {/**Haruspex */}
      <>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/Haruspex.png")}
        />

        {/**Tabla de habilidades */}
        <Text style={styles.border}>Habilidades</Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Core:</Text>Deadly Demise D3
          {"\n"}
          <Text style={styles.wapo}>Faccion:</Text>Synapse
          {"\n"}
          <Text style={styles.wapo}>Grisly Spectacle:</Text> Cada vez que esta
          miniatura es seleccionada para combatir, tras resolver sus ataques, si
          una o más unidades enemigas fueron destruidas por esos ataques, cada
          unidad enemiga a 6" o menos de esta miniatura debe realizar
          Battle-shock test.
        </Text>

        {/**Tabla de habilidades */}
        <Text style={styles.border}>DAMAGED: 1-5 WOUNDS REMAINING</Text>
        <Text style={styles.descrip}>
          Mientras este modelo tenga 1-5 heridas restantes, cada vez que este
          modelo haga un ataque, resta 1 de la tirada para golpear.
        </Text>

        {/* Cabecera de la tabla daño distancia */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla de armas distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Grasping tongue [PRECISION]</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6+1</Text>
            </View>
          </>
        </View>

        {/* Cabecera de la tabla daño cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla armas cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Ravenous maw</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>14</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla armas cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Shovelling claws [EXTRA ATTACKS]
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>14</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6+1</Text>
            </View>
          </>
        </View>
        <>
          {/**Composicion de las unidades */}
          <Text style={styles.border}>Composicion de la min</Text>
          <Text style={styles.descrip}>
            ■ 1 Haruspex
            {"\n"}Lengua que agarra; fauces voraces; garras que palanquean.
            {"\n"}1 model
            ............................................................125 pts
          </Text>
        </>
      </>

      {/**Hive Crone */}
      <>
        {/**Imagenes */}
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/Hivecrone.png")}
        />

        {/**Tabla de habilidades */}
        <Text style={styles.border}>Habilidades</Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Core:</Text>Deadly Demise D3, Hover
          {"\n"}
          <Text style={styles.wapo}>Faccion:</Text> Shadow in the Warp, Synapse
          {"\n"}
          <Text style={styles.wapo}>Airborne Predator:</Text> Cada vez que este
          modelo realice un ataque a distancia que tenga como objetivo una
          unidad que pueda Volar, suma 1 a la tirada para golpear.
        </Text>

        <Text style={styles.border}>DAMAGED: 1-4 WOUNDS REMAINING</Text>
        <Text style={styles.descrip}>
          Mientras a este modelo le queden 1-4 heridas, cada vez que realice un
          ataque, resta 1 a la tirada para golpear.
        </Text>

        {/* Cabecera de la tabla daño distancia */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla de armas distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Drool cannon [TORRENT]</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2D6"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>N/A"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        {/* Filas de la tabla de armas distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Stinger salvoes</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>24"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>8"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        {/* Filas de la tabla de armas distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Tentaclids [ANTI-VEHICLE 4+, DEVASTATING WOUNDS]
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>

        {/* Cabecera de la tabla daño cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla armas cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Scything wings </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>
        {/* Filas de la tabla armas cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Thorax spur [ANTI-FLY 2+, EXTRA ATTACKS]{" "}
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>10</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6</Text>
            </View>
          </>
        </View>
        <>
          {/**Reglas extras */}
          <Text style={styles.border}>Composicion de la min</Text>
          <Text style={styles.descrip}>
            ■ 1 WingedHiveTyrant.
            {"\n"}Este modelo va equipado con: espada de huesos monstruosa y
            látigo azotador; garras de tirano.
          </Text>

          {/**Composicion de las unidades */}
          <Text style={styles.border}>Composicion de la min</Text>
          <Text style={styles.descrip}>
            ■ 1 Hive Crone.
            {"\n"}Este modelo va equipado con: espada de huesos monstruosa y
            látigo azotador; drool cannon; stinger salvoes; tentaclids; scything
            wings; thorax spur.
            {"\n"}1 model
            ............................................................200 pts
          </Text>
        </>
      </>

      {/**HiveGuard aun no la inicio*/}
      <>
        {/**Imagenes */}
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/Hiveguard.png")}
        />

        {/**Tabla de habilidades */}
        <Text style={styles.border}>Habilidades</Text>
        <Text style={styles.descrip}>
          {"\n"}
          <Text style={styles.wapo}>Faccion:</Text>Synapse
          {"\n"}
          <Text style={styles.wapo}>Defensive Stance:</Text>: Cada vez que
          apuntas a esta unidad con la Estratagema Fuego, mientras se resuelve
          esa Estratagema, los impactos se obtienen con tiradas para golpear no
          modificadas de 5+, o tiradas para golpear no modificadas de 4+ si esta
          unidad está dentro del alcance de un marcador de objetivo.
        </Text>

        {/* Cabecera de la tabla daño distancia */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla de armas distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Impaler cannon [HEAVY, INDIRECT FIRE]
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla de armas distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Shockcannon [ANTI-VEHICLE 2+]</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>

        {/* Cabecera de la tabla daño cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>

        {/* Filas de la tabla armas cuerpo a cuerpo */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Xenos claws and teeth</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        <>
          {/**Reglas extras */}
          <Text style={styles.border}>opciones de armamento</Text>
          <Text style={styles.descrip}>
            ■ Cualquier número de modelos puede tener cada uno su cañón de
            choque reemplazado por 1 cañón empalador.
          </Text>

          {/**Reglas extras */}
          <Text style={styles.border}>opciones de armamento</Text>
          <Text style={styles.descrip}></Text>

          {/**Composicion de las unidades */}
          <Text style={styles.border}>Composicion de la min</Text>
          <Text style={styles.descrip}>
            ■ 1 WingedHiveTyrant.
            {"\n"}Este modelo va equipado con: espada de huesos monstruosa y
            látigo azotador; garras de tirano.
            {"\n"}10 models
            .........................................................75 pts
            {"\n"}20 models
            ........................................................150 pts
          </Text>
        </>
      </>

      {/**WingedHiveTyrant */}
      <>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require("../img/WingedHiveTyrant.png")}
        />
        <Text style={styles.border}>Habilidades</Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Core:</Text>Deadly Demise D3, Deep Strike
          {"\n"}
          <Text style={styles.wapo}>Faccion:</Text> Shadow in the Warp, Synapse
          {"\n"}
          <Text style={styles.wapo}>Voluntad de la Mente Colmena:</Text> Una vez
          por turno, una unidad Tiránida en un radio de 12" de una o más
          miniaturas con esta habilidad.
          {"\n"} objetivo con una Estratagema por 0 PJ, incluso si otra unidad
          de tu ejército ya ha sido objetivo con esa Estratagema esta fase.
          {"\n"}
          <Text style={styles.wapo}>Paroxismo (Psíquico):</Text> Al inicio de la
          fase de combate, puedes seleccionar una unidad enemiga a 12" o menos y
          visible para esta miniatura y tirar un D6: con un 1, este Psyker sufre
          D3 heridas mortales; con un 2+, hasta el final de la fase, resta 1 al
          atributo Attacks de las armas equipadas por las miniaturas de esa
          unidad.
        </Text>
        <Text style={styles.border}>Invulnerable Save 4+</Text>

        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Heavy venom cannon [BLAST]</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D3"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>9</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Stranglethorn cannon [BLAST]</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6+1"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>

        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
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
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Monstrous bonesword and lash whip [TWIN-LINKED]
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>9</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>
                  Monstrous scything talons [EXTRA ATTACKS]
                </Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>
                <Text style={styles.wapo}>Tyrant talons</Text>
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>
        <>
          <Text style={styles.border}>Composicion de la min</Text>
          <Text style={styles.descrip}>
            ■ 1 WingedHiveTyrant.
            {"\n"}Este modelo va equipado con: espada de huesos monstruosa y
            látigo azotador; garras de tirano.
          </Text>
        </>
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  border: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#2C0069",
    fontSize: 20,
    padding: 5,
    marginTop: 6,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  descrip: {
    fontSize: 18,
    backgroundColor: "#C5ACE3",
    color: "#000000",
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: { width: width, height: 100, borderRadius: 20, marginTop: 15 },
  tableRow: {
    flexDirection: "row", // Alinear elementos en fila
    borderBottomWidth: 1,
    borderBottomColor: "#2C0069",
  },
  tableCelltop: {
    flex: 1, // Distribuye equitativamente el espacio entre columnas
    alignItems: "center", // Centra el contenido horizontalmente
    justifyContent: "center", // Centra el contenido verticalmente
    padding: 5,
    backgroundColor: "#2C0069",
    marginTop: 5,
    fontSize: 10,
  },
  tableCell: {
    flex: 1, // Distribuye equitativamente el espacio entre columnas
    alignItems: "center", // Centra el contenido horizontalmente
    justifyContent: "center", // Centra el contenido verticalmente
    padding: 5,
    backgroundColor: "#C5ACE3",
    fontSize: 10,
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  cellText: {
    fontSize: 14,
    color: "#000",
  },
  wapo: {
    color: "#2C0069",
    fontWeight: "bold",
  },
  MinDes: {
    fontSize: 18,
    color: "#000000",
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 3,
  },
});

export default MinTyra;
