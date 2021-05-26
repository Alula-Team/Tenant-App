import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Style Sheet
import styles from './service-styles';

const RequestDetail = ({ navigation }) => {

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header 
                    centerComponent={{ 
                        text: 'Request Details', 
                        style: { 
                            color: '#fff', 
                            fontWeight: 'bold', 
                            fontSize: 22, 
                            paddingTop: 30
                        }
                    }}
                    leftComponent={
                        <Icon 
                            name='arrow-left'
                            type='feather'
                            color='#fff'
                            size={25}
                            iconStyle={{
                                paddingTop: 30,
                                paddingLeft: 10,
                                paddingBottom: 10
                            }}
                            onPress={() => navigation.goBack()}
                        />
                    }
                    rightComponent={
                        <Icon 
                            name='more-horizontal'
                            type='feather'
                            color='#fff'
                            size={25}
                            iconStyle={{
                                paddingTop: 30,
                                paddingRight: 10,
                                paddingBottom: 10
                            }}
                            
                        />
                    }
                    containerStyle={{
                        backgroundColor: '#09061C',
                        justifyContent: 'space-around',
                        borderBottomWidth: 0,
                        top: 0
                    }}
                />
            </View>
        </>
    );
}

export default RequestDetail;