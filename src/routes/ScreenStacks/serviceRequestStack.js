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
            <Stack.Navigator 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#232256',
                        height: 130,
                    },
                    headerTintColor: '#fff',
                }}
            >
                <Stack.Screen 
                    name='ServiceRequests' 
                    component={ServiceRequests} 
                    options={{ 
                        headerTitleStyle: {
                            color: "#fff",
                            fontWeight: "700",
                            fontSize: 25
                        },
                        headerTitleAlign: 'left', 
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('AddRequest')}>
                                <Feather name='plus' color='#fff' size={25} style={{paddingRight: 20}} />
                            </TouchableOpacity>
                        ), 
                    }} 
                />
                <Stack.Screen 
                    name='AddRequest' 
                    component={CreateRequest} 
                    options={{ 
                        headerTitleStyle: {
                            color: "#fff",
                            fontWeight: "700",
                            fontSize: 20
                        },
                        headerTitle: 'Create Request',
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('ServiceRequests')}>
                                <Feather name='arrow-left' color='#fff' size={25} style={{paddingLeft: 20}} />
                            </TouchableOpacity>
                        ), 
                        headerRight: () => (
                            <TouchableOpacity>
                                <Feather name='send' color='#fff' size={25} style={{paddingRight: 20}} />
                            </TouchableOpacity>
                        ), 
                    }}
                />
                <Stack.Screen 
                    name='RequestDetail' 
                    component={RequestDetail}
                    options={{ 
                        headerTitleStyle: {
                            color: "#fff",
                            fontWeight: "700",
                            fontSize: 20
                        },
                        headerTitle: 'Details',
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('ServiceRequests')}>
                                <Feather name='arrow-left' color='#fff' size={25} style={{paddingLeft: 20}} />
                            </TouchableOpacity>
                        ), 
                    }}
                />
            </Stack.Navigator>
        </>
    );
}

export default ServiceRequestsNavigation;