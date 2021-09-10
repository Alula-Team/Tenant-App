import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#fff',
        height: '100%',
    },
    header: {
        backgroundColor: '#fff',
        height: 400,
        top: 0
    },
    greeting: {
        color: '#34383D',
        top: 80,
        left: 30,
        fontSize: 20,
        fontWeight: '600'
    },
    amountDue: {
        color: '#34383D',
        textAlign: 'center',
        top: 130,
        fontSize: 35,
        fontWeight: '600'
    },
    headerSubText: {
        fontSize: 18,
        color: '#34383D80',
        textAlign: 'center',
        top: 180,
    },
    paymentDate: {
        color: '#34383D80',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        top: 180,
        marginLeft: 7
    },
    button: { 
        backgroundColor: '#586D81', 
        padding: 18, 
        margin: 20, 
        borderRadius: 10, 
        alignItems: 'center',
        top: 230
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    },
    buttonContainer: {
        marginHorizontal: 5,
        marginTop: 10,
        marginBottom: 20,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sectionSpacing: {
        flex: 1
    },
    flatlistTitle: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '500',
        color: '#34383D90'
    },
    transactionContainer: {
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
    transactionTitle: {
        color: '#34383D',
        fontSize: 18,
        fontWeight: '600',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10, 
        alignItems: 'center',
    },
    transactionAmount: {
        color: '#34383D',
        fontSize: 16,
        fontWeight: '600',
        flexDirection: 'row', 
    },
    transactionText: {
        paddingLeft: 12.5,
        fontSize: 14,
        fontWeight: '600',
        color: '#34383D80',
        alignSelf: 'center',
    },

    // MISC
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;