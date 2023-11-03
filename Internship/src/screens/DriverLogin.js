import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import axios from "axios";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const DriverLogin = ({ navigation }) => {
  const IMAGE = "../../assets/IMAGE.png";

  const [username, setUsername] = useState("");
  const [emptyUsername, setEmptyUsername] = useState(" ");
  const [password, setPassword] = useState("");
  const [emptyPassword, setEmptyPassword] = useState(" ");

  const [isValid, setIsValid] = useState(false);

  //const [errors, setErrors] = useState([]);

  const resetVaraibles = () => {
    setUsername("");
    setPassword("");
  };

  const handleUsername = (text) => {
    console.log("username: " + text);
    if (text === "") {
      setEmptyUsername("Username Should Not Be Empty");
    } else {
      setEmptyUsername("");
    }
    setUsername(text);
  };

  const handlePassword = (text) => {
    console.log("password: " + text);
    if (text === "") {
      setEmptyPassword("Password Should Not Be Empty");
    } else {
      setEmptyPassword("");
    }
    setPassword(text);
  };

  const handleSubmit = () => {
    console.log("       ");
    console.log("submitted");
    console.log("username: " + username);
    console.log("password: " + password);
    /*
    setErrors(Validation(username, password));
    console.log(errors);
    console.log(errors.length);
    */
    console.log("  ");
    console.log(emptyUsername);
    console.log(emptyPassword);

    if (username === "") {
      setEmptyUsername("Username Should Not Be Empty");
    }
    if (password === "") {
      setEmptyPassword("Password Should Not Be Empty");
    }

    if (emptyUsername == "" && emptyPassword == "") {
      axios
        .post("http://10.68.1.170:8081/loginDriver", {
          username: username,
          password: password,
        })
        .then((response) => {
          //console.log(response);
          if (response.data === "Success") {
            resetVaraibles();
            navigation.navigate("DriverAccount");
          } else {
            resetVaraibles();
            Alert.alert(response.data, "Click Ok to Try Again", [
              {
                text: "OK",
                onPress: () => {
                  navigation.navigate("DriverLogin");
                },
              },
            ]);
          }
        })
        .catch((error) => alert(error));

      resetVaraibles();
    }
  };

  return (
    <DismissKeyboard>
      <View
        style={[
          { flex: 1, backgroundColor: "white", justifyContent: "center" },
        ]}
      >
        <View style={{ paddingHorizontal: 25 }}>
          <View style={styles.logo}>
            <Image style={styles.image} source={require(IMAGE)} />
          </View>

          <View style={styles.login}>
            <TextInput
              placeholder="Username"
              keyboardType="default"
              style={{ flex: 1, paddingVertical: 0 }}
              value={username}
              onChangeText={handleUsername}
              autoCapitalize="none"
            />
          </View>
          <Text
            style={[styles.forgot, { color: "red", alignSelf: "flex-start" }]}
          >
            {emptyUsername}
          </Text>

          <View style={[styles.login, { marginBottom: 0 }]}>
            <TextInput
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={true}
              value={password}
              style={{ flex: 1, paddingVertical: 0 }}
              onChangeText={handlePassword}
              autoCapitalize="none"
            />
          </View>
          <Text
            style={[
              styles.forgot,
              { color: "red", alignSelf: "flex-start", marginBottom: 0 },
            ]}
          >
            {emptyPassword}
          </Text>

          <View style={styles.forgot}>
            <Button
              title="Forgot Password?"
              style={styles.forgot}
              color={"black"}
            />
          </View>

          <TouchableOpacity style={styles.signIn} onPress={handleSubmit}>
            <Text style={styles.text}>SIGN IN</Text>
          </TouchableOpacity>

          <View style={styles.signUp}>
            <Text style={{ fontSize: 20 }}>Dont have an account?</Text>
            <Button
              title="Sign up"
              color={"#fca404"}
              onPress={() => navigation.navigate("DriverRegistration")}
            />
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  register: {
    fontSize: 20,
    textAlign: "center",
    padding: 15,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 15,
  },
  signUp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    alignItems: "center",
  },
  login: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 5,
    marginBottom: 0,
    backgroundColor: "rgb(235, 235, 235)",
    borderRadius: 5,
    alignItems: "center",
  },
  signIn: {
    backgroundColor: "#fca404",
  },
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    padding: 15,
  },
  forgot: {
    alignSelf: "flex-end",
    marginTop: 0,
    marginBottom: 15,
  },
  logo: { alignItems: "center", padding: 10, marginBottom: 50 },
  image: {
    height: 100,
    width: 400,
    resizeMode: "contain",
  },
});

export default DriverLogin;
