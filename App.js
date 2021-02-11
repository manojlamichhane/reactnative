import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Heading, Title, Subtitle } from "./components/typogrpahy";
import Header from "./components/Header";
import Box from "./components/Box";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Transactions from "./components/Transactions";
import { Fontisto } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ padding: 20 }}>
        <Heading color="white">Your Balance</Heading>
        <Title color="white">$547,000.00</Title>
      </View>
      <View style={styles.box}>
        <Box title="$5000" subtitle="Experience" color="#98f5ff">
          <MaterialIcons name="monetization-on" size={44} color="blue" />
        </Box>
        <Box title="$15000" subtitle="Spend to Goals" color="#ffb90f">
          <MaterialCommunityIcons name="piggy-bank" size={44} color="blue" />
        </Box>
      </View>
      <View style={styles.secondhalf}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Heading>Transactions</Heading>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              width: 70,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Subtitle>See All</Subtitle>
          </View>
        </View>
        <View>
          <Transactions
            title="Car Purchase"
            subtitle="Auto Loan"
            amount="-$250"
          >
            <MaterialCommunityIcons name="car" size={34} color="green" />
          </Transactions>
          <Transactions
            title="House Purchase"
            subtitle="Airbnb Home"
            amount="$2250"
          >
            <Fontisto name="home" size={34} color="blue" />
          </Transactions>
          <Transactions title="Transport" subtitle="Uber, pathao" amount="$250">
            <Octicons name="gift" size={34} color="orange" />
          </Transactions>
          <Transactions title="Shopping" subtitle="Wish, Apple" amount="$350">
            <MaterialCommunityIcons
              name="shopping-outline"
              size={34}
              color="green"
            />
          </Transactions>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#1506c6",
    borderRadius: 25,
    justifyContent: "center",
  },
  box: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  secondhalf: {
    flex: 4,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 20,
  },
});
