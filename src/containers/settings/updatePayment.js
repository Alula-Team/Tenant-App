import React from 'react';

import { Text, TextInput, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './styles';

const UpdatePayment = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={{
                        text: "Update Payment",
                        style: {
                        color: "#34383D",
                        fontWeight: '600', 
                        fontSize: 20,
                        paddingTop: 20,
                        },
                    }}
                    leftComponent={
                        <Icon
                        name="arrow-left"
                        type="feather"
                        color="#34383D80"
                        size={25}
                        iconStyle={{
                            paddingTop: 20,
                            paddingLeft: 10,
                            paddingBottom: 10,
                        }}
                        onPress={() => navigation.goBack()}
                        />
                    }
                    containerStyle={{
                        backgroundColor: "#fff",
                        justifyContent: "space-around",
                        borderBottomWidth: 0,
                    }}
                />
            </View>
        </>
    );
}

export default UpdatePayment;