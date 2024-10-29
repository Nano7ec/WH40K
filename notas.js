{/**Nombres */ }
<>
  {/**Imagenes */}
  <Image resizeMode="stretch" style={styles.image} source={require('../img/Raveners.png')} />

  {/**Tabla de habilidades */}
  <Text style={styles.border}>
    Habilidades
  </Text>
  <Text style={styles.descrip}>
    <Text style={styles.wapo}>Core:</Text>Deep Strike
    {'\n'}<Text style={styles.wapo}>Faccion:</Text> Synapse
    {'\n'}<Text style={styles.wapo}>Death From Below:</Text> Al final del turno de tu oponente, si esta unidad unidad no está dentro del Alcance de Combate de una o más unidades enemigas, puedes retirarla del campo de batalla y ponerla en Reservas Estratégicas.
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
        <Text style={styles.cellText}>12"</Text>
      </View>
      <View style={styles.tableCell}>
        <Text style={styles.cellText}>3</Text>
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
        <Text style={styles.cellText}>7</Text>
      </View>
      <View style={styles.tableCell}>
        <Text style={styles.cellText}>3+</Text>
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
  <>

 {/**Composicion de las unidades */}
 <Text style={styles.border}>
      Composicion de la min
    </Text>
    <Text style={styles.descrip}>■ 3-6 Raveners
    {'\n'}Every model is equipped with: Ravener claws and talons.
      {'\n'}3 models ............................................................75 pts
      {'\n'}6 models ..........................................................150 pts
      </Text>

  </>
</>
