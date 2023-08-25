import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import image from "./../assets/images/image.jpg";

export default function Post() {
  return (
    <View style={styles.wrapper}>
      <Image
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></Image>
      <Text style={styles.title}>Ліс</Text>
      <View style={styles.inner}>
        <View style={styles.subinner}>
          <View style={styles.box}>
            <Feather
              name="message-circle"
              size={24}
              color="#FF6C00"
              style={{}}
            />
            <Text style={[styles.text]}>3</Text>
          </View>
          <View style={styles.box}>
            <Feather name="thumbs-up" size={24} color="#FF6C00" />
            <Text style={styles.text}>15</Text>
          </View>
        </View>
        <View style={[styles.box, { justifyContent: "flex-end" }]}>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <TouchableOpacity
            activeOpacity={0.8}
            // onPress={() => navigation.navigate(navTo)}
          >
            <Text
              style={[
                styles.text,
                { textDecorationLine: "underline" },
              ]}
            >
              Ukraine
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: 8,
    objectFit: "cover",
    marginTop: 33,
    marginHorizontal: 16,
  },
  image: {
    width: "100%",
    borderRadius: 8,
  },
  title: {
    color: "#212121",
    fontFamily: "RobotoMedium",
    fontSize: 16,
  },
  inner: {
    flex: 1,
    flexDirection: "row",
  },
  subinner: {
    flex: 1,
    flexDirection: "row",
    gap: 1,
  },
  box: {
    flex: 1,
    flexDirection: "row",
    gap: 7,
  },
  text: {
    color: "#212121",
    fontSize: 16,
  },
});
