import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { Header } from 'react-native-elements';

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from './dash-styles';

const Dashboard = () => {

    // Dummy Data
    const data = [
        {
            id: 0,
            address: "5612 Harmony Ave",
            amount: 1500,
            date: "01/01/21",
            type: "Rent Payment"
        },
        {
            id: 1,
            address: "5612 Harmony Ave",
            amount: 500,
            date: "01/01/21",
            type: "Security Deposit"
        },
    ]
    // Separator
    const renderSeparator = () => {
        return (
        <View
            style={{
            height: 0.5,
            //   width: '86%',
            backgroundColor: "#CED0CE50",
            marginLeft: "5%",
            marginRight: "5%",
            }}
        />
        );
    };
    return(
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header 
                    placement={'left'}
                    centerComponent={
                        <View style={styles.greetingView}>
                            <Text style={styles.greeting}>Hello</Text>
                            <Text style={styles.username}>Kane</Text>
                            <Text style={styles.greeting}>!</Text>
                        </View>
                    }
                    containerStyle={{
                        backgroundColor: "#09061C",
                        justifyContent: "space-around",
                        borderBottomWidth: 0,
                    }}
                />
                {/* END Header */}

                {/* Payment Box */}
                <View style={styles.paymentBox}>
                    <View style={styles.paymentHeader}>
                        <Text style={styles.paymentTitle}>Balance</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.dueOn}>Due On:</Text>
                            <Text style={styles.dueDate}>02/01/2021</Text>
                        </View>
                    </View>
                    <Text style={styles.paymentAmount}>$1,500</Text>
                    <TouchableOpacity style={styles.makePaymentButton}>
                        <Text style={styles.makePaymentButtonText}>Make a Payment</Text>
                    </TouchableOpacity>
                </View>
                {/* END Payment Box */}

                {/* Transaction History */}
                <Text style={styles.sectionTitle}>Transaction History</Text>

                {/* Flatlist */}
                <SafeAreaView>
                    <FlatList 
                        data={data}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ paddingBottom: 350 }}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={renderSeparator}
                        // ListEmptyComponent={EmptyListMessage}
                        renderItem={({ item }) => (
                            <View style={styles.transactionCell}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <View>
                                        <Text style={styles.transactionType}>{item.type}</Text>
                                        <Text style={styles.transactionDate}>Date Paid: {item.date}</Text>
                                    </View>
                                    <Text style={styles.transactionAmount}>${item.amount}</Text>
                                </View>
                            </View>
                        )}
                    />
                </SafeAreaView>
                {/* End Transaction History */}
            </View>
        </>
    );
}

export default Dashboard;