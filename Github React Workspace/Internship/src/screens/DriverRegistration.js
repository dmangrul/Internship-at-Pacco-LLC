import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import axios from "axios";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const DriverRegistration = ({ navigation }) => {
  const IMAGE = "../../assets/IMAGE.png";

  const [firstName, setFirstName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [middleInitialError, setMiddleInitialError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const resetVaraibles = () => {
    setFirstName("");
    setMiddleInitial("");
    setLastName("");
    setEmail("");
    setPhoneNo("");
    setUsername("");
    setPassword("");
  };

  const handleFirstName = (text) => {
    //console.log("first name: " + text);
    //validation
    setFirstName(text);
    if (text == "") {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  const handleMiddleInitial = (text) => {
    if (text.length > 1) {
    } else {
      if (text == "") {
        setMiddleInitialError(true);
      } else {
        setMiddleInitialError(false);
      }
      setMiddleInitial(text);
    }
  };

  const handleLastName = (text) => {
    //console.log("last name: " + text);
    //validation
    if (text == "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    setLastName(text);
  };

  const handleEmail = (text) => {
    //console.log("email: " + text);
    //validation
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);

    if (re.test(text) || regex.test(text)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handlePhoneNo = (text) => {
    //console.log("phone: " + text);
    //validation
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setPhoneNo(text);

    if (regex.test(text)) {
      setPhoneNoError(false);
    } else {
      setPhoneNoError(true);
    }
  };

  const handleUsername = (text) => {
    //console.log("username: " + text);
    //validation
    setUsername(text);
    if (text == "") {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  };

  const handlePassword = (text) => {
    //console.log("username: " + text);
    //validation
    let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    setPassword(text);
    if (regex.test(text)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const register = () => {
    axios
      .post("http://10.68.1.170:8081/register", {
        firstName: firstName,
        middleInitial: middleInitial,
        lastName: lastName,
        phoneNumber: phoneNo,
        emailId: email,
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        console.log("^response");
      })
      .catch((error) => alert(error));
  };

  const handleSignIn = async () => {
    /*
    console.log("   ");
    console.log("first name: " + firstName);
    console.log("last name: " + lastName);
    console.log("email: " + email);
    console.log("phone: " + phoneNo);
    console.log("username: " + username);
    console.log("password: " + password);

    console.log("   ");
    console.log("first name error: " + firstNameError);
    console.log("last name error: " + lastNameError);
    console.log("email error: " + emailError);
    console.log("phone error: " + phoneNoError);
    console.log("username error: " + usernameError);
    console.log("password error: " + passwordError);
    

    register();

    */
    if (
      firstName != "" &&
      middleInitial != "" &&
      lastName != "" &&
      email != "" &&
      phoneNo != "" &&
      username != "" &&
      password != ""
    ) {
      if (
        !firstNameError &&
        !middleInitialError &&
        !lastNameError &&
        !emailError &&
        !phoneNoError &&
        !usernameError &&
        !passwordError
      ) {
        axios
          .post("http://10.68.1.170:8081/registerDriver", {
            firstName: firstName,
            middleInitial: middleInitial,
            lastName: lastName,
            phoneNumber: phoneNo,
            emailId: email,
            username: username,
            password: password,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => alert(error));

        resetVaraibles();
        navigation.navigate("DriverVerifyRegistration");
      } else {
        handleFirstName(firstName);
        handleMiddleInitial(middleInitial);
        handleLastName(lastName);
        handleEmail(email);
        handlePhoneNo(phoneNo);
        handleUsername(username);
        handlePassword(password);
      }
    } else {
      handleFirstName(firstName);
      handleMiddleInitial(middleInitial);
      handleLastName(lastName);
      handleEmail(email);
      handlePhoneNo(phoneNo);
      handleUsername(username);
      handlePassword(password);
    }
  };

  return (
    <DismissKeyboard>
      <View style={styles.main}>
        <View style={styles.logo}>
          <Image style={styles.image} source={require(IMAGE)} />
        </View>
        <View style={[styles.login, { marginBottom: 0, marginTop: 20 }]}>
          <TextInput
            placeholder="First Name"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={handleFirstName}
            autoCapitalize="words"
          />
        </View>

        {firstNameError ? (
          <Text style={[styles.forgot]}> Please Enter a First Name </Text>
        ) : (
          <Text style={[styles.forgot]}></Text>
        )}

        <View style={[styles.login, { marginBottom: 0 }]}>
          <TextInput
            placeholder="Middle Initial"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={handleMiddleInitial}
            autoCapitalize="words"
            value={middleInitial}
          />
        </View>

        {middleInitialError ? (
          <Text style={[styles.forgot]}> Please Enter a Middle Initial </Text>
        ) : (
          <Text style={[styles.forgot]}></Text>
        )}

        <View style={[styles.login, { marginBottom: 0 }]}>
          <TextInput
            placeholder="Last Name"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={handleLastName}
            autoCapitalize="words"
          />
        </View>

        {lastNameError ? (
          <Text style={[styles.forgot]}> Please Enter a Last Name </Text>
        ) : (
          <Text style={[styles.forgot]}></Text>
        )}

        <View style={[styles.login, { marginBottom: 0 }]}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={handleEmail}
          />
        </View>

        {emailError ? (
          <Text style={[styles.forgot]}> Incorrect Email Format </Text>
        ) : (
          <Text style={[styles.forgot]}></Text>
        )}

        <View style={[styles.login, { marginBottom: 0 }]}>
          <TextInput
            placeholder="Phone Number"
            keyboardType="phone-pad"
            style={{ flex: 1, paddingVertical: 0 }}
            inputMode="numeric"
            onChangeText={handlePhoneNo}
          />
        </View>

        {phoneNoError ? (
          <Text style={[styles.forgot]}>
            {" "}
            Please Enter a Valid Phone Number{" "}
          </Text>
        ) : (
          <Text style={[styles.forgot]}></Text>
        )}

        <View style={[styles.login, { marginBottom: 0 }]}>
          <TextInput
            placeholder="Username"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={handleUsername}
            autoCapitalize="none"
          />
        </View>

        {usernameError ? (
          <Text style={[styles.forgot]}> Please Enter a Username </Text>
        ) : (
          <Text style={[styles.forgot]}></Text>
        )}

        <View style={[styles.login, { marginBottom: 10 }]}>
          <TextInput
            placeholder="Password"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={handlePassword}
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>

        {passwordError ? (
          <Text style={[styles.forgot]}>
            {" "}
            Valid Password: 1 special character, 1 number, 1 uppercase, 1
            lowercase, 6 characters{" "}
          </Text>
        ) : (
          <Text style={[styles.forgot]}></Text>
        )}

        <TouchableOpacity
          style={[styles.signIn]}
          onPress={() => {
            handleSignIn();
          }}
        >
          <Text style={[styles.text, { flex: 1 }]}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  login: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 5,
    marginBottom: 15,
    backgroundColor: "rgb(235, 235, 235)",
    borderRadius: 5,
    alignItems: "center",
  },
  signIn: {
    backgroundColor: "#fca404",
    flexDirection: "row",
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    padding: 15,
  },
  logo: {
    alignItems: "center",
    padding: 10,
    marginBottom: 5,
  },
  image: {
    height: 100,
    width: 400,
    resizeMode: "contain",
  },
  forgot: {
    marginTop: 0,
    marginBottom: 5,
    color: "red",
    alignSelf: "flex-start",
  },
});

export default DriverRegistration;
