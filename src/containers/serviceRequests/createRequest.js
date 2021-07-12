import React from 'react'
import { View, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './prop-styles';

const CreateRequest = () => {
    return (
        <ScrollView style={styles.container}>
            {/* TEXT AREA */}
            <TextInput
                type="text"
                autoCapitalize='sentences'
                placeholder='How can we help?'
                placeholderTextColor='#34383D80'
                autoFocus={true}
                multiline={true}
                keyboardAppearance='light'
                style={{
                    color: "#34383D",
                    paddingTop: 20,
                    paddingLeft: 20,
                    fontSize: 16,
                    height: 300,
                }}
            />

            {/* ADD PICTURE */}
            <View 
                style={{
                    alignSelf: 'flex-end',
                    marginRight: 30
                }}
            >
                <TouchableOpacity
                    style={{
                    marginHorizontal: 5,
                    height: 45,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    }}
                >
                    <View style={{ flexDirection: "row" }}>
                        <Feather
                            name="upload"
                            size={18}
                            color="#34383D80"
                            style={{
                                alignSelf: "center",
                                marginLeft: 20,
                            }}
                        />
                        <Text
                            style={{
                                alignSelf: "center",
                                color: "#34383D",
                                fontSize: 16,
                                fontWeight: "600",
                                marginLeft: 10,
                                textDecorationLine: "underline",
                            }}
                        >
                            Upload Image
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Image View */}
          
        </ScrollView>


    )
}

export default CreateRequest;
