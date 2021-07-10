import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

// Style Sheet
import styles from './styles';

const Dashboard = () => {
    return (
        <ScrollView style={styles.container}>
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
        </ScrollView>
    )
}

export default Dashboard
