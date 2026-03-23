import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, MapScreen, MyCityScreen, SearchScreen, SettingsScreen } from "../screens";

import homeIcon from "../assets/image/storm.png";
import mapIcon from "../assets/image/map.png";
import cityIcon from "../assets/image/optionslist.png";
import settingsIcon from "../assets/image/setting.png";
// import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";
// import ImagePath from '../../constants/ImagePath'

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

    return (
        <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{
            backgroundColor:"#2c2b2b"
        }}}>
            <Tab.Screen name="Home" 
            options={{tabBarLabel:"Home",
                tabBarIcon:({focused})=>(
                    <Image source={homeIcon}
                    style={{width:25,height:24,marginTop:12}}
                    tintColor={focused?'red':'white'}
                    />
                    
                )
            }}
            component={Home} />
            <Tab.Screen name="MyCityScreen" component={MyCityScreen}
             options={{tabBarLabel:"MyCity",
                tabBarIcon:({focused})=>(
                    <Image source={cityIcon}
                    style={{width:25,height:24,marginTop:12}}
                    tintColor={focused?'red':'white'}
                    />
                    
                )
            }}
             />
            <Tab.Screen name="MapScreen" component={MapScreen} 
            options={{tabBarLabel:"Map",
                tabBarIcon:({focused})=>(
                    <Image source={mapIcon}
                    style={{width:25,height:24,marginTop:12}}
                    tintColor={focused?'red':'white'}
                    />
                    
                )
            }}/>
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} 
            options={{tabBarLabel:"Settings",
                tabBarIcon:({focused})=>(
                    <Image source={settingsIcon}
                    style={{width:25,height:24,marginTop:12}}
                    tintColor={focused?'red':'white'}
                    />
                    
                )
            }}/>
        </Tab.Navigator>
       
    )
}

export default BottomTabs;