import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#ffffff90',
        height: '100%',
    },
    header: {
        backgroundColor: '#232256',
        height: 400,
        top: 0
    },
    greeting: {
        color: '#fff',
        top: 80,
        left: 30,
        fontSize: 20,
        fontWeight: '600'
    },
    amountDue: {
        color: '#fff',
        textAlign: 'center',
        top: 130,
        fontSize: 35,
        fontWeight: '600'
    },
    headerSubText: {
        fontSize: 18,
        color: '#ffffff90',
        textAlign: 'center',
        top: 180,
    },
    paymentDate: {
        color: '#ffffff90',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        top: 180,
        marginLeft: 7
    },
    button: {
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 30,
        borderRadius: 10,
        top: 230
    },
    buttonText: {
        color: '#232256',
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