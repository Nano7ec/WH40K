import React from "react";
import { Image, StyleSheet, Dimensions, View, Pressable } from "react-native";

const { width } = Dimensions.get("window");

const ArmyBlacktemplarsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("BlacktemplarsRules")}>
        <Image
          resizeMode="stretch"
          source={require("../img/reglas.png")}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#5A756E", paddingVertical: 0 },
  image: { width: width, height: 150, borderRadius: 20, marginBottom: 5 },
});

export default ArmyBlacktemplarsScreen;
