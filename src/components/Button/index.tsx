import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
    label: string;
    action: () => void;
}

export function Button({ action, label }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.72}
            onPress={action}
        >
            <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: Platform.OS === 'ios' ? 15 : 12,
        marginTop: 20
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 18,
    }
})