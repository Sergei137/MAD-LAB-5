import React from 'react';
import { View, Text } from 'react-native';

import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
    return (
        <>
            <MainLayout>
                <View>
                    <Text>Awesome To Do List App</Text>
                    <Text>Created by: some dude</Text>
                    <Text>Version 1.69.420</Text>
                </View>
            </MainLayout>
        </>
    )
}

export default AboutScreen;