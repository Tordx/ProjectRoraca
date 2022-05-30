import React, { Component } from 'react';
import { 

    View, 
    Text, 
    StyleSheet,
    ScrollView, 
    TouchableOpacity 
} from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const About_ = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                
            <View style = {{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#e2e2e2',
    }} >
            <Text style = {{ fontFamily: 'bauhaus93', fontSize: 75, color: '#225', margin: 50}}>ror<Text style = {{color: '#ffa45e'}}>aca</Text></Text>
            </View>
            <View style = {{justifyContent: 'center', alignContent: 'center', margin: 10,}}>
            <Text style = {{fontSize: 20, fontWeight: '900', textAlign: 'left', marginLeft: 0}} > About us </Text>
            <Text style = {{textAlign: 'left',  margin: 10,}} >We develop this app for consumer's daily essential just by opening a single app. it helps them save storage, data, effort and time scrolling and opening various apps just to make a purchase </Text>
            <Text style = {{textAlign: 'left',  margin: 10,}} >roraca© is your local centralized service app that features more than just food delivery. it includes restaurant, hotel, taxi, local service bookings, individual parcel delivery, and more. </Text>
            <Text style = {{textAlign: 'left', margin: 10,}} >Co-founded by Roven Kyle Narra & Ryan Cezar Vallo, this app is suppose to be developed just for their thesis but some measures are made and they determine
            that the app can be release in public by 2023 </Text>
            </View>
            <Divider/>
            <View style = {{justifyContent: 'center', alignContent: 'center', margin: 10,}}>
            <Text style = {{fontSize: 20, fontWeight: '900', textAlign: 'left', marginLeft: 0}} > Grow your business with us </Text>
            <Text style = {{textAlign: 'left', margin: 10,}} >We focus on customers satifactions by giving them the cheapest, fastest and most reliable delivery and services app ever in the market</Text>
            <Text style = {{textAlign: 'left', margin: 10,}} >The app only deducts 2% of your 5,000 netprofit and it is the cheapest in market so you could grow your business without any out of pocket fees </Text>
            
            </View>
            <Divider/>
            <View style = {{justifyContent: 'center', alignContent: 'center', margin: 10,}}>
            <Text style = {{fontSize: 20, fontWeight: '900', textAlign: 'left', marginLeft: 0}} > Earn as a sprinter </Text>
            <Text style = {{textAlign: 'left', margin: 10,}} >Have a vehicle that you can use to earn money? you can join us as full-time or part-time just by fulfilling our minimal Requirements</Text>
            <Text style = {{textAlign: 'left', margin: 10,}} >The app only deducts 5% of your 5,000 netprofit and it is the cheapest in market so you could earn more with minimal fees</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('CreateView')}>
            <Text style = {{textAlign: 'center', margin: 20, color: '#ffa45e'}} >Sign up </Text>
            </TouchableOpacity>
            <View style = {{justifyContent: 'center', alignContent: 'center', margin: 10,}}>
            <Text style = {{textAlign: 'center', fontSize: 10}} >roraca©  </Text>
            <Text style = {{textAlign: 'center', fontSize: 10}} > roraca development team </Text>
            <Text style = {{textAlign: 'center', fontSize: 10}} > Sta. Barbara, Pangasinan  </Text>
            </View>
            </ScrollView>
            
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

export default About_;
