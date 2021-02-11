import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Double = (props) => {
  return (
    <View>
      <View style={styles.key}>
        <Text style={{ fontSize: 30 }}>{props.number}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  key: {
    width: 90,
    height: 220,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
export default Double;
