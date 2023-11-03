import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomerVerifyRegistration = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.text}>Customer Registered Successfully</Text>
      </View>
      <View>
        <Text style={styles.text}>You will receive a verification email</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => {
            navigation.navigate("CustomerLogin");
          }}
        >
          <Text style={[styles.text, { color: "white" }]}>
            Return to Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signIn: {
    backgroundColor: "#fca404",
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: "#45cccc",
    fontWeight: "600",
    fontFamily: "Gill Sans",
  },
});

export default CustomerVerifyRegistration;
