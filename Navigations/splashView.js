import React, { useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,

} from 'react-native';


function Splash ({navigation}) {

    useEffect(() => {
setTimeout(() => {
    navigation.replace('Home');
}, 2000);

    }, []);

    return (
        <View style={styles.container}>
            <Image
            style = {{ width: 300,
                height: 150}}
            source = {{uri: 'https://i.imgur.com/aMi2af5.png'}}

            />
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

export default Splash;
