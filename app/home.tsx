import DatePicker from '@/components/ui/DatePicker';
import { convertDate, getCountryFromDate } from '@/scripts/convert-date';
import { MaterialIcons } from '@expo/vector-icons';
import { Link, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
  StatusBar,
} from 'react-native';

const HomePage = () => {
  const navigation: any = useNavigation()
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  const { day, month, year } = convertDate(selectedDate)
  const timeZone = getCountryFromDate(selectedDate)

  const time = new Date().toLocaleTimeString("en-US").split(" ")[0];
  const dayInLetters = new Date().toUTCString().split(",")[0]

  console.log(time)
  // Sample data for tasks
  const tasks = [
    {
      id: '1',
      title: 'You Have A Meeting',
      time: '3:00 PM - 3:30 PM',
      participants: ['👤', '👤'],
      color: '#FECF8E',
    },
    {
      id: '2',
      title: 'Call Wiz For Update',
      time: '4:20 PM - 4:45 PM',
      participants: ['👤', '👤', '👤'],
      color: '#CFE3F3',
    },
    {
      id: '3',
      title: 'Design Review Meeting',
      time: '5:00 PM - 6:00 PM',
      participants: ['👤', '👤'],
      color: '#FFD6E8',
    },
    {
      id: '4',
      title: 'Team Standup',
      time: '10:00 AM - 10:15 AM',
      participants: ['👤', '👤', '👤', '👤'],
      color: '#D4F1F4',
    },
  ];

  //nvigate to details
  const navigateToDetails = (task: any) => {
    navigation.navigate('add-task', { task: JSON.stringify(task) });
  };

  return (
    <>
      <StatusBar backgroundColor={"#000000"} />
      <View style={styles.container}>
        {/* Tab Buttons */}
        <View style={styles.tabButtons}>
          <View style={styles.tabMainButtons}>
            <Pressable style={[styles.tabButton, styles.activeTab]}>
              <Text style={styles.activeTabText}>Today</Text>
            </Pressable>
            <DatePicker setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
          </View>
          <Link href="/add-task" style={styles.addButton}>
            <MaterialIcons name="add" size={24} color="#000000" />
          </Link>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.date}>{dayInLetters}, {day}</Text>
            <Text style={styles.month}>{month}</Text>
          </View>

          <View style={styles.timeZoneWrapper}>
            <View style={styles.timeZoneSection}>
              <Text style={styles.timeZone}>{time}</Text>
              <Text style={styles.timeZone}>{timeZone}</Text>
            </View>
            <View style={styles.timeZoneSection}>
              <Text style={styles.timeZone}>6:20 PM</Text>
              <Text style={styles.timeZone}>United Kingdom</Text>
            </View>
          </View>
        </View>

        {/* Tasks Section */}
        <View style={styles.taskContainer}>
          <View style={styles.taskSection}>
            <Text style={styles.sectionTitle}>Today's tasks</Text>
            <TouchableOpacity>
              <Text style={styles.reminderButton}>Reminders</Text>
            </TouchableOpacity>
          </View>

          {/* Task List */}
          <FlatList
            data={tasks}
            renderItem={({ item }) => <TaskItem task={item} navigateToDetails={navigateToDetails} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
};

// Task Item Component
const TaskItem = ({ task, navigateToDetails }: { task: { title: string; time: string; participants: string[]; color: string }, navigateToDetails: any }) => (
  <Pressable style={[styles.taskItem, { backgroundColor: task.color }]} onPress={() => navigateToDetails(task)}>
    <View style={styles.taskHeader}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <View style={styles.participants}>
        {task.participants.map((participant, index) => (
          <Text key={index} style={styles.participant}>
            {participant}
          </Text>
        ))}
      </View>
    </View>
    <Text style={styles.taskTime}>{task.time}</Text>
  </Pressable>
);

export default HomePage;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  date: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#000000',
  },
  month: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: -10,
  },
  timeZoneWrapper: {
    borderLeftWidth: 1,
    paddingLeft: 20,
  },
  timeZoneSection: {
    marginBottom: 15,
  },
  timeZone: {
    fontSize: 20,
    color: '#000000',
  },
  tabButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  tabMainButtons: {
    flex: 2 / 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
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
  activeTab: {
    backgroundColor: '#000000',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  tabText: {
    fontSize: 16,
    color: '#000000',
  },
  addButton: {
    backgroundColor: '#cecfca',
    padding: 10,
    borderRadius: 50,
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  taskSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 18,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  reminderButton: {
    fontSize: 14,
    color: '#000000',
    backgroundColor: '#cecfca',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 50,
  },
  taskItem: {
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    maxWidth: 150,
    marginBottom: 15
  },
  taskTime: {
    fontSize: 20,
    fontWeight: 'medium',
    color: '#111827',
    marginTop: 10,
  },
  participants: {
    flexDirection: 'row',
  },
  participant: {
    fontSize: 14,
    marginRight: 5,
  },
});
