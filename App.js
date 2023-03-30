import React, { useCallback, useLayoutEffect , useEffect, useMemo} from 'react';
import {View} from 'react-native'
import { Login, Recipe } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font'

import * as SplashScreen from 'expo-splash-screen'

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();


SplashScreen.preventAutoHideAsync();

const App = () => {

    const [fontsLoaded] = useFonts({
        'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      });


    useCallback(

        (async function loadFonts() {

            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
            else {
                return null;
                
            }
        })()
        
   , [fontsLoaded])
    
    return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'Login'}
                >
                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Tabs}
                    />
                    <Stack.Screen
                        name="Recipe"
                        component={Recipe}
                    />
                </Stack.Navigator>
                </NavigationContainer>
        
    )
}

export default App;