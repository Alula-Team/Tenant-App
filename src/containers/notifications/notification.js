import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Badge, Header } from 'react-native-elements';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './notif-styles';


// Things I need:
    // Flatlist for Service Requests & Notifications
        // Needs a sort feature where the newest requests are at the top


const Dashboard = () => {
    
    return(
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header placement={'left'}
                    centerComponent={{ 
                        text: 'Notifications', 
                        style: { 
                            color: '#fff', 
                            fontWeight: 'bold', 
                            fontSize: 25, 
                            paddingTop: 30
                        }
                    }}
                    containerStyle={{
                        backgroundColor: '#09061C',
                        justifyContent: 'space-around',
                        borderBottomWidth: 0
                    }}
                />
            </View>
        </>
    );
}

export default Dashboard;