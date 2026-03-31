import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import Routes from "./src/navigation/Routes";
import { Provider, useDispatch } from "react-redux";
import store from './src/redux/store';
import { createMMKV } from "react-native-mmkv";
import { saveUserData } from "./src/redux/reducers/authSlice";

enableScreens(); // ✅ important

const storage = createMMKV()

const {dispatch} = store;
const WeatherApp = () => {
  const getUserDataFromStore = () => {
    const token = storage.getString('token')
    if(token){
    
    dispatch(saveUserData({
      userData: { name: 'manoj', Gender: 'male', Country: 'india' },
      isLogin: true,
    }))
  }}

  useEffect(()=>{
    getUserDataFromStore();
  },[]);

  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default WeatherApp;
