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
                {/* END Service Request Flatlist */}

            </View>
        </>
    );
}

export default ServiceRequests;