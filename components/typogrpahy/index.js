import React from "react";
import { Text, StyleSheet } from "react-native";

const Heading = (props) => {
  return (
    <Text style={(styles.heading, { color: props.color })}>
      {props.children}
    </Text>
  );
};
const Title = (props) => {
  return (
    <Text style={(styles.title, { color: props.color })}>{props.children}</Text>
  );
};
const Subtitle = (props) => {
  return (
    <Text style={(styles.subtitle, { color: props.color })}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 20,
  },
});
export { Heading, Title, Subtitle };
