import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Badge } from 'react-native-elements';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './notif-styles';


// Things I need:
    // Flatlist for Service Requests & Notifications
        // Needs a sort feature where the newest requests are at the top
        // Function to high badge when pressed

// Notification Types:
    // Past due balance
    // Lease Expiration - 90d, 60d, 30d
    // Lease Renewal - Accept or Decline
    // Service Request Complete
    // Rent Processed Successfully
    // Rent Payment Error


const Dashboard = ({ navigation }) => {

    // Dummy Data
    const data = [
        {
            id: 0,
            address: "5612 Harmony Ave",
            title: "Past Due Balance",
            location: "Kitchen",
            dueDate: "01/01/21",
            status: 'Open'
        },
        {
            id: 1,
            address: "5612 Harmony Ave",
            title: "Lease Renewal",
            location: "Kitchen",
            dueDate: "01/01/21",
            status: 'Open'
        },
    ];

    // Separator
    const renderSeparator = () => {
        return (
            <View
                style={{
                height: 0.5,
                backgroundColor: "#CED0CE50",
                marginLeft: "5%",
                marginRight: "5%",
                }}
            />
        );
    };

    // Empty List Content
    const EmptyListMessage = () => {
        return (
        <View style={styles.emptyList}>
            <Image
            // source={require("../../assets/emptyPropList.png")}
            style={styles.img}
            />
            <Text
            style={{
                color: "#fff",
                marginHorizontal: 35,
                alignSelf: "center",
                fontSize: 18,
            }}
            >
            Hmm... There is nothing here... Let's add your first property! Use the
            '+' symbol at the top to get started.
            </Text>
        </View>
        );
    };
    
    return(
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Notifications</Text>
                </View>
                {/* END Header */}

                {/* Flatlist */}
                <SafeAreaView>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.listCell}>
                                <View>
                                    <View style={{flexDirection: 'row'}}>
                                        <Badge 
                                            status='warning' 
                                            containerStyle={{marginRight: 10, alignSelf: 'center'}}
                                            // onPress={
                                            //     <BadgePressed />
                                            // }
                                        />
                                        <Text style={styles.listItem}>{item.title}</Text>
                                    </View>
                                    <Text style={styles.listSubItem}>Address: {item.address}</Text>
                                    <Text style={styles.listSubItem}>Date: {item.duedate}</Text>
                                </View>
                                <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={{ paddingBottom: 350 }}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={renderSeparator}
                        ListEmptyComponent={EmptyListMessage}
                    />
                </SafeAreaView>
                {/* END Flatlist */}
            </View>
    );
}

export default Dashboard;