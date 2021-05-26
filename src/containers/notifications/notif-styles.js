import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#09061C',
        height: '100%',
    },

    // Header
    headerContainer: {
        marginTop: 80,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        color: '#fff',
        marginLeft: 20,
        fontSize: 25,
        fontWeight: 'bold'
    },

    // Flatlist
    listCell: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listItem: {
        color: '#fff', 
        fontSize: 16, 
        fontWeight: '600'
    },
    listSubItem: {
        color: '#ffffff80', 
        fontSize: 15, 
        fontWeight: '500', 
        marginTop: 10
    },
});

export default styles;