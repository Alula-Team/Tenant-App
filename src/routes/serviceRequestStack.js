import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import ServiceRequests from '../containers/serviceRequests/serviceRequests';


const Stack = createStackNavigator();

const ServiceRequestsNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='ServiceRequests' component={ServiceRequests} options={{ headerShown: false }} />
                
            </Stack.Navigator>
        </>
    );
}

export default ServiceRequestsNavigation;