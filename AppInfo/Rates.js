//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';



const Rates_ = () => {

    const image = {uri: 'https://i.imgur.com/U0TnlFG.png'}


    return (
        <ImageBackground
        style = {styles.container}
        source = {image}
        resizeMode = 'cover'
        >
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Rates_;
