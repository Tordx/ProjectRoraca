
import React, { useState } from 'react';
import { 

    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    Modal
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PlaceOrder = () => {

    const [showplaceorder, setshowplaceorder] = useState(false);


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
            <Modal
            hardwareAccelerated 
            animationType='slide'
            transparent = {true}
            visible = {showplaceorder}
            onRequestClose = {() =>
                setshowplaceorder(!showplaceorder)}
            >
            <View style = {styles.modal}>
            <Text style = {styles.text}>Simply tap on the add to cart button, tap the cart button
                tap on checkout, pay the amount and all you need to wait is wait for your fresh food to arrive
           </Text>
           </View>
           </Modal>
        </View> 
    );
};

const styles = StyleSheet.create({

    modal: {
        
        width: 350, 
        height: 350, 
        backgroundColor: '#e2e2e2'
    },

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
