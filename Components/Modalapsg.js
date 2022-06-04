import React, {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Modal,
    Pressable,
    TouchableOpacity,
    ImageBackground,
    Alert
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Divider from 'react-native-divider';
import { useSelector , useDispatch } from 'react-redux';
import {setTaskId, setItems , setDones, setImages} from "../Redux/TaskReducer"
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';



export const Modal_apsg = ({navigation}) => {

    const dispatch = useDispatch();

    const [image, setImage] = useState('https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.6435-9/87185544_903521310080816_3768760250925056000_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2c4854&_nc_eui2=AeH33v83fOcWZXfgOUupcPiAlEvD4XdzqreUS8Phd3Oqt5xUnCLXLheRG2D_7OzrwglIbU_CZQccixU5tZv-ubsy&_nc_ohc=oxbjui3VDRoAX9PiMJe&_nc_ht=scontent.fcrk4-1.fna&oh=00_AT9kWtyAB_1PtiXjfvrhlIYm0g3axjbsah8HmpGfemxvfg&oe=62B108CD');
    const [showModal, setshowModal] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    // const options = {
    //     title: 'Select Avatar',
    //     storageOptions: {
    //       skipBackup: true,
    //       path: 'images',
    //     },
    //   };

        const OpenGallery =  async() => {

            const options = {
                maxWidth: 2000,
                maxHeight: 2000,
                storageOptions: {
                  skipBackup: true,
                  path: 'images'
                }
              };

            ImagePicker.openPicker({
                // includeBase64: true,
                width: 400,
                height: 300,
            }).then(image => {
            //     setImage(image);
            //   dispatch(setImages(image));
                setshowModal(false)
                const source = { uri: image.path };
                console.log(source);
                setImage(source);
               

            })
        }

    
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

        const uploadImage = async () => {
            const { uri } = image;
            const filename = uri.substring(uri.lastIndexOf('/') + 1);
            const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
            setUploading(true);
            setTransferred(0);
            const task = storage()
              .ref(filename)
              .putFile(uploadUri);
            // set progress state
            task.on('state_changed', snapshot => {
              setTransferred(
                Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
              );
            });
            try {
              await task;
            } catch (e) {
              console.error(e);
            }
            setUploading(false);
            Alert.alert(
              'Successfully added Photo!'
            );  
            setImage(null);
            const url = await storage().ref(filename).getDownloadURL();
            dispatch(setImages(url));
            console.log(url)
            console.log('url')
          };


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
            style = {{height: 300, width: 400, justifyContent: 'center', alignSelf: 'center'}}
            imagestyle = {{borderRadius: 10,}}
            resize = 'cover'>
            </ImageBackground>

            <TouchableOpacity
        style={styles.Pressable}
        onPress={() => setshowModal(true)}
      >
        <Text style={styles.Text}>Select Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Pressable}
        onPress={uploadImage}
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
