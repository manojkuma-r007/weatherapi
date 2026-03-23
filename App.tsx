import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import Routes from "./src/navigation/Routes";

enableScreens(); // ✅ important

const WeatherApp = () => {
  return (
    <GestureHandlerRootView>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default WeatherApp;
