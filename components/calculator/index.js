import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Keypad from "../Keypad";
import Double from "../Double";
import Vertical from "../Vertical";
import { Feather } from "@expo/vector-icons";

const Calculator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 100 }}>0</Text>
      </View>
      <View style={{ flex: 4, backgroundColor: "white", padding: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Keypad number="1" />
              <Keypad number="2" />
              <Keypad number="3" />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Keypad number="4" />
              <Keypad number="5" />
              <Keypad number="6" />
            </View>
          </View>
          <View>
            <Feather
              style={{
                backgroundColor: "grey",
                width: 90,
                height: 220,

                borderRadius: 20,
              }}
              name="delete"
              size={40}
              color="black"
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Keypad number="7" />
              <Keypad number="8" />
              <Keypad number="9" />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Double number="0" />
              <Keypad number="." />
            </View>
          </View>
          <View>
            <Vertical number="OK" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  header: {
    flex: 1,
    margin: 20,
    padding: 10,
    backgroundColor: "grey",
    alignItems: "flex-end",
  },
  keypad: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  key: {
    backgroundColor: "grey",
  },
});
export default Calculator;
