import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
// import RegistrationScreen from "./src/Screens/Segment/RegistrationScreen";
import { useFonts } from "expo-font";
import PhotoBG from "./src/img/PhotoBG.png";
import PostsScreen from "./src/Screens/Pages/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    "Roboto-R-400": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-M-500": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={PhotoBG} resizeMode="cover" style={styles.bgImg}>
        <PostsScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },
  bgImg: {
    flex: 1,
  },
});
