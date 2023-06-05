import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import BackArrow from "../img/arrow-left.svg";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
export default function CreatePostsScreen() {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => (
        <AntDesign
          name="left"
          size={24}
          color="black"
          style={{ marginLeft: 10 }}
          onPress={() =>
            navigation.navigate("Home", {
              screen: "Публікації",
            })
          }
        />
      ),
    });
  }, [navigation]);
  return <View></View>;
}
