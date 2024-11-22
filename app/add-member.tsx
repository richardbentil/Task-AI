import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
    FlatList,
    Pressable,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function AddMemberScreen() {
    const { list }: any = useLocalSearchParams(); // Get task parameter
    const parsedList = list ? JSON.parse(list) : ["ebobenrich@gmail.com", "kwesi@gmail.com"]; // Parse JSON string

    const [email, setEmail] = useState("");
    const [members, setMembers] = useState<any[]>(parsedList);

    // Handle adding a new email
    const addMember = () => {
        if (email.trim() && !members?.includes(email)) {
            setMembers((prev: any) => [...prev, email]);
            setEmail(""); // Clear input
        }
    };

    // Handle removing a member
    const removeMember = (member: string) => {
        setMembers((prev) => prev.filter((item) => item !== member));
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles.container]}>
                <StatusBar backgroundColor={"#000000"} />
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <View style={styles.contentContainer}>
                        {/* Member List */}
                        <FlatList
                            data={members}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.listItem}>
                                    <View style={styles.iconContainer}>
                                        <Ionicons name="person" size={24} color="#fff" />
                                    </View>
                                    <Text style={styles.listItemText}>{item}</Text>
                                    <Pressable onPress={() => removeMember(item)}>
                                        <MaterialCommunityIcons
                                            name="close-circle"
                                            size={24}
                                            color="#ff6347"
                                        />
                                    </Pressable>
                                </View>
                            )}
                        />

                        {/* Email Input */}
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Ionicons name="person" size={24} color="#fff" />
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter email address"
                                value={email}
                                onChangeText={setEmail}
                                placeholderTextColor="#888"
                                keyboardType="email-address"
                            />
                            <TouchableOpacity onPress={addMember} disabled={!email.trim()}>
                                <Ionicons
                                    name="add-circle"
                                    size={30}
                                    color={email.trim() ? "#000000" : "#ccc"}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Floating Save Button */}
                    <TouchableOpacity
                        style={[
                            styles.fab,
                            { backgroundColor: members.length ? "#000000" : "#ccc" },
                        ]}
                        disabled={!members.length}
                        onPress={() => console.log("Members Saved:", members)}
                    >
                        <Ionicons name="checkmark" size={28} color="#fff" />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    contentContainer: {
        padding: 15,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        color: "#333",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingVertical: 5,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#333",
        justifyContent: "center",
        alignItems: "center",
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    listItemText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: "#333",
    },
    fab: {
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});
