import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import { Badge, Header, Icon } from "react-native-elements";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Messages = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);

    // Flatlist Dummy Data
    const data = [
        {
          id: 0,
          tenant: "Landlord Name",
        }
    ];

    // onRefresh
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    // Separator
    const renderSeparator = () => {
        return <View style={{ height: 0.5, backgroundColor: "#CED0CE", width: '90%', alignSelf: 'center' }} />;
    };

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    placement={"left"}
                    centerComponent={{
                        text: "Messages",
                        style: {
                        color: "#34383D",
                        fontWeight: "700",
                        fontSize: 25,
                        paddingTop: 20,
                        },
                    }}
                    containerStyle={{
                        backgroundColor: "#fff",
                        justifyContent: "space-around",
                        borderBottomWidth: 0,
                    }}
                />

                {/* Messages Flat List */}
                <View style={styles.listView}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.address}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.notificationContainer} onPress={() => navigation.navigate("MessageDetail")}>
                                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                                    {/* Name */}
                                    <Text style={styles.notificationTitle}>{item.tenant}</Text>
                                    
                                    {/* Badge */}
                                    <Badge 
                                    status="error" 
                                    containerStyle={{ border: "none" }} 
                                    badgeStyle={{ height: 25, width: 25, borderRadius: 30/2,  borderWidth: 0, }} 
                                    textStyle={{ color: 'white', fontSize: 12.5, fontWeight: '600' }} 
                                    value={1} 
                                    />
                                </View>
                            </TouchableOpacity>
                        )}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                        contentContainerStyle={{ paddingBottom: 350 }}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={renderSeparator}
                    />
                </View>
                
            </View>
        </>
    );
}

export default Messages;
