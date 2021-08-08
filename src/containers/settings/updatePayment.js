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
import styles from './sett-styles';

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
                        color: "#fff",
                        fontWeight: '700', 
                        fontSize: 20,
                        paddingTop: 20,
                        },
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

                {/* Explainer Content */}
                <ScrollView>
                    {/* Image View */}
                    <Image source={require('../../assets/rentCollection.png')} style={styles.img} />
                    {/* Explainer */}
                    <View>
                        <Text style={styles.title}>Automate Rent Payments with Alula</Text>
                        <View style={styles.listView}>
                            <View style={styles.listInline}>
                                <Feather name='check' size={25} color='#428bca' style={{marginRight: 10}} />
                                <Text style={styles.listText}>Set Up Auto Pay</Text>
                            </View>
                            <View style={styles.listInline}>
                                <Feather name='check' size={25} color='#428bca' style={{marginRight: 10}} />
                                <Text style={styles.listText}>Automated Record Keeping</Text>
                            </View>
                            <View style={styles.listInline}>
                                <Feather name='check' size={25} color='#428bca' style={{marginRight: 10}} />
                                <Text style={styles.listText}>Store or Update Payment Information</Text>
                            </View>
                            <View style={styles.listInline}>
                                <Feather name='check' size={25} color='#428bca' style={{marginRight: 10}} />
                                <Text style={styles.listText}>Secure Payments via Dwolla</Text>
                            </View>
                            <Text style={{color: '#34383D80', marginTop: 20, textAlign: 'center'}}>* 1% transaction fee on rent payments</Text>
                        </View>
                    </View>

                    {/* Conintue Button */}
                    <TouchableOpacity style={styles.continueButton}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    );
}

export default UpdatePayment;