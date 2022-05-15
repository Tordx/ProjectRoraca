import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Store_Ad from './StoreAd';

export default function Store_List () {
    return (
        
        <ScrollView >
            <View style={styles.container}>
            <Store_Ad/>
            <Store_Ad/>
            
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
