import React from 'react'
import { View, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './styles';

const CreateRequest = ({ navigation }) => {
    return (
        <View style={styles.container} keyboardShouldPersistTaps={true}>
            {/* Header */}
            <Header 
                centerComponent={{ 
                    text: 'Create Request', 
                    style: { 
                        color: '#fff', 
                        fontWeight: '700', 
                        fontSize: 20, 
                        paddingTop: 20
                    }
                }}
                leftComponent={
                    <TouchableOpacity
                        keyboardShouldPersistTaps={true}
                        style={{ paddingTop: 20, paddingLeft: 10, paddingBottom: 10 }}
                      onPress={() => navigation.goBack()}
                    >
                        <Feather name='arrow-left' color='#fff' size={25} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity
                        keyboardShouldPersistTaps={true}
                        style={{ paddingTop: 22.5, paddingRight: 10 }}
                    //   onPress={handleSubmit(onSubmit)}
                    >
                        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
                        Send
                        </Text>
                    </TouchableOpacity>
                }
                containerStyle={{
                    backgroundColor: '#232256',
                    justifyContent: 'space-around',
                    borderBottomWidth: 0
                }}
            />
            <ScrollView>
                {/* Subject Line */}
                <Text style={styles.inputLabel}>Subject</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                    type="text"
                    placeholder="Subject..."
                    placeholderTextColor="#34383D70"
                    autoCorrect={false}
                    clearButtonMode={'while-editing'}
                    keyboardAppearance='light'
                    style={styles.inputField}
                    // onChangeText={onChange}
                    // value={value}
                    />
                </View>

                {/* TEXT AREA */}
                <TextInput
                    type="text"
                    autoCapitalize='sentences'
                    placeholder='How can we help?'
                    placeholderTextColor='#34383D80'
                    autoFocus={true}
                    multiline={true}
                    blurOnSubmit={false} 
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
                        keyboardShouldPersistTaps={true}
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
        </View>


    )
}

export default CreateRequest;
