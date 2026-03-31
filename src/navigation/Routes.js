import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { createMMKV } from 'react-native-mmkv';
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const userData = useSelector(state => state.auth)
  console.log(userData?.isLogin, 'userData')

  const isToken = userData?.isLogin;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Auth" component={AuthStack}/> */}
      {isToken ? <Stack.Screen name="main" component={MainStack} /> : <Stack.Screen name="Auth" component={AuthStack} />}


    </Stack.Navigator>
  );
}