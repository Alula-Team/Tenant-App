import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from './service-styles';

const ServiceRequests = () => {

  const { control, handleSubmit } = useForm();
  // For Picker Select
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

    return (
        <>
            <View style={styles.container}>
                {/* Create a Service Request */}
                <View style={styles.createRequest}>

                    <Text style={styles.pageTitle}>Create Service Request</Text>

                    {/* Repair Type */}
                    <Controller
                        control={control}
                        render={({ onChange, value }) => (
                            <RNPickerSelect
                                placeholder={RepairTypePlaceholder}
                                style={pickerStyles}
                                // onValueChange={(value) => onChange(value)}
                                items={[
                                    { label: 'A/C', value: 'a/c' },
                                    { label: 'Damage', value: 'damage' },
                                    { label: 'Door Lock', value: 'door-lock' },
                                    { label: 'Electrical Issue', value: 'electrical' },
                                    { label: 'Flooding', value: 'flooding' },
                                    { label: 'Leak', value: 'leak' },
                                    { label: 'Other', value: 'other' },
                                    { label: 'Pest Control', value: 'pest-control'},
                                    { label: 'Plubming', value: 'plumbing' },
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
                                // onValueChange={(value) => onChange(value)}
                                items={[
                                    { label: 'Back Yard', value: 'back-yard' },
                                    { label: 'Dining Room', value: 'dining-room' },
                                    { label: 'Exterior Door', value: 'exterior-door' },
                                    { label: 'Front Yard', value: 'front-yard' },
                                    { label: 'Garage', value: 'garage' },
                                    { label: 'Kitchen', value: 'kitchen' },
                                    { label: 'Laundry Area', value: 'laundry' },
                                    { label: 'Living Room', value: 'living-room' },
                                    { label: 'Master Bathroom', value: 'master-bathroom' },
                                    { label: 'Master Bedroom', value: 'master-bedroom' },
                                    { label: 'Other', value: 'other' },
                                    { label: 'Secondary Bathroom', value: 'secondary-bathroom'},
                                    { label: 'Secondary Bedroom', value: 'secondary-bedroom' },
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
                                // onChangeText={(value) => onChange(value)}
                                value={value}
                                />
                            </View>
                        )}
                        name="tenantName"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Submit Request</Text>
                </TouchableOpacity>
                {/* END Create a Service Request */}

                {/* Service Request History */}
                <Text style={styles.sectionTitle}>Service History</Text>
                {/* END Service Request History */}
            </View>
        </>
    );
}

export default ServiceRequests;