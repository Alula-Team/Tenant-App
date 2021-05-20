import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#09061C',
        height: '100%',
    },

    // Service Request Creation
    createRequest: {
        backgroundColor: '#5858FB',
        top: 0,
        left: 0,
        padding: 20
    },
    pageTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        marginLeft: 20,
        marginTop: 75,
    },
    submitButton: {
        backgroundColor: '#3e3eb4',
        borderColor: '#fff',
        padding: 10,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
    },
    addInfo: {
        marginHorizontal: 20,
        marginTop: 15,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 200,
        flexDirection: 'row',
        color: '#fff',
        paddingLeft: 15,
        fontSize: 16,
        fontWeight: '500'
    },

    // Service History
    sectionTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
        marginLeft: 20,
        marginTop: 30,
    },
})

export default styles;