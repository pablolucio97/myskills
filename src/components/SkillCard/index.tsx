import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps{
    content: string
}

export function SkillCard({ content, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            activeOpacity={.9}
            {...rest}
        >
            <Text style={styles.textSkill}>{content}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textSkill: {
        color: '#FFF',
        fontSize: 16,
        marginTop: 12,
        backgroundColor: '#1F1E25',
        fontWeight: 'bold'
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        borderRadius: 32,
        padding: Platform.OS === 'ios' ? 15 : 15,
        paddingHorizontal: 32,
        marginTop: 12
    }
})