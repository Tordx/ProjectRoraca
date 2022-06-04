
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';



const MainCategory = () => {


    const navigation = useNavigation();

    return (
        <View>
            
        <Text style  = {{fontSize: 20, fontWeight: 'bold', color: '#225', marginLeft: 10,}}> 
            CATEGORY</Text>
        <ScrollView
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        >
       
        <View style={styles.container}>
        <View  style = {{flex: 1, justifyContent: 'center',}}  >
            <TouchableOpacity onPress={() => navigation.navigate('FoodCategory')}>
                <View style = {styles.cells}>
                    <FontAwesome5
                        style = {{alignSelf: 'center', justifyContent: 'center'}}
                        name = 'hamburger'
                        size={25}
                        color = {'#225'}

                    />
                    
                </View>
                <View style = {{ alignSelf: 'center', justifyContent: 'center',}}>
                
                </View>
                <Text style = {{textAlign: 'center' }} >Food</Text>
                </TouchableOpacity>
           </View>
           
           <View  style = {{flex: 1, justifyContent: 'center',}}  >
              <TouchableOpacity onPress={() => navigation.navigate('Flightlist')}>
                <View style = {styles.cells}>
                    <FontAwesome5
                        style = {{alignSelf: 'center', justifyContent: 'center'}}
                        name = 'plane'
                        size={25}
                        color = {'#225'}

                    />
                    
                </View>
                
                <View style = {{ alignSelf: 'center', justifyContent: 'center',}}>
                
                
                <Text style = {{textAlign: 'center' }} >Travels</Text>
                </View>
              </TouchableOpacity>    
           </View>
          
           <View  style = {{flex: 1, justifyContent: 'center',}}  >
                <View style = {styles.cells}>
                    <FontAwesome5
                        style = {{alignSelf: 'center', justifyContent: 'center'}}
                        name = 'hotel'
                        size={25}
                        color = {'#225'}

                    />
                    
                </View>
                <View style = {{ alignSelf: 'center', justifyContent: 'center',}}>
                
                </View>
                <Text style = {{textAlign: 'center' }} >Hotel</Text>
           </View>
           <View  style = {{flex: 1, justifyContent: 'center',}}  >
                <View style = {styles.cells}>
                    <FontAwesome5
                        style = {{alignSelf: 'center', justifyContent: 'center'}}
                        name = 'store'
                        size={25}
                        color = {'#225'}

                    />
                    
                </View>
                <View style = {{ alignSelf: 'center', justifyContent: 'center',}}>
                
                </View>
                <Text style = {{textAlign: 'center' }} >Restaurant</Text>
           </View>
           <View  style = {{flex: 1, justifyContent: 'center',}}  >
                <View style = {styles.cells}>
                    <FontAwesome5
                        style = {{alignSelf: 'center', justifyContent: 'center'}}
                        name = 'shopping-basket'
                        size={25}
                        color = {'#225'}

                    />
                    
                </View>
                <View style = {{ alignSelf: 'center', justifyContent: 'center',}}>
                
                </View>
                <Text style = {{textAlign: 'center' }} >Groceries</Text>
           </View>
           <View  style = {{flex: 1, justifyContent: 'center',}}  >
                <View style = {styles.cells}>
                    <FontAwesome5
                        style = {{alignSelf: 'center', justifyContent: 'center'}}
                        name = 'spa'
                        size={25}
                        color = {'#225'}

                    />
                    
                </View>
                <View style = {{ alignSelf: 'center', justifyContent: 'center',}}>
                
                
                <Text style = {{textAlign: 'center' }} >Wellness</Text>
                </View>
           </View>
           <View  style = {{flex: 1, justifyContent: 'center',}}  >
                <View style = {styles.cells}>
                    <FontAwesome5
                        style = {{alignSelf: 'center', justifyContent: 'center'}}
                        name = 'taxi'
                        size={25}
                        color = {'#225'}

                    />
                    
                </View>
                <View style = {{ alignSelf: 'center', justifyContent: 'center',}}>
                
                
                <Text style = {{textAlign: 'center' }} >Taxi</Text>
                </View>
           </View>
           <View  style = {{flex: 1, justifyContent: 'center',}}  >
                <View style = {styles.cells}>
                    <FontAwesome5
                        style = {{alignSelf: 'center', justifyContent: 'center'}}
                        name = 'map-marked-alt'
                        size={25}
                        color = {'#225'}

                    />
                    
                </View>
                <View style = {{ alignSelf: 'center', justifyContent: 'center',}}>
                
                
                <Text style = {{textAlign: 'center' }} >Local services</Text>
                </View>
           </View>
        </View>
        
        </ScrollView>
        </View> 
    );
};

const styles = StyleSheet.create({

    cells: {

        backgroundColor: '#e2e2e2',
        width: 60,
        height: 60,
        borderRadius: 100,
        margin: 15,
        borderWidth: 3,
        borderColor: '#225',
        justifyContent: 'center'
      
    },

    container: {

        flexDirection: 'row'

    },
});

export default MainCategory;
