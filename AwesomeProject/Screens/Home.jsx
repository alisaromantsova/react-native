import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();
  const Tabs = createBottomTabNavigator();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          if (route.name === "Публікації") {
            const button = focused ? <Ionicons name="grid" size={24} color={color} /> : <Ionicons name="grid" size={24} color={"#000"} />;
            return button;
            // return <Ionicons name="grid" size={24} color={color} />;
          } else if (route.name === "Створити публікацію") {
            return (
              <View style={styles.icon}>
                {focused ? <Entypo name="plus" size={13} color={"#fff"} /> : <Entypo name="plus" size={13} color={"#000"} />}
              </View>
            );
          } else if (route.name === "Профіль") {
            const button = focused ? <Feather name="user" size={24} color={color} /> : <Feather name="user" size={24} color="black" />;
            return button;
          }
        },
      })}
      tabBarOptions={{
        style: { paddingTop: 10, paddingBottom: 10 },
        labelStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="Публікації" component={PostsScreen} />
      <Tabs.Screen name="Створити публікацію" component={CreatePostsScreen} />
      <Tabs.Screen name="Профіль" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  btn: {
    marginRight: 10,
  },
  icon: {
    backgroundColor: "#FF6C00",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 28.5,
    paddingRight: 28.5,
    borderRadius: 50,
  },
});
