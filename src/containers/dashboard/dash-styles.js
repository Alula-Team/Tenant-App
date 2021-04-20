import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#09061C',
        height: '100%',
    },
    srollView: {
        top: 0,
        left: 0
    },

    // Header
    greetingView: {
        marginTop: 50,
        marginLeft: 10,
        flexDirection: 'row'
    },
    greeting: {
        color: '#fff',
        fontSize: 25
    },
    username: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '600',
        marginLeft: 7
    },

    // Payment Box
    paymentBox: {
        backgroundColor: '#5858FB',
        borderRadius: 10,
        margin: 20,
    },
    paymentHeader: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 20, 
        marginHorizontal: 20
    },
    paymentTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
    },
    paymentAmount: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '700',
        marginVertical: 35,
        textAlign: 'center'
    },
    dueOn: {
        color: '#fff',
        fontSize: 16,
    },
    dueDate: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
    makePaymentButton: {
        backgroundColor: '#3e3eb4',
        borderColor: '#fff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
    },
    makePaymentButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
    },

    // Transaction History
    sectionTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
        marginLeft: 20,
        marginTop: 30,
    },
    transactionCell: {
        marginHorizontal: 20,
        marginTop: 10,
        paddingVertical: 15
    },
    transactionType: {
        color: '#fff', 
        fontSize: 16, 
        fontWeight: '600'
    },
    transactionDate: {
        color: '#ffffff80', 
        fontSize: 15, 
        fontWeight: '500', 
        marginTop: 10
    },
    transactionAmount: {
        color: '#fff', 
        fontSize: 18,
        fontWeight: '600'
    }
});

export default styles;