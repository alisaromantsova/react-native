import { useFonts } from "expo-font";
import { StyleSheet, Text, View, Image } from "react-native";
import { RegistrationScreen } from "./Screens/RegistarationScreen";
// import { LoginScreen } from "./Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  return (
    <>
      <RegistrationScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "RobotoRegular",
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
