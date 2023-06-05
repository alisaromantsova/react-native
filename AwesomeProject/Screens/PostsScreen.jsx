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
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

export default function PostsScreen() {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <AntDesign style={{ marginRight: 10 }} name="logout" size={24} color="black" onPress={() => navigation.navigate("Registration")} />
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text></Text>
    </View>
  );
}
