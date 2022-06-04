
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Meal from '../Images/Meal.png'
import Vegan from '../Images/Vegan.png'
import Fastfood from '../Images/Fastfood.png'
import Milktea from '../Images/Milktea.png'
// create a component
export default function Food_category () {
    return (
        <View style={styles.container}>
            <View style = {{flexDirection: 'row', width: '100%', alignItems: 'center', marginBottom: 10, marginLeft: 7,}}>
            <Text style  = {{fontSize: 20, fontWeight: 'bold', textAlign: 'left', color: '#f0509d'}}> 
            DINE-IN & DELIVER</Text>
            </View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator = {false}
            >
            <View style = {{flexDirection: 'row'}}>
                <Image
                style = {{width: 411, height: 100,}}
                source={Meal}
                resizeMode = 'cover'
                />
                <Image
                style = {{width: 411, height: 100,}}
                source={Vegan}
                resizeMode = 'cover'
                />
                <Image
                style = {{width: 411, height: 100,}}
                source={Fastfood}
                resizeMode = 'cover'
                />
                <Image
                style = {{width: 411, height: 100,}}
                source={Milktea}
                resizeMode = 'cover'
                />
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

