/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "src/screens/home";
import SingleImageScreen from "src/screens/single-image";
import {Provider} from "react-redux";
import rootStore from "src/store";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={rootStore}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="home" component={HomeScreen} />
                    <Stack.Screen
                        name="single-image"
                        component={SingleImageScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
