import React from 'react';
import { 
    
    View, 
    Image,
    StyleSheet,
    Text,
    ScrollView,
    ImageBackground,
    Pressable,
} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import _StoreItemList from '../Components/StoreItemSlider';
import Divider from 'react-native-divider';
import Menu_List from './MenuList';
import { useNavigation } from '@react-navigation/native';



    const Appetizers = {uri: 'https://static.onecms.io/wp-content/uploads/sites/24/2021/04/13/KD147-At-Home-Menu-Appetizers-2000.jpg'}
    const Meal = {uri: 'https://pyxis.nymag.com/v1/imgs/71d/99a/59299881ad8f4abce7a9dee4d5a90281af-le-cou-cou-rabbit-20.rsquare.w700.jpg'}
    const dessert = {uri: 'https://i.pinimg.com/originals/78/6c/c3/786cc3a8b788de2f525713acc0237112.png'}
    const drinks = {uri: 'https://i.pinimg.com/originals/d8/c7/0b/d8c70bb2ef143922cc34c5e4dc8198a2.jpg'}

const _StoreProfile_CSVIEW = () => {

    const navigation = useNavigation(); 

    return (
        <ScrollView>
        <View style = {styles.Container} >

        <View style = {styles.Profile} >
                <View>
                    <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Le Coucou </Text>
                    <Text>+1 212-271-4252</Text>
                    <Text style = {{color: 'gold', fontSize: 20,}}>★★★★★ </Text>
                    <Text style = {{fontWeight: '500', marginTop: 5,}}>$$$</Text>
                </View>
            </View>
            <_StoreItemList/>
            <Divider/>
            {/* FLAT LIST */}
            <Pressable style = {{ justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,}}
                onPress = {()=> {
                    navigation.navigate('MenuList');
                }}
                >
                <ImageBackground
                   
                    source={Appetizers}
                    style={styles.ItemCategory}
                    imageStyle={{ borderRadius: 6}}>
                    <View style={styles.OverlayText}>
                        <Text style = {{color: '#fff',
                        fontSize: 35, 
                        fontStyle: 'italic', 
                        fontWeight: 'bold',
                        textShadowColor: '#000',
                        textShadowRadius: 10
                        }}>Appetizers</Text>
                    </View>
                </ImageBackground>
            </Pressable>    
        </View>
        </ScrollView>

        )
}

const styles = StyleSheet.create({

    OverlayText:{
        position: 'absolute',
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
    },

    ItemCategory: {

        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        height: 150,
        borderRadius: 20,
        margin: 5,

    },

    coverphoto: {

        width: 500,
        height: 175,

    },

    profileImage: {
        width: 100,
        height: 100, 
        borderRadius: 100,
    },
    Profile: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 20, 
        

    },

    Container: {

        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#e2e2e2   '

    }

})
export default _StoreProfile_CSVIEW;
