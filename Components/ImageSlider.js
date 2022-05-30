import React, { useEffect, useState } from 'react';
import { 
    View, 
    StyleSheet,
    Pressable,
    Image,
} from 'react-native';

import roraca from '../Images/0rI72pu.png';
import abbastea from '../Images/8IkDdx0.png';
import jolibee from '../Images/127044_original.jpg';
const images  = [roraca, abbastea, jolibee];

const Image_slider = () => {

    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [])
    
    return (
       
        <Image
                  style = {{height: 220, width: 425, alignSelf: 'center', borderRadius: 10,}}
                  source = {currentImage}
            />
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
