
import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity
} from "react-native";


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
            <TouchableOpacity
                style={styles.button}
                activeOpacity={.72}
                onPress={handleNewSkill}
            >
                <Text style={styles.textButton}>Add</Text>
            </TouchableOpacity>
            <Text style={[styles.title, { marginTop: 40 }]}>MySkills</Text>
            {skills.map((skill, i) => (
                <TouchableOpacity key={i} style={styles.buttonSkill}>
                    <Text  style={styles.textSkill}>{skill}</Text>
                </TouchableOpacity>
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
    textSkill: {
        color: '#FFF',
        fontSize: 16,
        marginTop: 12,
        backgroundColor: '#1F1E25',
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 12,
        marginTop: 30,
        borderRadius: 8
    },
    button: {
        backgroundColor: '#A370F7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: Platform.OS === 'ios' ? 15 : 12,
        marginTop: 20
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        borderRadius: 8,
        padding: Platform.OS === 'ios' ? 15 : 12,
        marginTop: 12
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 18,
    }
})