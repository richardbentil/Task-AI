import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Pressable,
    StatusBar,
} from 'react-native';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
        <StatusBar backgroundColor={"#000000"} />
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>
                Enter your new password below.
            </Text>

            {/* New Password Input */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    style={styles.toggleButton}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Text style={styles.toggleText}>
                        {showPassword ? 'Hide' : 'Show'}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Confirm Password Input */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={!showPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity
                    style={styles.toggleButton}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Text style={styles.toggleText}>
                        {showPassword ? 'Hide' : 'Show'}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Submit Button */}
            <Pressable style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Reset Password</Text>
            </Pressable>
        </View>
        </>
    );
};

export default ResetPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#111827',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginBottom: 15,
        paddingRight: 10,
    },
    input: {
        flex: 1,
        padding: 15,
    },
    toggleButton: {
        padding: 10,
    },
    toggleText: {
        color: '#4CAF50',
        fontWeight: '600',
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
