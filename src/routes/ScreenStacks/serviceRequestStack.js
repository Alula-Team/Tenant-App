import React from 'react';
import { TouchableOpacity } from 'react-native';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Screens
import ServiceRequests from '../../containers/serviceRequests/serviceRequests';
import CreateRequest from '../../containers/serviceRequests/createRequest';
import RequestDetail from '../../containers/serviceRequests/serviceRequestDetail';

const Stack = createStackNavigator();

const ServiceRequestsNavigation = ({ navigation }) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen 
                    name='ServiceRequests' 
                    component={ServiceRequests} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name='AddRequest' 
                    component={CreateRequest} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name='RequestDetail' 
                    component={RequestDetail}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </>
    );
}

export default ServiceRequestsNavigation;