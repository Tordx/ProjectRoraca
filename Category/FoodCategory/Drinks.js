import { StyleSheet, Text, View, Image,TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import { remoteDBItem } from '../../database/pouchDb';
import {  } from 'react-native-gesture-handler';

export default function Drinks() {
    useEffect(() => {
        getData()
        // StartsSync()
      }, []);

    const [itemdata,setItemdata] = useState('')

    const getData = async() => {
        
        var result = await remoteDBItem.allDocs({
          include_docs: true,
          attachments: true
        });
        if(result.rows){
            let modifiedArr = result.rows.map(function(item){
             return item.doc
        });
        let filteredData = modifiedArr.filter(item => {
            return item.Category === 'Drinks';
          });
          if(filteredData) {
              let newFilterData = filteredData.map(item => {
                  return item
              })
              setItemdata(newFilterData)
          }
    }  
}

        const renderItem = ({ item }) => {
            
            return(
            <TouchableOpacity>
              <View style = {styles.itemcontainer}>
                <View style={styles.item}>
                <Image 
                style={{width: 180, height: 250, borderRadius: 20, alignSelf: 'center' }}
                resizeMode = 'cover'
                source={{uri: item.Image}}
                />
                
              
               </View>
               <Text style={styles.title}>
                    {item._id}
                </Text>
                </View>
            </TouchableOpacity>
            )
        }

  return (
    <SafeAreaView style={styles.container}>
            <FlatList
            numColumns = {2}
            data={itemdata}
            renderItem={renderItem}
            keyExtractor={item => item}
            >       
            </FlatList>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    itemcontainer: {

      margin: 5,
      width: 180,
      height: 290, 
      backgroundColor: '#e2e2e2', 
      borderRadius: 20,  
      alignContent: 'center'
    
    },

   
    item: {

      borderRadius: 20,
    
    },

    title: {

      fontSize: 20,
      color: '#222',
      textAlign: 'center',
      alignSelf: 'center'
      },

      
    container: {

      justifyContent: 'center',
      alignItems: 'center',
  },
})