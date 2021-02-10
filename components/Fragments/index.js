import React from "react";
import { View } from "react-native";
import { Title, Subtitle } from "../Typography";

const Posts = (props) => {
  return (
    <View>
      <Title style={{ alignItems: "center" }}>{props.title}</Title>
      <Subtitle style={{ alignItems: "center" }}>{props.Subtitle}</Subtitle>
    </View>
  );
};

export default Posts;
