import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TrashScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>TrashScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TrashScreen;
