// TODO: ITS NECESSARY FOR NAVIGATION
import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native';

// TODO: ITS NECESSARY FOR NAVIGATION
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App = () => {

    return (
    <NavigationContainer>
       <Routes/>
    </NavigationContainer>
    );
};

export default App;