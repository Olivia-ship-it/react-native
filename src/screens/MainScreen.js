import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = ['aasf', 'bbbb'];

    return (
    <View>
        <Text style={styles.textStyle}>This is the main screen</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;