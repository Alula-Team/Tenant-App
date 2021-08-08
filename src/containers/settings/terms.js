import React from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './sett-styles';

const Terms = ({ navigation }) => {

    return(
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={{
                        text: "Terms & Conditions",
                        style: {
                            color: "#fff",
                            fontWeight: '700', 
                            fontSize: 20, 
                            paddingTop: 20,
                        },
                    }}
                    leftComponent={
                        <Icon
                            name="arrow-left"
                            type="feather"
                            color="#fff"
                            size={25}
                            iconStyle={{
                            paddingTop: 20,
                            paddingLeft: 10,
                            paddingBottom: 10,
                            }}
                            onPress={() => navigation.goBack()}
                        />
                    }
                    containerStyle={{
                        backgroundColor: "#232256",
                        justifyContent: "space-around",
                        borderBottomWidth: 0,
                    }}
                />
            </View>
        </>
    );
}

export default Terms;