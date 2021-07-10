import React from 'react';
import { View } from 'react-native';

// Navigation
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Dashboard
import Dashboard from '../routes/ScreenStacks/dashboardStack';

// Service Requests
import ServiceRequests from '../routes/ScreenStacks/serviceRequestStack';

// Notifications
import Notifications from '../routes/ScreenStacks/notificationsStack';

// Settings
import Settings from '../routes/ScreenStacks/settingsStack';

// Icons
import Icon from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

const RootNavigation = (props) => {
    return (
        <Tab.Navigator activeColor='#655CA0' inactiveColor='#9E9CD390' barStyle={{backgroundColor: '#fff'}}>
            <Tab.Screen 
                name={'Dashboard'}
                component={Dashboard}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon 
                            name={'activity'}
                            size={22}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name={'Service Requests'}
                component={ServiceRequests}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon 
                            name={'tool'}
                            size={22}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name={'Notifications'}
                component={Notifications}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon 
                            name={'bell'}
                            size={22}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name={'Settings'}
                component={Settings}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon 
                            name={'settings'}
                            size={22}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default RootNavigation;