import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuFirst = () => {
    return (
        <View style={styles.container}>
                <Text>MenuCategory</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',
    },
});

export default MenuFirst;
