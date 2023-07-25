// import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as MediaLibrary from "expo-media-library";
// import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

// import { TouchableOpacity } from "react-native-gesture-handler";

const CreatePostsScreen = () => {
  // const takePhoto = async () => {
  //   const photo = await camera.takePictureAsync();
  //   setPhoto(photo.uri);
  //   console.log("photo", photo);
  // };

  return (
    <View style={styles.container}>
      {/* <Camera style={styles.camera}> */}
      <TouchableOpacity onPress={takePhoto} style={styles.btn}>
        <FontAwesome name="camera" size={24} color="#BDBDBD" />
      </TouchableOpacity>
      {/* </Camera> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,

    borderStyle: "solid",
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  camera: {
    height: 240,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#f6f6f6",
    borderRadius: 8,
  },

  btn: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#fff",

    borderRadius: 50,
  },
  // photoView: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  // },
  // photo: {
  //   width: "100%",
  //   height: "100%",
  // },
});

export default CreatePostsScreen;
