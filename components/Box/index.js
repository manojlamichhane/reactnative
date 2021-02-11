import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Title, Subtitle } from "../typogrpahy";

const Box = (props) => {
  return (
    <View style={{ ...styles.container, backgroundColor: props.color }}>
      {props.children}
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#04bec8",
    borderRadius: 25,
    padding: 10,
    width: 140,
    height: 140,
  },
});
export default Box;
