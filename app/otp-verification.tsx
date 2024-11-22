import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

const OtpVerification = () => {
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(30); // Countdown timer for resend button

    // Start countdown timer
    React.useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [timer]);

    return (
        <>
        <StatusBar backgroundColor={"#000000"} />
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>OTP Verification</Text>
            <Text style={styles.subtitle}>
                Enter the code sent to your email or phone.
            </Text>

            {/* OTP Input */}
            <TextInput
                style={styles.otpInput}
                placeholder="Enter OTP"
                keyboardType="numeric"
                maxLength={6} // Adjust length based on OTP requirement
                value={otp}
                onChangeText={setOtp}
            />

            {/* Resend OTP */}
            <View style={styles.resendContainer}>
                {timer > 0 ? (
                    <Text style={styles.resendText}>
                        Resend code in {timer}s
                    </Text>
                ) : (
                    <TouchableOpacity
                        onPress={() => {
                            setTimer(30); // Reset timer
                            // Handle resend OTP logic here
                        }}
                    >
                        <Text style={styles.resendLink}>Resend Code</Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* Verify Button */}
            <TouchableOpacity style={styles.verifyButton}>
                <Text style={styles.verifyButtonText}>Verify</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};

export default OtpVerification;

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
    otpInput: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        padding: 15,
        textAlign: 'center',
        fontSize: 18,
        letterSpacing: 5, // Space between digits
        marginBottom: 20,
    },
    resendContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    resendText: {
        fontSize: 14,
        color: '#6B7280',
    },
    resendLink: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: '600',
    },
    verifyButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
    },
    verifyButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
