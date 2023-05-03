import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Увійти</Text>
      <TextInput
        style={styles.input}
        placeholder="Адреса електроної пошти"
        placeholderTextColor="#dbdbdb"
        inputMode="email"
      />

      <View>
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="#dbdbdb"
          secureTextEntry={true}
        />
        <Text style={styles.inputText}>Показати</Text>
      </View>

      <TouchableOpacity style={styles.btnTO}>
        <Text style={styles.btnTitle}>Увійти</Text>
      </TouchableOpacity>
      <Text style={styles.btnText}>Не має акаунту? Зареєструватися</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    paddingLeft: 16,
    paddingRight: 16,

    height: 489,
    backgroundColor: "#fff",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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

export default LoginScreen;
