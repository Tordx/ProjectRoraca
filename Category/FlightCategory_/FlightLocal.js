import { 
    
    StyleSheet, 
    Text, 
    View, 
    ImageBackground, 
    Image ,
    TouchableOpacity, 
    SafeAreaView, 
    FlatList 
} from 'react-native'
import React,{useState,useEffect} from 'react'
import { Divider } from 'react-native-paper';
import {remoteDBItem} from '../../database/pouchDb';
import localads from '../../Images/localads.png';

export default function Local_flights() {

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
            return item.place === 'Local';
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
                style={{width: 120, height: 120, borderRadius: 20, alignSelf: 'center', margin: 5, }}
                resizeMode = 'cover'
                source={{uri: item.Image}}
                />
                
              
               </View>
                    <View style = {{margin: 2, justifyContent: 'center'}}>  
                        <Text style={styles.title}>
                        {item._id}
                        </Text>
                
                        <Text style={[styles.title, {color: '#ffa45e'}]}>
                        ₱{item.Price}
                        </Text>
                        <Text style={[styles.title, {color: '#141414'}]}>
                        {item.subcategory}
                        </Text>
                    </View>  
                </View>
            </TouchableOpacity>
            )
        }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
        <Image
            
            source={localads}
            resizeMode = 'cover'
            style = {{width: 395, height: 220, alignSelf: 'center', margin: 20, borderRadius: 20}}
            ></Image>   
            <Divider/>
            <FlatList
            data={itemdata}
            renderItem={renderItem}
            keyExtractor={item => item}
            >       
            </FlatList>
        </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    itemcontainer: {

      margin: 3,
      width: 380,
      height: 130, 
      backgroundColor: '#fff', 
      borderRadius: 10,  
      alignItems: 'center',
      flexDirection: 'row',
    
    },

   
    item: {

      borderRadius: 20,
      justifyContent: 'center',
      flexDirection: 'row'
    
    },

    title: {

      fontSize: 15,
      color: '#222',
      textAlign: 'left',
      alignContent: 'center',
      justifyContent: 'center',
      marginLeft: 5,
      marginTop: 5,
      
      },

      
    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2'
  },
})