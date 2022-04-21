import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    Pressable,
} from 'react-native';  
import SlideshowTest from '../Components/Slider';



const Image_slider = () => {

    
    return (
        <View style = {{top: 5, justifyContent: 'center', alignContent: 'center', height: 100, }}>
        <Pressable>
          
          <SlideshowTest/>
        </Pressable>



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

//make this component available to the app
export default Image_slider;
