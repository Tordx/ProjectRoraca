import React from 'react';
import {
    
    View, 
    Text, 
    StyleSheet 
} from 'react-native';


export const Driver_chat = () => {
    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

