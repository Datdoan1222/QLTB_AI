import {
  NavigationContainer,
  useFocusEffect,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

import {
  Octicons,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  AntDesign,
  Fontisto,
  FontAwesome,
} from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors, stylesTabBar } from "./constants/Styles";
import { Slogan } from "./components/Ui/Display/Title";
import IconButton from "./components/Ui/Button/IconsButton";
import AuthContextProvider, { AuthContext } from "./store/context/Auth-Context";
import CategoriesContextProvider from "./store/context/Categories-context";
import UsersContextProvider from "./store/context/InforUser-Context";

import LoginScreen from "./screen/User/LoginScreen";
import SignupScreen from "./screen/User/SignupScreen";
import VerificationScreen from "./screen/User/VerificationScreen";
import EditInformationScreen from "./screen/User/EditInformationScreen";

import HomeScreen from "./screen/Menu/HomeScreen";
import ListScreen from "./screen/ListScreen";
import AddListScreen from "./screen/AddListScreen";
import ExistingDevices from "./screen/ExistingDevices";

import MenuScreen from "./screen/Menu/MenuScreen";
import AccountScreen from "./screen/Menu/AccountScreen";
import ArchiveScreen from "./screen/Menu/ArchiveScreen";
import NotificationScreen from "./screen/Menu/Notification";
import InformationScreen from "./screen/User/InformationScreen";
import DeviceOverviewScreen from "./screen/Menu/Categori/DeviceOverviewScreen";
import DevicesDetailsScreen from "./screen/Menu/Categori/DevicesDetailsScreen";
import FavoritesScreen from "./screen/Menu/Categori/FavoritesScreen";
import { Provider } from "react-redux/es";
import { store } from "./store/redux/Store";
import ProductsContextProvider from "./store/context/Devices-Context";
import DevicesContextProvider from "./store/context/Devices-Context";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
      {/* <Stack.Screen name="Verification" component={VerificationScreen} /> */}
      {/* <Stack.Screen name="EditInformation" component={EditInformationScreen} /> */}
      {/* <Stack.Screen name="Information" component={InformationScreen} /> */}
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function AuthenticatedStack({ navigation, route }) {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "CategoryStack") {
            iconName = focused ? "home" : "home-outline";
            return (
              <Ionicons
                style={stylesTabBar.icon}
                name={iconName}
                size={30}
                color={color}
              />
            );
          } else if (route.name === "favourites") {
            iconName = focused ? "heart-fill" : "heart";
          } else if (route.name === "Notification") {
            iconName = focused ? "bell-fill" : "bell";
          } else if (route.name === "MenuStack") {
            iconName = focused ? "gears" : "gear";
            return (
              <FontAwesome
                style={stylesTabBar.icon}
                name={iconName}
                size={30}
                color={color}
              />
            );
          }
          return (
            <Octicons
              style={stylesTabBar.icon}
              name={iconName}
              size={30}
              color={color}
            />
          );
        },
        headerStyle: { backgroundColor: "white" },
        contentStyle: { backgroundColor: "white" },
        headerShadowVisible: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
        tabBarLabelStyle: {
          ...stylesTabBar.tabBarLabel,
        },
        tabBarActiveTintColor: Colors.primary500,
        tabBarStyle: [
          {
            ...stylesTabBar.tabBar,
          },
          null,
        ],
        tabBarVisible: false,

        headerRight: () => (
          <IconButton
            isImage
            source={require("./constants/img/logoTitle.png")}
            icon="person-circle-outline"
            color="white"
            size={30}
            onPress={() => navigation.navigate("Account")}
          />
        ),
      })}
    >
      <Tab.Screen
        name="CategoryStack"
        component={CategoryStack}
        options={{
          headerShown: false,
          title: "Trang chủ",
        }}
      />
      <Tab.Screen
        name="favourites"
        component={FavoritesStack}
        options={{
          headerShown: false,
          title: "Yêu thích",
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: "Thông báo",
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="MenuStack"
        component={MenuStack}
        options={{
          title: "Cài đặt",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
function FavoritesStack({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "DevicesDetails") {
      navigation.setOptions({
        tabBarStyle: StyleSheet.compose(stylesTabBar.tabBar, {
          display: "none",
        }),
      });
    } else if (routeName === "favourite") {
      navigation.setOptions({
        tabBarStyle: StyleSheet.compose(stylesTabBar.tabBar, {
          display: "flex",
        }),
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: "white" },
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="favourite"
        component={FavoritesScreen}
        options={{
          title: "Yêu thích",
          headerRight: () => (
            <IconButton
              isImage
              source={require("./constants/img/logoTitle.png")}
              icon="person-circle-outline"
              color="white"
              size={30}
              onPress={() => navigation.navigate("Account")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="DevicesDetailsScreen"
        component={DevicesDetailsScreen}
        options={{
          title: "Thông tin thiết bị ",
        }}
      />
    </Stack.Navigator>
  );
}
function CategoryStack({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "Category" ||
      routeName === "DeviceOverview" ||
      routeName === "DevicesDetailsScreen"
    ) {
      navigation.setOptions({
        tabBarStyle: StyleSheet.compose(stylesTabBar.tabBar, {
          display: "none",
        }),
      });
    } else if (routeName === "Home") {
      navigation.setOptions({
        tabBarStyle: StyleSheet.compose(stylesTabBar.tabBar, {
          display: "flex",
        }),
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        contentStyle: { backgroundColor: "white" },
        headerShadowVisible: false,
        title: "Trang chủ",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <View style={stylesTabBar.slogan}>
              <Slogan
                titleLabel="Hi, Smart Things"
                contentLabel="Bắt đầu một ngày mới năng động"
              />
            </View>
          ),
          headerRight: () => (
            <IconButton
              isImage
              source={require("./constants/img/logoTitle.png")}
              color="white"
              size={30}
              onPress={() => navigation.navigate("Account")}
            />
          ),
          headerStyle: {
            elevation: 0, // Tắt hiệu ứng shadow
            shadowColor: "transparent", // Màu shadow là transparent
          },
        }}
      />
      <Stack.Screen
        name="DeviceOverview"
        component={DeviceOverviewScreen}
        options={{
          headerRight: () => (
            <IconButton
              icon="add-circle-outline"
              size={36}
              color="black"
              onPress={() => {}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="DevicesDetailsScreen"
        component={DevicesDetailsScreen}
        options={{
          title: "Thông tin thiết bị",
        }}
      />
    </Stack.Navigator>
  );
}
function MenuStack({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "Nofiti" ||
      routeName === "Archive" ||
      routeName === "Information"
    ) {
      navigation.setOptions({
        tabBarStyle: StyleSheet.compose(stylesTabBar.tabBar, {
          display: "none",
        }),
      });
    } else if (routeName === "Menu") {
      navigation.setOptions({
        tabBarStyle: StyleSheet.compose(stylesTabBar.tabBar, {
          display: "flex",
        }),
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        contentStyle: { backgroundColor: "white" },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          title: "Cài đặt",
        }}
      />
      <Stack.Screen name="Nofiti" component={NotificationScreen} />
      <Stack.Screen name="favourites" component={FavoritesScreen} />
      <Stack.Screen
        name="Information"
        component={InformationScreen}
        options={{
          title: "Thông tin cá nhân",
        }}
      />
    </Stack.Navigator>
  );
}

function AuthenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthenticatedStack"
        component={AuthenticatedStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="AddListScreen"
        component={AddListScreen}
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}
function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {authCtx.isAuthenticated && <AuthStack />}
      {!authCtx.isAuthenticated && <AuthenStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
      SplashScreen.hideAsync();
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return null; // hoặc một thành phần tạm thời trống
  }

  return <Navigation />;
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <Root />
      </Provider>
    </>
  );
}
