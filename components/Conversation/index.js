import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Conversation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={{ color: "white" }}>Conversation</Text>
      </View>
      <View style={styles.container2}>
        <Text style={{ color: "white" }}>Conversation1</Text>
        <Text style={{ color: "white" }}>Conversation2</Text>
        <Text style={{ color: "white" }}>Conversation3</Text>
      </View>
      <View style={styles.container3}>
        <View style={styles.view1}>
          <Text style={{ color: "white" }}>A</Text>
          <Text style={{ color: "white" }}>B</Text>
        </View>
        <View style={styles.view1}>
          <Text style={{ color: "white" }}>C</Text>
          <Text style={{ color: "white" }}>D</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "red",
    fontSize: 23,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 5,
    backgroundColor: "green",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  container3: {
    flex: 2,
    backgroundColor: "blue",
    justifyContent: "space-between",
  },
  view1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Conversation;
