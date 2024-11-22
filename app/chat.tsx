import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChatScreen() {
    const [comments, setComments] = useState([
        { id: "1", text: "Hello, how are you?", initials: "EB", time: "10:30 AM" },
        { id: "2", text: "I'm good! Thanks for asking.", initials: "KW", time: "10:32 AM" },
    ]);
    const [newComment, setNewComment] = useState("");

    // Handle sending a new comment
    const sendComment = () => {
        if (newComment.trim()) {
            const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            setComments((prev) => [
                ...prev,
                { id: String(prev.length + 1), text: newComment, initials: "ME", time },
            ]);
            setNewComment("");
        }
    };

    return (
        <View style={styles.container}>
            {/* Chat List */}
            <FlatList
                data={comments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.commentContainer}>
                        {/* User Initials */}
                        <View style={styles.initialsContainer}>
                            <Text style={styles.initialsText}>{item.initials}</Text>
                        </View>
                        {/* Comment Content */}
                        <View style={styles.commentContent}>
                            <Text style={styles.commentText}>{item.text}</Text>
                            <Text style={styles.commentTime}>{item.time}</Text>
                        </View>
                    </View>
                )}
            />

            {/* Comment Input */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.inputContainer}
            >
                <TextInput
                    style={styles.input}
                    placeholder="Type your comment..."
                    value={newComment}
                    onChangeText={setNewComment}
                    placeholderTextColor="#888"
                />
                <TouchableOpacity onPress={sendComment} disabled={!newComment.trim()}>
                    <Ionicons
                        name="send"
                        size={28}
                        color={newComment.trim() ? "#007bff" : "#ccc"}
                    />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    commentContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    initialsContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#007bff",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    initialsText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentContent: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    commentText: {
        fontSize: 16,
        color: "#333",
    },
    commentTime: {
        fontSize: 12,
        color: "#888",
        marginTop: 5,
        textAlign: "right",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        fontSize: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
        marginRight: 10,
        color: "#333",
    },
});
