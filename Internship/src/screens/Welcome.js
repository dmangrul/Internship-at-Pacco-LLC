import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          color: "#45cccc",
          fontWeight: "600",
          fontFamily: "Gill Sans",
        }}
      >
        Welcome to
      </Text>

      <View style={styles.logo}>
        <Image style={styles.image} source={require(IMAGE)} />
      </View>

      <Text
        style={{
          fontSize: 30,
          color: "#45cccc",
          fontWeight: "600",
          fontFamily: "Gill Sans",
          marginBottom: 25,
        }}
      >
        Are you a:
      </Text>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 50,
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => navigation.navigate("DriverLogin")}
        >
          <Text style={styles.text}>Driver</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", paddingHorizontal: 50 }}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => navigation.navigate("CustomerLogin")}
        >
          <Text style={styles.text}>Customer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    paddingHorizontal: 25,
    marginVertical: 10,
    marginBottom: 15,
  },
  image: {
    height: 100,
    width: 400,
    resizeMode: "contain",
  },
  signIn: {
    backgroundColor: "#fca404",
    borderRadius: 5,
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    padding: 15,
  },
});

export default Welcome;
