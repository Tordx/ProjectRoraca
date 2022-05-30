
import React, { useState } from 'react';
import { 

    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PlaceOrder = () => {

    const [showplaceorder, setshowplaceorder] = useState();


    return (
       
        <View style = {{alignContent: 'center'}}>
            <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity
            
            onPress={() => setshowplaceorder(!showplaceorder)}>
                <Text style = {styles.container}>Place Order</Text>
               
            </TouchableOpacity>
            <FontAwesome5
                
                name = 'caret-down'
                size={15}
                />
            </View>
        {
            showplaceorder? <Text style = {styles.text}>Simply tap on the add to cart button, tap the cart button
                tap on checkout, pay the amount and all you need to wait is wait for your fresh food to arrive
            </Text> : null
        }
        
        </View> 
    );
};

const styles = StyleSheet.create({

    text: {

        justifyContent: 'center',
        margin: 15,
        textAlign: 'left',

    },

    container: {
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '800',
        margin: 15,
        color: '#141414'
    },

}
);

export default PlaceOrder;
