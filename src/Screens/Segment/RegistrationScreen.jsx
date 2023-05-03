import { useState } from "react";
import {
  Keyboard,
  Platform,
  PlatformColor,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const RegistrationScreen = () => {
  const [loginRegistration, setLoginRegistration] = useState("");
  const [emailRegistration, setEmailRegistration] = useState("");
  const [passwordRegistration, setPasswordRegistration] = useState("");

  const onRegistration = () => {
    console.log({
      loginRegistration,
      emailRegistration,
      passwordRegistration,
    });
    resetForm();
  };

  const resetForm = () => {
    setLoginRegistration("");
    setEmailRegistration("");
    setPasswordRegistration("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.containerFotoUser}>
          <Image
            style={styles.addFotoUser}
            source={require("../../img/add.png")}
          />
        </View>
        <Text style={styles.text}>Реєстрація</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.input}
            placeholder="Логін"
            placeholderTextColor="#dbdbdb"
            inputMode="text"
            onChangeText={setLoginRegistration}
            value={loginRegistration}
          />
          <TextInput
            style={styles.input}
            placeholder="Адреса електроної пошти"
            placeholderTextColor="#dbdbdb"
            inputMode="email"
            onChangeText={setEmailRegistration}
            value={emailRegistration}
          />

          <View>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#dbdbdb"
              secureTextEntry={true}
              onChangeText={setPasswordRegistration}
              value={passwordRegistration}
            />
            <Text style={styles.inputText}>Показати</Text>
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.btnTO} onPress={onRegistration}>
          <Text style={styles.btnTitle}>Зареєструватися</Text>
        </TouchableOpacity>
        <Text style={styles.btnText}>Вже є акаунт? Увійти</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    paddingLeft: 16,
    paddingRight: 16,

    height: 549,
    backgroundColor: "#fff",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  containerFotoUser: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -60,
  },
  addFotoUser: {
    marginLeft: 107,
    marginTop: 81,
  },
  text: {
    marginTop: 32,
    marginBottom: 32,
    fontFamily: "Roboto-M-500",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e8e8e8",

    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
  },

  inputText: {
    position: "absolute",
    right: 16,
    top: 16,

    fontFamily: "Roboto-R-400",

    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btnTO: {
    marginTop: 43 - 16,
    paddingTop: 16,
    paddingBottom: 16,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 32,
  },
  btnTitle: {
    fontFamily: "Roboto-R-400",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    textAlign: "center",
    color: "#fff",
  },
  btnText: {
    marginTop: 16,
    fontFamily: "Roboto-R-400",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
