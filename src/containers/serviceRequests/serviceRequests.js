import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";
import RNPickerSelect from 'react-native-picker-select';

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from './service-styles';

const ServiceRequests = () => {

    const navigation = useNavigation();

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
                <Header
                placement={"left"}
                centerComponent={{
                    text: "Service Requests",
                    style: {
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 25,
                    paddingTop: 30,
                    },
                }}
                rightComponent={
                    <>
                    <Icon
                        name="plus"
                        type="feather"
                        color="#fff"
                        size={25}
                        iconStyle={{
                        paddingTop: 30,
                        paddingRight: 20,
                        paddingBottom: 10,
                        }}
                        onPress={() => navigation.navigate("AddRequest")}
                    />
                    </>
                }
                containerStyle={{
                    backgroundColor: "#09061C",
                    justifyContent: "space-around",
                    borderBottomWidth: 0,
                }}
                />
                {/* END Header */}

                {/* Service Request Flatlist */}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.listCell}>
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
                {/* END Service Request Flatlist */}

            </View>
        </>
    );
}

export default ServiceRequests;