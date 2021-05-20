import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Dashboard from '../containers/dashboard/dashboard';


const Stack = createStackNavigator();

const PropertiesNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
                
            </Stack.Navigator>
        </>
    );
}

export default PropertiesNavigation;