import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Login from '../components/Login';
import Signup from '../components/Signup';

const ProfileScreen = () => {
    return (
    <View>
        <Login />
        <Signup />
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ProfileScreen;