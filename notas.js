{/**Nombre */ }
<>
  {/**Imagenes */}
  <Image resizeMode="stretch" style={styles.image} source={require('../img/WingedHiveTyrant.png')} />

  {/**Tabla de habilidades */}
  <Text style={styles.border}>
    Habilidades
  </Text>
  <Text style={styles.descrip}>
    <Text style={styles.wapo}>Core:</Text>Deadly Demise D3, Deep Strike
    {'\n'}<Text style={styles.wapo}>Faccion:</Text> Shadow in the Warp, Synapse
    {'\n'}<Text style={styles.wapo}>Voluntad de la Mente Colmena:</Text> Una vez por turno, una unidad Tiránida en un radio de 12" de una o más miniaturas con esta habilidad.
    {'\n'} objetivo con una Estratagema por 0 PJ, incluso si otra unidad de tu ejército ya ha sido objetivo con esa Estratagema esta fase.
    {'\n'}<Text style={styles.wapo}>Paroxismo (Psíquico):</Text> Al inicio de la fase de combate, puedes seleccionar una unidad enemiga a 12" o menos y visible para esta miniatura y tirar un D6: con un 1, este Psyker sufre D3 heridas mortales; con un 2+, hasta el final de la fase, resta 1 al atributo Attacks de las armas equipadas por las miniaturas de esa unidad.
  </Text>

  {/**Invulnerabilidad */}
  <Text style={styles.border}>
    Invulnerable Save    4+
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

        <Text style={styles.cellText}><Text style={styles.wapo}>Heavy venom cannon [BLAST]</Text></Text>
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

        <Text style={styles.cellText}><Text style={styles.wapo}>Monstrous bonesword and lash whip [TWIN-LINKED]</Text></Text>
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
  <>

{/**Reglas extras */}
<Text style={styles.border}>
      Composicion de la min
    </Text>
    <Text style={styles.descrip}>■ 1 WingedHiveTyrant.
      {'\n'}Este modelo va equipado con: espada de huesos monstruosa y látigo azotador; garras de tirano.</Text>

 {/**Composicion de las unidades */}
 <Text style={styles.border}>
      Composicion de la min
    </Text>
    <Text style={styles.descrip}>■ 1 WingedHiveTyrant.
      {'\n'}Este modelo va equipado con: espada de huesos monstruosa y látigo azotador; garras de tirano.
      {'\n'}10 models .........................................................75 pts
      {'\n'}20 models ........................................................150 pts
      </Text>

  </>
</>

