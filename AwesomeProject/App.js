import { useFonts } from "expo-font";
import { StyleSheet, Text, View, Image } from "react-native";
import RegistrationScreen from "./Screens/RegistarationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import PostsScreen from "./Screens/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
// import { loadFonts } from "./FontLoader";
import { useEffect } from "react";
import { Font } from "react-native-vector-icons";
export default function App() {
  const MainStack = createStackNavigator();
  const [fontsLoaded] = useFonts({
    "Roboto Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  // const [fontsLoaded] = useFonts({
  //   RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  //   RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
  //   RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  // });
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Registration">
          <MainStack.Screen name="Registration" component={RegistrationScreen} style={styles.register} />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen name="PostsScreen" component={PostsScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // fontFamily: "Roboto Regular",
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
