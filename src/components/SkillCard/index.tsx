import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native'

type SkillCardProps = {
    content: string
}


export function SkillCard({ content }: SkillCardProps) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            activeOpacity={.9}
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