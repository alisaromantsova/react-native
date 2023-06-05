import React, { useState, useEffect } from "react";
import BackImg from "../img/BackImg.jpg";
import { Platform } from "react-native";
import { loadFonts } from "../FontLoader";
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
import { useNavigation } from "@react-navigation/native";
import { Font } from "react-native-vector-icons";

export default function RegistrationScreen() {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const signUp = () => {
    navigation.navigate("Home", {
      screen: "PostsScreen",
    });
  };

  // useEffect(() => {
  //   const loadFonts = async () => {
  //     try {
  //       await Font.loadAsync({
  //         "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  //         "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  //         "Roboto-Medium": require("../assets/fonts/oboto-Medium.ttf"),
  //       });
  //     } catch (error) {
  //       console.log("Ошибка загрузки шрифтов:", error);
  //     }
  //   };

  //   loadFonts();
  // }, []);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ImageBackground
          source={BackImg}
          // importantForAccessibility={importantForAccessibility}
          style={styles.image}
        />

        <View style={styles.main}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 64}>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Логін" style={styles.input} value={login} onChangeText={setLogin} />
              <TextInput placeholder="Адреса електронної пошти" style={styles.input} value={email} onChangeText={setEmail} />
              <View style={styles.passwordCont}>
                <TextInput placeholder="Пароль" style={styles.input} value={password} onChangeText={setPassword} />
                <Text style={styles.passLink}>Показати</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={signUp}>
              <Text style={styles.buttonText} onPress={signUp}>
                Зареєстуватися
              </Text>
            </TouchableOpacity>
            <Text style={styles.loginText} onPress={() => navigation.navigate("Login")}>
              Вже є акаунт? Увійти
            </Text>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  main: {
    height: "100%",
    // flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    // top: 0,
    // left: 0,
  },
  container: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 78,
    paddingTop: 92,
  },
  title: {
    // fontFamily: "Roboto Medium",
    fontSize: 48,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,

    marginBottom: 32,
    textAlign: "center",
  },

  input: {
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#F6F6F6",
    // fontFamily: "Roboto Regular",
  },
  inputContainer: {
    gap: 16,
    marginBottom: 43,
  },
  passwordCont: {
    position: "relative",
  },
  passLink: {
    position: "absolute",
    top: "35%",
    right: 16,
  },
  button: {
    textAlign: "center",
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: "100",
    marginBottom: 16,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  loginText: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
