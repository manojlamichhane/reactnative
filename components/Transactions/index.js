import React from "react";
import { View, StyleSheet } from "react-native";
import { Title, Subtitle } from "../typogrpahy";

const Transactions = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        {props.children}
        <View style={{ paddingLeft: 20 }}>
          <Title>{props.title}</Title>
          <Subtitle>{props.subtitle}</Subtitle>
        </View>
      </View>
      <Subtitle>{props.amount}</Subtitle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
export default Transactions;
