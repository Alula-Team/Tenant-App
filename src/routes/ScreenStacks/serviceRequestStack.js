import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import ServiceRequests from '../../containers/serviceRequests/serviceRequests';
import createRequest from '../../containers/serviceRequests/createRequest';

const Stack = createStackNavigator();

const ServiceRequestsNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='ServiceRequests' component={ServiceRequests} options={{ headerShown: false }} />
                <Stack.Screen name='AddRequest' component={createRequest} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

export default ServiceRequestsNavigation;