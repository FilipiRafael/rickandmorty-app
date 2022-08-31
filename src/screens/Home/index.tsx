import {
    SafeAreaView,
    ScrollView,
} from 'react-native';

import React, { useState, useEffect } from 'react';
import styles from './styles';
import { api } from '../../services/api';
import { ICharacter } from '../../types';
import { Card } from '../../components/Card';

export const Home = () => {

    const [characters, setCharacters] = useState<ICharacter[]>();

    useEffect(() => {
        api.get('/character')
        .then((response) => setCharacters(response.data.results))
        .catch((err) => console.error(err));
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {characters?.map((character) => (
                    <Card
                        key={character.id}
                        name={character.name}
                        species={character.species}
                        status={character.status}
                        gender={character.gender}
                        image={character.image}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}