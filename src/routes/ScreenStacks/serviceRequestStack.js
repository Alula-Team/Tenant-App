import React from 'react';
import { TouchableOpacity } from 'react-native';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import ServiceRequests from '../../containers/serviceRequests/serviceRequests';
import CreateRequest from '../../containers/serviceRequests/createRequest';
import RequestDetail from '../../containers/serviceRequests/requestDetail';

const Stack = createStackNavigator();

const ServiceRequestsNavigation = ({ navigation }) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Service Requests' component={ServiceRequests} options={{ headerShown: false }} />
                <Stack.Screen name='AddRequest' component={CreateRequest} options={{ headerShown: false }} />
                <Stack.Screen name='RequestDetail' component={RequestDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

export default ServiceRequestsNavigation;