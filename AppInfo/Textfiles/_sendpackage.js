
import React, { useState } from 'react';
import { 

    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    Modal
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SendPackage = () => {

    const [showplaceorder, setshowplaceorder] = useState(false);


    return (
       
        <View style = {{alignContent: 'center', justifyContent: 'center'}}>
            
            <TouchableOpacity
             style = {{flexDirection: 'row'}}
            onPress={() => setshowplaceorder(!showplaceorder)}>
                <Text style = {styles.container}>Send package</Text>
            { showplaceorder ?
            <View style = {{justifyContent: 'center'}}> 
                <FontAwesome5
                    
                    name = 'caret-down'
                    size={25}
                    color = '#141414'
            />
            </View> : <View style = {[styles.box, {transform:[{ rotateX: "0deg" },
          { rotateZ: "180deg" }]}]}> 
            <FontAwesome5
                    
                name = 'caret-down'
                size={25}
                color = '#141414'
                style={{}} /></View>
            }   
            </TouchableOpacity>

            {
                showplaceorder? <Text style  = {{margin: 10}}>navigate to your home screen, and tap on the 'parcel' button, fill up the form, pay the fee, choose the sprinter, and wait for him to pick up and deliver your parcel to the address given </Text> : null
            }
        </View> 
    );
};

const styles = StyleSheet.create({

    box: {

        justifyContent: 'center'

    },

    modalcontainer: {
        
        flex: 1,
        backgroundColor: '#00000099',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
        
        width: 350, 
        height: 350, 
        backgroundColor: '#e2e2e2',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 20,
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

export default SendPackage;
