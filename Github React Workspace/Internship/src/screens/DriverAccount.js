import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import axios from "axios";

const DriverAccount = () => {
  //const REST_API_URL = "http://10.68.1.170:8080/api/restapicall";
  const REST_API_URL = "http://10.68.1.170:8080/api/address";

  const [apiResponse, setApiResponse] = useState("");
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const api_call = () => {
    axios.get(REST_API_URL).then((response) => {
      console.log(response);
      setStreet1(response.data.streetAddress1);
      setStreet2(response.data.streetAddress2);
      setCity(response.data.city);
      setState(response.data.state);
      setZip(response.data.zipCode);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Available Packages:</Text>
      <Button
        title="Call REST API"
        onPress={() => {
          console.log(" ");
          console.log("Clicked");
          api_call();
        }}
      />
      <Text>{apiResponse}</Text>
      <Text></Text>
      <Text>Street 1: {street1}</Text>
      <Text>Street 2: {street2}</Text>
      <Text>City: {city}</Text>
      <Text>State: {state}</Text>
      <Text>Zip Code: {zip}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: "#45cccc",
    fontWeight: "600",
    fontFamily: "Gill Sans",
  },
});

export default DriverAccount;
