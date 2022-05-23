import React, {useEffect} from 'react';
import {

    
    Alert,
    BackHandler,
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,

} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Added_Product from '../SellerScreen/AddedProduct'
import { useNavigation } from '@react-navigation/native';
import {remoteDBItem} from '../database/pouchDb';

export function Add_ProductView () {

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
      }, [])
  


    const navigation = useNavigation();

    

    return (
        <View style={styles.container}>
            
            <Added_Product/>


            
            <TouchableOpacity
            style = {styles.addproduct}
            onPress = {() => {navigation.navigate('AddProduct')}}
            >
                <FontAwesome5
                    name = {'plus'}
                    size = {20}
                    color = {'#e2e2e2'}
                />

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    addproduct: {

        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#225',
        position: 'absolute',
        bottom: 10,
        right: 10,
        elevation: 5,


    },
})
