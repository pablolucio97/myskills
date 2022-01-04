
import React, { useState } from 'react';
import {
    Platform, StyleSheet, Text, TextInput, TouchableOpacity, View
} from "react-native";
import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';


export function Home() {

    const [skill, setSkill] = useState('')
    const [skills, setSkills] = useState([''])

    function handleNewSkill() {
        setSkills([...skills, skill])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Pablo</Text>
            <TextInput
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor='#555'
                onChangeText={setSkill}
            />
            <Button
                label='ADD'
                action={handleNewSkill}
            />
            <Text style={[styles.title, { marginTop: 40 }]}>MySkills</Text>
            {skills.map((skill, i) => (
                <SkillCard
                    key={i}
                    content={skill}
                />
            )).slice(1, skills.length)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 12,
        marginTop: 30,
        borderRadius: 8
    },
})