import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
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

const Signin = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <>
        <StatusBar backgroundColor={"#000000"} />
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>

            {/* Email Input */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* Password Input */}
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

            {/* Forgot Password */}
            <Link href="/forgot-password">
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </Link>

            {/* Sign-In Button */}
            <Link href="/home" style={styles.signinButton}>
                <Text style={styles.signinButtonText}>Sign In</Text>
            </Link>

            {/* OR Separator */}
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
                <Text style={styles.separatorText}>OR</Text>
                <View style={styles.separator} />
            </View>

            {/* Google Sign-In Button */}
            <TouchableOpacity style={styles.googleButton}>
                <FontAwesome name="google" size={21} color="black" style={styles.googleIcon} />
                <Text style={styles.googleButtonText}>Login with Google</Text>
            </TouchableOpacity>

            {/* Create Account */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account?</Text>
                <Link href="/signup">
                    <Text style={styles.createAccount}>Create Account</Text>
                </Link>
            </View>
        </View>
        </>
    );
};

export default Signin;

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
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    forgotPassword: {
        color: '#000000',
        fontSize: 14,
        textAlign: 'right',
        marginBottom: 20,
    },
    signinButton: {
        backgroundColor: '#000000',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        marginVertical: 20,
    },
    signinButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
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
    createAccount: {
        fontSize: 14,
        color: '#000000',
        marginLeft: 5,
        fontWeight: '600',
    },
});
