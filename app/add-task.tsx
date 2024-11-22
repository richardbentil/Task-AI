import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function AddPostScreen() {
  const navigation = useNavigation();
  const { task }: any = useLocalSearchParams(); // Get task parameter
  const parsedTask = task ? JSON.parse(task) : {}; // Parse JSON string

  const [title, setTitle] = useState(parsedTask?.title ||"");
  const [content, setContent] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(parsedTask?.color || "");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showFormattingBar, setShowFormattingBar] = useState(false);

  //set header title
  useEffect(() => {
    navigation.setOptions({title: parsedTask?.id ? "Edit task" : "New task"})
  }, [])
  

  const colorOptions = ["#ffffff", "#f8f9fa", "#f0e68c", "#ffebcd", "#e6e6fa"];
  const isFormComplete = title.trim() && content.trim();

  const toggleBold = () => {
    const newContent = content.includes("**") ? content.replace("**", "") : `**${content}**`;
    setContent(newContent);
  };

  const toggleItalic = () => {
    const newContent = content.includes("*") ? content.replace("*", "") : `*${content}*`;
    setContent(newContent);
  };

  const toggleUnderline = () => {
    const newContent = content.includes("__") ? content.replace("__", "") : `__${content}__`;
    setContent(newContent);
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
       <StatusBar backgroundColor={"#000000"} />   
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
          >
           

            {/* Main Content Area */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
              <TextInput
                style={styles.titleInput}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
                placeholderTextColor="#888"
              />
              <TextInput
                style={styles.textArea}
                placeholder="Task description..."
                value={content}
                onChangeText={setContent}
                placeholderTextColor="#888"
                multiline
              />
            </ScrollView>

            {/* Bottom Bar with Color Picker and Formatting Button */}
            <View style={styles.bottomBar}>
              {/* Formatting and Color Picker Toggles */}
              <View style={styles.toggleContainer}>
                {/* Formatting Button */}
                <TouchableOpacity
                  style={styles.formattingButton}
                  onPress={() => setShowFormattingBar(!showFormattingBar)}
                >
                  <Ionicons name="text" size={24} color="#333" />
                </TouchableOpacity>

                {/* Color Picker Button */}
                <TouchableOpacity
                  style={styles.colorButton}
                  onPress={() => setShowColorPicker(!showColorPicker)}
                >
                  <Ionicons name="color-palette" size={24} color="#333" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Formatting Bar */}
            {showFormattingBar && (
              <View style={styles.formattingBar}>
                <TouchableOpacity onPress={toggleBold} style={styles.formattingButton}>
                  <Text style={styles.formattingText}>B</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleItalic} style={styles.formattingButton}>
                  <Text style={styles.formattingText}>I</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleUnderline} style={styles.formattingButton}>
                  <Text style={styles.formattingText}>U</Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Color Picker Bar */}
            {showColorPicker && (
              <View style={styles.colorPickerBar}>
                {colorOptions.map((color) => (
                  <TouchableOpacity
                    key={color}
                    style={[
                      styles.colorDot,
                      {
                        backgroundColor: color,
                        borderWidth: backgroundColor === color ? 3 : 0,
                      },
                    ]}
                    onPress={() => {
                      setBackgroundColor(color);
                      setShowColorPicker(false); // Hide color picker after selection
                    }}
                  />
                ))}
              </View>
            )}

            {/* Floating Save Button */}
            <TouchableOpacity
              style={[
                styles.fab,
                { backgroundColor: isFormComplete ? "#000000" : "#ccc" },
              ]}
              disabled={!isFormComplete}
              onPress={() =>
                console.log("Post Created:", { title, content, backgroundColor })
              }
            >
              <Ionicons name="checkmark" size={28} color="#fff" />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  contentContainer: {
    padding: 15,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 5,
    color: "#333",
  },
  textArea: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    textAlignVertical: "top",
    color: "#333",
    marginTop: 10,
    paddingTop: 10,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: "#e6e6e6",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  formattingButton: {
    padding: 8,
    marginRight: 20,
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  colorButton: {
    padding: 8,
    marginRight: 20,
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  formattingBar: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f8f9fa",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  formattingText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  colorPickerBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#f8f9fa",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  colorDot: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
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
