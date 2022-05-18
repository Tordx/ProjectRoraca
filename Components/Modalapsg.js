import React, {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Modal,
    Pressable,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Divider from 'react-native-divider';
import { useSelector , useDispatch } from 'react-redux';
import {setTaskId, setItems , setDones, setImages} from "../Redux/TaskReducer"



export const Modal_apsg = ({navigation}) => {

    const dispatch = useDispatch();

    const [image, setImage] = useState('');
    const [showModal, setshowModal] = useState(false);

    const options = {
        title: 'Select Avatar',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

        const OpenGallery = () => {

            ImagePicker.openPicker({
                
                useFrontCamera: true,
                width: 400,
                height: 300,
            }).then(image => {
                console.log(image);
                setImage(image.path);
                setshowModal(false)

            })
         
        
        }

        dispatch(setImages(image));

        
        

        const OpenCamera = () => {

            ImagePicker.openCamera({

                width: 300,
                height: 300,
            }).then(image => {
                console.log(image);
                setImage(image.path);
                this.bs.current.snapTo(1);
            })
         


        }


    return (
        <View
            style = {{justifyContent: 'center', alignContent: 'center'}}
        >
            
            <Modal
                hardwareAccelerated 
                animationType='slide'
                transparent = {true}
                visible = {showModal}
                onRequestClose = {() =>
                setshowModal(!showModal)}
            >
                <View style = {styles.container}>
                    <Text
                    style = {{textAlign: 'center', marginBottom: 20,}}
                    >Upload Photo</Text>
                    <TouchableOpacity
                    onPress={OpenCamera}
                    style = {styles.Pressable}>
                        <Text style = {styles.Text}> Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={OpenGallery} 
                    style = {styles.Pressable}> 
                        <Text style = {styles.Text}> Gallery</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Divider/>
            <ImageBackground
            source={{uri: image}}
            style = {{height: 300, width: 400, justifyContent: 'center', alignSelf: 'center'}}
            imagestyle = {{borderRadius: 10,}}
            resize = 'cover'>
            </ImageBackground>

            <TouchableOpacity
        style={styles.Pressable}
        onPress={() => setshowModal(true)}
      >
        <Text style={styles.Text}>Upload Photo</Text>
      </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({



    Text: {

        color: 'white',
        textAlign: 'center',
        fontSize: 20,

    },

    Pressable: {

    
        width: 350,
        height: 50,
        backgroundColor: '#225',
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignSelf: 'center',
    

    },

    container: {
        
        
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: -15,
        width: 411,
        height: 200,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
});
