import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';


interface ButtonProps extends TouchableOpacityProps {
    label: string
}

export function Button({ label, ...rest } : ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.72}
            {...rest}
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