import React from 'react';
import { TouchableOpacity } from 'react-native';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Screens
import Messages from '../../containers/messages/messages';
import MessageDetail from '../../containers/messages/messageDetail';

const Stack = createStackNavigator();

const MessagesNavigation = ({ navigation }) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Messages' 
                    component={Messages} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name='MessageDetail' 
                    component={MessageDetail}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </>
    );
}

export default MessagesNavigation;