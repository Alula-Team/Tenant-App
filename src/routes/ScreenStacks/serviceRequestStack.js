import React from 'react';
import { TouchableOpacity } from 'react-native';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Screens
import ServiceRequests from '../../containers/serviceRequests/serviceRequests';
import createRequest from '../../containers/serviceRequests/createRequest';

const Stack = createStackNavigator();

const ServiceRequestsNavigation = ({ navigation }) => {

    function Icon () {
        return (
        <TouchableOpacity style={{ paddingRight: 30, paddingTop: 30 }} onPress={() => navigation.navigate('AddRequest')}>
            <Feather name="plus" color='#fff' size={25} />
        </TouchableOpacity>
    );
    }
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Service Requests' component={ServiceRequests} options={{ headerShown: false }} />
                <Stack.Screen name='AddRequest' component={createRequest} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

export default ServiceRequestsNavigation;