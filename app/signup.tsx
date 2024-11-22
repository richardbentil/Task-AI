import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
} from 'react-native';

const CreateAccount = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <>
        <StatusBar backgroundColor={"#000000"} />
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join us and manage your tasks easily!</Text>

            {/* Username Input */}
            <TextInput
                style={styles.input}
                placeholder="Username"
                autoCapitalize="none"
            />

            {/* Email Input */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* Password Input with Toggle */}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    secureTextEntry={!passwordVisible}
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.toggleButton}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                >
                    <View>
                        {passwordVisible
                            ? <MaterialCommunityIcons name="eye" size={24} color="#000000" />
                            : <MaterialCommunityIcons name="eye-off" size={24} color="#000000" />}
                    </View>
                </TouchableOpacity>
            </View>

            {/* Create Account Button */}
            <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}>Create Account</Text>
            </TouchableOpacity>

            {/* OR Separator */}
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
                <Text style={styles.separatorText}>OR</Text>
                <View style={styles.separator} />
            </View>

            {/* Login with Google Button */}
            <TouchableOpacity style={styles.googleButton}>
                <FontAwesome name="google" size={21} color="black" style={styles.googleIcon} />
                <Text style={styles.googleButtonText}>Sign up with Google</Text>
            </TouchableOpacity>

            {/* Already have an account */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <Link href="/signin">
                    <Text style={styles.signInLink}>Sign In</Text>
                </Link>
            </View>
        </View>
        </>
    );
};

export default CreateAccount;

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
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingRight: 10,
        marginBottom: 15,
    },
    passwordInput: {
        flex: 1,
        padding: 15,
    },
    toggleButton: {
        padding: 5,
    },
    toggleIcon: {
        width: 20,
        height: 20,
        tintColor: '#6B7280',
    },
    createButton: {
        backgroundColor: '#000000',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    createButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E7EB',
    },
    separatorText: {
        marginHorizontal: 10,
        fontSize: 14,
        color: '#6B7280',
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        padding: 15,
        marginBottom: 20,
    },
    googleIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    googleButtonText: {
        fontSize: 16,
        color: '#111827',
        fontWeight: '600',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 14,
        color: '#6B7280',
    },
    signInLink: {
        fontSize: 14,
        color: '#000000',
        marginLeft: 5,
        fontWeight: '600',
    },
});
