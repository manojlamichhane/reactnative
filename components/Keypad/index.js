import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Keypad = (props) => {
  return (
    <View>
      <View style={styles.key}>
        <Text style={{ fontSize: 80 }}>{props.number}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  key: {
    width: 80,
    backgroundColor: "grey",
    alignItems: "center",
    borderRadius: 20,
  },
});
export default Keypad;
