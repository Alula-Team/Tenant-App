import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#ffffff90',
        height: '100%',
    },
    header: {
        backgroundColor: '#232256',
        height: 500,
    },
    greeting: {
        color: '#fff',
        top: 100,
        left: 30,
        fontSize: 20,
        fontWeight: '600'
    },
    amountDue: {
        color: '#fff',
        textAlign: 'center',
        top: 150,
        fontSize: 35,
        fontWeight: '600'
    },
    headerSubText: {
        fontSize: 18,
        color: '#ffffff90',
        textAlign: 'center',
        top: 200,
    },
    paymentDate: {
        color: '#ffffff90',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        top: 200,
        marginLeft: 7
    },
    button: {
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 30,
        
    },
    buttonText: {
        color: '#232256'
    },

    // MISC
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;