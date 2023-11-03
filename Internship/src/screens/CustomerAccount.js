import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  TouchableOpacity,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const CustomerAccount = () => {
  const data = ["Document", "Box"];
  const [sourceAddress, setSourceAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [packageType, setPackageType] = useState("");

  const [emptySource, setEmptySource] = useState(false);
  const [emptyDestination, setEmptyDestination] = useState(false);

  const handleSource = (text) => {
    if (text == "") {
      setEmptySource(true);
    } else {
      setEmptySource(false);
    }
    setSourceAddress(text);
  };

  const handleDestination = (text) => {
    if (text == "") {
      setEmptyDestination(true);
    } else {
      setEmptyDestination(false);
    }
    setDestinationAddress(text);
  };

  const handleType = (type) => {
    setPackageType(type);
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View>
          <MaterialCommunityIcons
            name="truck-delivery-outline"
            size={150}
            color="#45cccc"
          />
        </View>
        <View style={styles.login}>
          <TextInput
            placeholder="Source Address"
            keyboardType="default"
            style={{ flex: 1, paddingVertical: 0 }}
            multiline={true}
            numberOfLines={5}
            onChangeText={handleSource}
            autoCapitalize="words"
          />
        </View>
        {emptySource ? (
          <Text style={[styles.forgot]}> Please Enter Source Address </Text>
        ) : (
          <Text style={[styles.forgot]}></Text>
        )}

        <View style={[styles.login, { marginBottom: 0 }]}>
          <TextInput
            placeholder="Destination Address"
            keyboardType="default"
            style={{ flex: 1, paddingVertical: 0 }}
            multiline={true}
            numberOfLines={5}
            onChangeText={handleDestination}
            autoCapitalize="words"
          />
        </View>
        {emptyDestination ? (
          <Text style={[styles.forgot]}>
            Please Enter a Destination Address
          </Text>
        ) : (
          <Text style={[styles.forgot]}></Text>
        )}
        <View style={{ width: "100%" }}>
          <SelectList
            data={data}
            placeholder="Package Type"
            setSelected={handleType}
            search={false}
            boxStyles={styles.package}
            dropdownStyles={{ marginBottom: 25 }}
            inputStyles={{ marginLeft: 0 }}
          />
        </View>

        <View styles={{ paddingVertical: 15 }}>
          <TouchableOpacity
            style={[styles.signIn]}
            onPress={() => {
              console.log(" ");
              console.log("Source Address: " + sourceAddress);
              console.log("Destination Address: " + destinationAddress);
              console.log("Package Type: " + packageType);
            }}
          >
            <Text style={[styles.text]}>Submit Package</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
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
  forgot: {
    marginTop: 0,
    marginBottom: 10,
    color: "red",
    alignSelf: "flex-start",
  },
  package: {
    backgroundColor: "rgb(235, 235, 235)",
    marginBottom: 25,
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
    paddingVertical: 15,
  },
});

export default CustomerAccount;
