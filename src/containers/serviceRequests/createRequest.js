import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from './service-styles';

const CreateServiceRequest = () => {

    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();
    const addItem = (data) => {
        addTransaction(data);
        navigation.goBack();
    };

    // For Picker Select
        // Styles
        const pickerStyles = {
            inputIOS: {
                marginHorizontal: 20,
                marginTop: 15,
                borderColor: '#ffffff50',
                borderRadius: 10,
                borderWidth: 1,
                height: 45,
                flexDirection: 'row',
                color: '#fff',
                paddingLeft: 15,
                fontSize: 16,
                fontWeight: '500'
            },
            inputAndroid: {
                marginHorizontal: 20,
                marginTop: 15,
                borderColor: '#ffffff50',
                borderRadius: 10,
                borderWidth: 1,
                height: 45,
                flexDirection: 'row',
                color: '#fff',
                paddingLeft: 15,
                fontSize: 16,
                fontWeight: '500'
            }
        }
        // Placeholders
        const RepairTypePlaceholder = {
            label: 'Select Repair Type',
            value: null,
            color: '#fff'
        }
        const LocationPlaceholder = {
            label: 'Select Location',
            value: null,
            color: '#fff'
        }

    return(
        <KeyboardAwareScrollView style={styles.container}>
            {/* Header */}
            <Header 
                centerComponent={{ 
                    text: 'Create Request', 
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
                    <TouchableOpacity style={{paddingTop: 32.5, paddingRight: 10}} onPress={handleSubmit(addItem)}>
                        <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>Submit</Text>
                    </TouchableOpacity>
                }
                containerStyle={{
                    backgroundColor: '#09061C',
                    justifyContent: 'space-around',
                    borderBottomWidth: 0,
                    top: 0
                }}
            />

                    {/* Repair Type */}
                    <Controller
                        control={control}
                        render={({ onChange, value }) => (
                            <RNPickerSelect
                                placeholder={RepairTypePlaceholder}
                                style={pickerStyles}
                                onValueChange={value => onChange(value)}
                                value={value}
                                items={[
                                    { label: 'A/C', value: 'A/C', color: 'white' },
                                    { label: 'Damage', value: 'Damage', color: 'white' },
                                    { label: 'Door Lock', value: 'Door Lock', color: 'white' },
                                    { label: 'Electrical Issue', value: 'Electrical Issue', color: 'white' },
                                    { label: 'Flooding', value: 'Flooding', color: 'white' },
                                    { label: 'Leak', value: 'Leak', color: 'white' },
                                    { label: 'Other', value: 'Other', color: 'white' },
                                    { label: 'Pest Control', value: 'Pest Control', color: 'white' },
                                    { label: 'Plubming', value: 'Plubming', color: 'white' },
                                ]}
                            />
                        )}
                        name="repairType"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    {/* Location of Problem Selector */}
                    <Controller
                        control={control}
                        render={({ onChange, value }) => (
                            <RNPickerSelect
                                placeholder={LocationPlaceholder}
                                style={pickerStyles}
                                onValueChange={value => onChange(value)}
                                value={value}
                                items={[
                                    { label: 'Back Yard', value: 'Back Yard', color: 'white' },
                                    { label: 'Dining Room', value: 'Dining Room', color: 'white' },
                                    { label: 'Exterior Door', value: 'Exterior Door', color: 'white' },
                                    { label: 'Front Yard', value: 'Front Yard', color: 'white' },
                                    { label: 'Garage', value: 'Garage', color: 'white' },
                                    { label: 'Kitchen', value: 'Kitchen', color: 'white' },
                                    { label: 'Laundry Area', value: 'Laundry Area', color: 'white' },
                                    { label: 'Living Room', value: 'Living Room', color: 'white' },
                                    { label: 'Other', value: 'Other', color: 'white' },
                                    { label: 'Primary Bathroom', value: 'Master Bathroom', color: 'white' },
                                    { label: 'Primary Bedroom', value: 'Master Bedroom', color: 'white' },
                                    { label: 'Secondary Bathroom', value: 'Secondary Bathroom', color: 'white'},
                                    { label: 'Secondary Bedroom', value: 'Secondary Bedroom', color: 'white' },
                                ]}
                            />
                        )}
                        name="repairType"
                        rules={{ required: true }}
                        defaultValue=""
                    />


                    {/* Optional Text Area */}
                    <Controller
                        control={control}
                        render={({ onChange, value }) => (
                            <View style={styles.addInputContainer}>
                                <TextInput
                                type="text"
                                placeholder="Additional info..."
                                placeholderTextColor="#ffffff80"
                                style={styles.addInfo}
                                autoCapitalize='words'
                                keyboardAppearance="dark"
                                multiline={true}
                                onValueChange={value => onChange(value)}
                                value={value}
                                />
                            </View>
                        )}
                        name="tenantName"
                        rules={{ required: true }}
                        defaultValue=""
                    />
        </KeyboardAwareScrollView>
    );
}

export default CreateServiceRequest;