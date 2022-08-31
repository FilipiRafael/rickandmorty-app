import { View, Text, Pressable, Image, Modal } from 'react-native';
import React, { useState } from 'react';

import styles from './styles';

export const Card = ({
    name,
    species,
    status,
    gender,
    image,
}) => {

    const [characterSelected, setCharacterSelected] = useState();
    const [openModal, setOpenModal] = useState(false);

    return (
        <Pressable
            style={styles.card}
            onPress={() => {
                setCharacterSelected({
                    name,
                    species,
                    status,
                    gender,
                    image
                });
                setOpenModal(true);
            }}
        >
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
            <View style={styles.informations}>
                <Text>{name}</Text>
                <View>
                    <Text>- {species}</Text>
                    <Text>- {gender}</Text>
                    <Text>- {status}</Text>
                </View>
            </View>
            <Modal
                visible={openModal}
                animationType='slide'
            >
                {characterSelected && (
                    <Image
                        source={{ uri: characterSelected.image }}
                        style={{ width: 300, height: 300 }}
                    />
                )}
            </Modal>
        </Pressable>
    );
}