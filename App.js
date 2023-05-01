import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./Screens/Segment/RegistrationScreen";
import { useFonts } from "expo-font";
import PhotoBG from "./Screens/img/PhotoBG.png";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  // });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={PhotoBG} resizeMode="cover" style={styles.bgImg}>
        <RegistrationScreen />
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
