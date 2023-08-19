import React, { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";

import image from "../../assets/images/photobg.jpg";
import { TouchableWithoutFeedback } from "react-native";

export default function FormAuth({ title, login, btn1, btn2 }) {
  const initialState = {
    email: "",
    password: "",
  };
  login ? (initialState.name = "") : null;
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.image}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          // behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{
            width: "100%",
            marginHorizontal: 16,
          }}
        >
          <View
            style={{
              ...styles.wrap,
              paddingBottom: isKeyboard ? 16 : 0,
            }}
          >
            {login && (
              <>
                <View style={styles.avatar}></View>
                <View style={{ height: 60 }} />
              </>
            )}
            <Text style={styles.title}>{title}</Text>
            <View
              style={{ width: "100%" }}
              onFocus={() => setIsKeyboard(true)}
              onBlur={() => setIsKeyboard(false)}
            >
              {login && (
                <TextInput
                  style={styles.input}
                  placeholder="Логін"
                  value={state.name}
                  onChangeText={(value) =>
                    setState((prev) => ({ ...prev, name: value }))
                  }
                />
              )}
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                keyboardType="email-address"
                value={state.email}
                onChangeText={(value) =>
                  setState((prev) => ({ ...prev, email: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                value={state.password}
                onChangeText={(value) =>
                  setState((prev) => ({ ...prev, password: value }))
                }
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      {!isKeyboard && (
        <View style={{ width: "100%", backgroundColor: "#ffffff" }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnReg}
            onPress={() => {
              console.log(state);
              setState(initialState);
            }}
          >
            <Text style={styles.btnTitle}>{btn1}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.btnAcount}>{btn2}</Text>
          </TouchableOpacity>
          {!login && <View style={{ height: 66 }} />}
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  wrap: {
    // marginHorizontal: 16,
    width: "100%",
    backgroundColor: "#ffffff",
    // paddingBottom: 78,
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    top: -60,
    width: 120,
    height: 120,
    position: "absolute",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  title: {
    marginTop: 32,
    marginBottom: 23,
    color: "#212121",
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontSize: 30,
    letterSpacing: 0.3,
  },
  input: {
    marginHorizontal: 16,
    marginBottom: 16,
    height: 50,
    padding: 16,
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  btnReg: {
    height: 51,
    marginTop: 27,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  btnAcount: {
    marginBottom: 78,
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    textAlign: "center",
  },
});
