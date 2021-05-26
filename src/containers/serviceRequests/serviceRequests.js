import React from 'react';
import { Text, View, FlatList, SafeAreaView, TouchableOpacity } from "react-native";

// Forms
import { useForm, Controller } from "react-hook-form";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from './service-styles';

const ServiceRequests = ({ navigation }) => {

    // Dummy Data
    const data = [
        {
            id: 0,
            address: "5612 Harmony Ave",
            repair_type: "Damage",
            location: "Kitchen",
            date: "01/01/21",
            status: 'Open'
        },
        {
            id: 1,
            address: "123 Main Street",
            repair_type: "Leak",
            location: "Primary Bathroom",
            date: "01/01/21",
            status: 'Completed'
        },
    ]

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

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Service Requests</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AddRequest')}>
                        <Feather name='plus' size={25} color='#fff' style={{paddingRight: 30}} />
                    </TouchableOpacity>
                </View>
                {/* END Header */}

                {/* Service Request Flatlist */}
                <SafeAreaView>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.listCell} onPress={() => navigation.navigate('RequestDetail')}>
                                <View>
                                    <Text style={styles.listItem}>{item.repair_type}</Text>
                                    <Text style={styles.listSubItem}>Address: {item.address}</Text>
                                    <Text style={styles.listSubItem}>Date: {item.date}</Text>
                                    <Text style={styles.listSubItem}>Status: {item.status}</Text>
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
                {/* END Service Request Flatlist */}
            </View>
        </>
    );
}

export default ServiceRequests;