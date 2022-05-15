import React from 'react';
import { 
    
    View,
    Text, 
    StyleSheet,
    TextInput,
    Pressable,
} from 'react-native';


 const Add_Product = () => {
    return (
        <View style={styles.container}>
            <Text
            style = {{fontSize: 20, fontWeight: 'bold'}}
            > Add Product </Text>
            <View style = {styles.TextInput}>
                <TextInput
                
                placeholder='Product Name'

                />
                </View>
                <View style = {styles.TextInput}>
                <TextInput
                
                placeholder='Price'

                />
                </View>
                <View style = {styles.TextInput}>
                <TextInput
                
                placeholder='Delivery fee'

                />
                </View>
                <View style = {styles.TextInput}>
                <TextInput
                
                placeholder='Description'

                />
            </View>
            <Pressable
            style = {{
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: 500,
                backgroundColor: '#ec4176',
                borderRadius: 20,
                position: 'absolute',
                bottom: 0,
            }}
            >
                <Text
                style = {{color: 'white', fontWeight: '900'}}
                > ADD </Text>
            </Pressable>
        </View>
        
    );
};

const styles = StyleSheet.create({

    TextInput: {

        margin: 10,
        width: 300,
        height: 40  ,
        borderRadius: 10,
        backgroundColor: '#fff',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',
    },
});

export default Add_Product;