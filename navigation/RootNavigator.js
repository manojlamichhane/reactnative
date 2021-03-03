import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import InboxScreen from "../Screens/InboxScreen";
import OutboxScreen from "../Screens/OutboxScreen";
import TrashScreen from "../Screens/TrashScreen";
import SpamScreen from "../Screens/SpamScreen";

const Drawer = createDrawerNavigator();
const InboxStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Inbox" component={InboxStackNavigator} />
        <Drawer.Screen name="Outbox" component={OutboxScreen} />
        <Drawer.Screen name="Trash" component={TrashScreen} />
        <Drawer.Screen name="Spam" component={SpamScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const InboxStackNavigator = () => {
  return (
    <InboxStack.Navigator>
      <InboxStack.Screen name="Inbox" component={InboxScreen} />
    </InboxStack.Navigator>
  );
};
export default RootNavigator;
