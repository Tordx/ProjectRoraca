
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Local_flights from './FlightCategory_/FlightLocal';
import International from '../Images/International.png'
import local from '../Images/local.png'
import { useNavigation } from '@react-navigation/native';

export default function Flight_category() {

    const navigation = useNavigation('');

    return (
        <View style={styles.container}>
            <View style = {{flexDirection: 'row', width: '100%', alignItems: 'center', marginBottom: 10, marginLeft: 7,}}>
            <Text style  = {{fontSize: 20, fontWeight: 'bold', textAlign: 'left', color: '#f0509d'}}> 
            TRAVEL GETAWAY</Text>
            </View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator = {false}
            >
            <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('FlightInternational')}>
                <Image
                style = {{width: 411, height: 100,}}
                source={International}
                resizeMode = 'cover'
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('FlightLocal')}>
                <Image
                style = {{width: 411, height: 100,}}
                source={local}
                resizeMode = 'cover'
                />
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 160,
        marginTop: 10,
    },
});

