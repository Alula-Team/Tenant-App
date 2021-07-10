import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Notifications from '../../containers/notifications/notificationScreen';

const Stack = createStackNavigator();

const DashboardNavigation = (props) => {
    return(
        <>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#232256',
                        height: 130,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: 25
                    },
                    headerTitleAlign: 'left'
                }}
            >
                <Stack.Screen name='Notifications' component={Notifications} options={{ headerTitle: 'Notifications' }} />
            </Stack.Navigator>
        </>
    );
}

export default DashboardNavigation;