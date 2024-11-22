import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const Welcome = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={"#000000"} />
                <View style={styles.container}>
                    <Text style={styles.title}>Welcome to Task AI!</Text>
                    <Text style={styles.subtitle}>
                        Organize your tasks efficiently and boost your productivity.
                    </Text>
                    <Link href="/signin" style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </Link>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#e6e6e6',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#555555',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#000000',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
