import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './auth.routes';
// import AppRoutes from './app.routes';

const AppStack = createStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false}}>

        <AppStack.Screen name="AuthRoutes" component={AuthRoutes} />

        </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;