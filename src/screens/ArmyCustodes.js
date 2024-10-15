// screens/ArmyAdeptaScreen.js
import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const ArmyCustodesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("CustodesRules")}>
        <Image
          resizeMode="stretch"
          source={require("../img/reglas.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#5A756E", paddingVertical: 0 },
  image: { width: width, height: 150, borderRadius: 20, marginBottom: 5 },
});

export default ArmyCustodesScreen;
