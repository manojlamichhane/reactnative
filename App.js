import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Posts from "./components/Fragments/index";
import { Subtitle, Title, Heading } from "./components/Typography";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Heading>Header</Heading>
      </View>
      <View style={styles.body}>
        <Image alt style={styles.image}></Image>
        <Title>Jhon Smith</Title>
        <Subtitle>UI/UX Designer</Subtitle>
        <Text
          numberOfLines={4}
          style={{ marginTop: 50, marginBottom: 50, fontSize: 20 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <Posts title="250" Subtitle="Post" />
          <Posts title="2500" Subtitle="Following" />
          <Posts title="1500" Subtitle="Followers" />
          {/* <Fragments  title="250" Subtitle="Post"/>
          <Fragments title="2500" Subtitle="Following" />
          <Fragments title="1500" Subtitle="Followers" /> */}
        </View>
        <View style={{ marginTop: 50 }}>
          <View style={styles.header}>
            <Heading>Follow</Heading>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "grey",
    borderStyle: "solid",
    borderRadius: 10,
    alignItems: "center",
  },
  body: {
    backgroundColor: "white",
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 35,
    borderColor: "grey",
    borderWidth: 4,
  },
});
