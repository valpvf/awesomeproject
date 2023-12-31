import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import LoginScreen from "./Screens/Auth/LoginScreen";
import ProfileScreen from "./Screens/Main/ProfileScreen";
import CreatePostsScreen from "./Screens/Main/CreatePostsScreen";

import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import DefaultPostsScreen from "./Screens/NestedScreens/DefaultPostsScreen";
import PostsScreen from "./Screens/Main/PostsScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  const [auth, setAuth] = useState(isAuth);
  function handleOut() {
    setAuth((prev) => (prev = null));
    // console.log("func", auth);
  }
  console.log("isAuth", auth);
  if (!Boolean(auth)) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: 9,
          borderBlockColor: "rgba(0, 0, 0, 0.3)",
          borderTopWidth: 0.5,
          backgroundColor: "#ffffff",
          height: 57,
        },
      }}
    >
      <MainTab.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
          headerRight: () => (
            <Ionicons
              style={{ right: 10 }}
              name="log-out-outline"
              size={24}
              color="black"
              onPress={handleOut}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="plus" size={size} color={"#ffffff"} />
          ),
          tabBarItemStyle: {
            borderRadius: 20,
            backgroundColor: "#FF6C00",
            maxWidth: 70,
            maxHeight: 40,
          },
        }}
      />
      <MainTab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
