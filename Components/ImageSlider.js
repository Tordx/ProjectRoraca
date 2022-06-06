import React, { useEffect, useState } from 'react';
import { 

    StyleSheet,
    Image,
    SafeAreaView

} from 'react-native';

import ctyapp from '../Images/ctyapp.png';
import emirates from '../Images/emirates.png';
import lecoucou from '../Images/lecoucou.png';
import TMHSPA from '../Images/TMHSPA.png'

const images  = [ctyapp, emirates, lecoucou, TMHSPA];

export default function Image_slider() {

    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 2500)
        
        return () => clearInterval(intervalId);
    }, [])
    
    return (
        <SafeAreaView>
            <Image
                  style = {{height: 220, width: '100%', alignSelf: 'center'}}
                  resizeMode='cover'
                  source = {currentImage}
            />
        </SafeAreaView>
    );
}
