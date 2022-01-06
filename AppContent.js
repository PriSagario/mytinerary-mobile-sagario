import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Icons
import Icon from "react-native-vector-icons/Ionicons";

// Screens
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Sign from "./pages/Sign";

// Navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

let HomeStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{}} />
        </Stack.Navigator>
    );
};

let CitiesStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cities" component={Cities} options={{}} />
        </Stack.Navigator>
    );
};

let SignStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Sign" component={Sign} options={{}} />
        </Stack.Navigator>
    );
};

function AppContent() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    backgroundColor: "#fff",
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size, padding }) => {
                        let iconName;
                        if (route.name === "HomeTab") {
                            iconName = focused
                                ? "ios-home"
                                : "ios-home-outline";
                        } else if (route.name === "CitiesTab") {
                            iconName = focused
                                ? "ios-earth"
                                : "ios-earth-outline";
                        } else if (route.name === "UserTab") {
                            iconName = focused
                                ? "ios-person"
                                : "ios-person-outline";
                        } else if (route.name === "SignUpTab") {
                            iconName = focused
                                ? "ios-person-add"
                                : "ios-person-add-outline";
                        } else if (route.name === "SignInTab") {
                            iconName = focused
                                ? "ios-person"
                                : "ios-person-outline";
                        }
                        return (
                            <Icon name={iconName} size={size} color="#2D3962" />
                        );
                    },
                })}
            >
                <Tab.Screen name="HomeTab" component={HomeStackScreen} />
                <Tab.Screen name="CitiesTab" component={CitiesStackScreen} />
                <Tab.Screen name="SignInTab" component={SignStackScreen} />
                
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppContent;
