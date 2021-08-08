import React from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './styles';

// Things I need
    //Function to swap buttons when marked complete or unmarked complete

const ServiceRequestDetailScreen = ({ navigation }) => {

    // Button Function

    // function Buttons(props) {
        
    // }

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={{ 
                        text: 'Request Detail', 
                        style: { 
                            color: '#fff', 
                            fontWeight: '700', 
                            fontSize: 20, 
                            paddingTop: 20
                        }
                    }}
                    leftComponent={
                        <TouchableOpacity
                            keyboardShouldPersistTaps={true}
                            style={{ paddingTop: 20, paddingLeft: 10, paddingBottom: 10 }}
                          onPress={() => navigation.goBack()}
                        >
                            <Feather name='arrow-left' color='#fff' size={25} />
                        </TouchableOpacity>
                    }
                    containerStyle={{
                        backgroundColor: "#232256",
                        justifyContent: "space-around",
                        borderBottomWidth: 0,
                    }}
                />
                {/* Content */}
                <ScrollView>
                    {/* Property Address */}
                    <View style={styles.propertySectionSpacing}>
                        <Text style={styles.notificationTitle}>Property Address</Text>
                        <View style={{flexDirection: 'row', marginTop: 5}}>
                            <Feather name='map-pin' color='white' size={15} style={{marginTop: 1, color: '#34383D80'}} />
                            <Text style={styles.notificationText}>City, State, Zip</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Feather name="clock" color="#34383D80" size={15} />
                            <Text style={styles.statusText}>Date Created</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Feather name="tool" color="#34383D80" size={15} />
                            <Text style={styles.statusText}>Status</Text>
                        </View>
                    </View>

                    {/* Description */}
                    <View style={styles.propertySectionSpacing}>
                        <Text style={{color: '#34383D80', fontSize: 15, fontWeight: '600', marginTop: 30, marginBottom: 20}}>Description:</Text>
                        <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View> 

                    {/* Image View */}
                    

                </ScrollView>
            </View>
        </>
    );

}

export default ServiceRequestDetailScreen;