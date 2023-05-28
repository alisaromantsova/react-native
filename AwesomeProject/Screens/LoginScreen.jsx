import BackImg from "../img/BackImg.jpg";
// import { Platform } from "react-native";
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
export const LoginScreen = () => {
  return (
    <>
      <ImageBackground source={BackImg} style={styles.image} />
      <View style={styles.main}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 64}>
          <Text style={styles.title}>Увійти</Text>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Адреса електронної пошти" style={styles.input} />
            <View style={styles.passwordCont}>
              <TextInput placeholder="Пароль" style={styles.input} />
              <Text style={styles.passLink}>Показати</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Немає акаунту? Зареєструватися</Text>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    height: "100%",
    flex: 1,
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
    paddingBottom: 144,
    paddingTop: 32,
  },
  title: {
    fontFamily: "RobotoMedium",
    fontSize: 48,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,

    marginBottom: 32,
    textAlign: "center",
  },

  input: {
    height: 50,
    border: "1px solid #E8E8E8 ",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#F6F6F6",
    fontFamily: "RobotoRegular",
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
