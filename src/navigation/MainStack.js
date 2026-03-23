import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabs from "./BottomTabs";
import { DetailsScreen, SearchScreen } from "../screens";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            

        </Stack.Navigator>
    )
}

export default MainStack;

