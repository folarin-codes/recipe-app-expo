import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import {
    icons, COLORS
} from "../constants";

import { TabIcon } from "../components";

import { Home } from "../screens"

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return ( 
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'red',
                headerShown: false,
                tabBarStyle:{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                borderTopColor: 'transparent',
                height:100
            }
        
              
            }}

       
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (<TabIcon focused={focused} icon={icons.home } />)
                }}
               
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (<TabIcon focused={focused} icon={icons.search } />)
                }}
               
            />
            <Tab.Screen
                name="Bookmark"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (<TabIcon focused={focused} icon={icons.bookmark } />)
                }}
               
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (<TabIcon focused={focused} icon={icons.settings } />)
                }}
               
            />
        </Tab.Navigator>
    )
}

export default Tabs;