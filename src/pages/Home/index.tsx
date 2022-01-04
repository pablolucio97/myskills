
import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    Platform, StyleSheet, Text, TextInput, TouchableOpacity, View
} from "react-native";
import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

type SkillProps = {
    id: string;
    skill: string;
}


export function Home() {

    const [skill, setSkill] = useState('')
    const [skills, setSkills] = useState<SkillProps[]>([])

    function handleNewSkill() {

        const newSkill = {
            id: new Date().getTime().toString(),
            skill: skill
        }

        setSkills([...skills, newSkill])
    }


    function handleRemoveSkill(skillId: string){
        const removedSkill = skills.filter(skill => skill.id !== skillId)
        setSkills(removedSkill)
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
                label='Add'
                onPress={handleNewSkill}
            />
            <Text style={[styles.title, { marginTop: 40 }]}>MySkills</Text>
            <FlatList
                data={skills}
                keyboardShouldPersistTaps='always'
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard
                    key={item.id}
                    content={item.skill}
                    onPress={() => handleRemoveSkill(item.id)}
                />
                )}
                showsVerticalScrollIndicator={false}
            />

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