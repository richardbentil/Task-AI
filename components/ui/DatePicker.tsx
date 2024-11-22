import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Alert,
  Pressable,
} from "react-native";
import * as Calendar from "expo-calendar";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({setSelectedDate, selectedDate}: any) => {
  const [hasPermission, setHasPermission] = useState(false);
 
  const [showPicker, setShowPicker] = useState(false);

  // Request calendar permissions
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        setHasPermission(true);
      } else {
        Alert.alert("Permission Denied", "Calendar access is required.");
      }
    })();
  }, []);

  // Show the date picker
  const openDatePicker = () => {
    setShowPicker(true);
  };

  // Handle date selection
  const handleDateChange = (event: any, date: any) => {
    setShowPicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <>
      <Pressable style={[styles.tabButton, {marginRight: 20}]} onPress={openDatePicker}>
            <Text style={styles.tabText}>Calendar</Text>
          </Pressable>
      {hasPermission ? (
        <>
        

          {/* Date Picker */}
          {showPicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display={Platform.OS === "ios" ? "inline" : "default"}
              onChange={handleDateChange}
            />
          )}
        </>
      ) : (
        <Text style={styles.errorText}>Calendar access is not granted.</Text>
      )}
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
    tabButton: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingVertical: 10,
        borderRadius: 25,
        alignItems: 'center',
        marginHorizontal: 5,
        borderColor: '#000000',
        borderWidth: 1,
      },
      
  tabText: {
    fontSize: 16,
    color: '#000000',
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});
