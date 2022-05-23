import React, {useState, } from 'react';
import {
    
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-crop-picker';
import Driver_history from '../Components/DriverHistory';



export const Driver_profile = () => {


///////////////// get driver name from DB ///////////////////////////
    const [name, showname] = useState('Driver');

    const [image, setImage] = useState('https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg');
    const options = {
        title: 'Select Avatar',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      
        const OpenGallery = () => {
      
            ImagePicker.openPicker({
                
                width: 400,
                height: 300,
                borderRadius: 15,
            }).then(image => {
                console.log(image);
                setImage(image.path);
            })
         
        
        }

    const navigation = useNavigation('');

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style = {{top: 20, justifyContent: 'flex-end'}}
                onPress={() => navigation.navigate('Home')}>
                <Text> Log out </Text>
            </TouchableOpacity>

            <View style = {{justifyContent: 'center', margin: 20, }}>
            
            <View style = {styles.Profile} >
                <View
                    style = {{ 
                    width: 100,
                    height: 100,
                    borderRadius: 15
                }}>
                    <ImageBackground
                        source={{uri: image}}
                        style = {{ width: 100,
                        height: 100,
                        bottom: -20,
                        right: 5,
                        alignItems: 'center',
                        justifyContent: 'center'}}
                        imagestyle = {{borderRadius: 100,}}>
                            <TouchableOpacity
                            onPress={OpenGallery}
                            >
                                <View style = {{justifyContent: 'center', alignSelf: 'center'}}>
                                    <FontAwesome5 
        
                            
                                        name = {'image'}
                                        size ={50}
                                    />
                                </View>
                            </TouchableOpacity>    

                    </ImageBackground>
                </View>
                <View style = {{left: 40, flexDirection: 'column', bottom: -20}}>
                    <Text style = {{fontSize: 30, fontWeight: 'bold'}}>{name}</Text>
                    <Text>+ 18565054 121</Text>
                </View>
                
            </View>
            
            </View>
            <Text> Delivery List: <Text> January </Text></Text>
            <View style = {styles.DH}>            
                <Driver_history
                />
            </View>
            <View style = {{flexDirection: 'row',alignSelf: 'flex-end', margin: 20, }}>
                <Text style = {{}}> Total fees:  <Text style = {{fontSize: 30, fontWeight: '900',  marginRight: 30, marginLeft: 30,}}>50000.00 </Text></Text>
            </View>
            <Text> Delivery History</Text>
        </View>

    );
};

const styles = StyleSheet.create({

    DH: {

        height: 400,


    },

    Profile: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10, 
        right: 40,
        
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2'
    },
});
