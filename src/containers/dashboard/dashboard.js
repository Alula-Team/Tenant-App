import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'

// Vector Icons
import Feather from "react-native-vector-icons/Feather";


// Style Sheet
import styles from './styles';

const Dashboard = () => {

    // Flatlist Dummy Data
    const data = [
        {
            id: 0,
            title: 'Rent Payment',
            amount: '1500',
            date: 'June 01, 2021', 
        },
        {
            id: 1,
            title: 'Rent Payment',
            amount: '1500',
            date: 'May 01, 2021', 
        },
        {
            id: 2,
            title: 'Rent Payment',
            amount: '1500',
            date: 'April 01, 2021', 
        },
        {
            id: 3,
            title: 'Rent Payment',
            amount: '1500',
            date: 'March 01, 2021', 
        },
        {
            id: 4,
            title: 'Rent Payment',
            amount: '1500',
            date: 'February 01, 2021', 
        },
        {
            id: 5,
            title: 'Rent Payment',
            amount: '1500',
            date: 'January 01, 2021', 
        },
        {
            id: 6,
            title: 'Security Deposit',
            amount: '250',
            date: 'June 01, 2021', 
        },
    ]

     // Separator
    const renderSeparator = () => {
        return (
        <View style={{ height: 0.5, backgroundColor: "#CED0CE" }} />
        );
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.greeting}>Hi, Kane!</Text>
                <Text style={styles.amountDue}>$0.00</Text>
                <View style={styles.row}>
                    <Text style={styles.headerSubText}>Amount Due By: </Text>
                    <Text style={styles.paymentDate}>01/01/2021</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Make a Payment</Text>
                </TouchableOpacity>
            </View>
            
            {/* Transactions */}
            <SafeAreaView style={styles.sectionSpacing}>
                <Text style={styles.flatlistTitle}>Transaction History</Text>
                <FlatList
                    data={data}
                    keyExtractor={item => item.address}
                    renderItem={({ item }) => (
                        <View style={styles.transactionContainer}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View>
                                    <Text style={styles.transactionTitle}>{item.title}</Text>
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <Feather name="clock" color="#34383D80" size={15} />
                                        <Text style={styles.transactionText}>{item.date}</Text>
                                    </View>
                                </View>
                                <Text style={styles.transactionAmount}>${item.amount}</Text>
                            </View>
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={renderSeparator}
                />
            </SafeAreaView>
        </View>
    )
}

export default Dashboard
