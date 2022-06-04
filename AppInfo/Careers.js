import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Careers_ = () => {
    return (
        <View  style={styles.container}>
            <View>
                <Text style = {styles.textheader}> React Native Developer </Text>
                    <Text style = {{fontWeight: 'bold', margin: 15,}}> Back-end developer </Text>
                        <Text style = {{margin: 15}}> - Must have javascript background </Text>
                        <Text style = {{margin: 15}}> - Must have knowledge with react/react-native/expo</Text>
                    <Text style = {{fontWeight: 'bold', margin: 15,}}> Content Writer </Text>
                        <Text  style = {{margin: 15}}> - Must have knowledge with CSS/HTML/react/react-native/expo</Text>
            </View>
            <View style  = {{bottom: 0, position: 'absolute', alignSelf: 'center'}}>
                <Text> Please contact 9124200157 together with you CV resume </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    textheader:  {
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '800',
        margin: 15,
        color: '#141414'
    },


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#e2e2e2'
        
    },
});

export default Careers_ ;
