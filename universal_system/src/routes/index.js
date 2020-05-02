import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './auth.routes';
// import AppRoutes from './app.routes';

const AuthStack = createStackNavigator();

const Routes = () => {

    return (
        <AuthRoutes>

        </AuthRoutes>
    );
};

export default Routes;