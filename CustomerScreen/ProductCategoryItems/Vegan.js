import { StyleSheet, Text, View, Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { remoteDBItem } from '../../database/pouchDb';
import { FlatList } from 'react-native-gesture-handler';
export default function Vegan() {
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
            return item.Category === 'Vegan';
          });
          if(filteredData) {
              let newFilterData = filteredData.map(item => {
                  return item._id
              })
              setItemdata(newFilterData)
          }
    }  
}

        const renderItem = ({ item }) => {
            return(
                <View style={styles.item}>
                     <Image resizeMode="cover" source={{uri:'https://firebasestorage.googleapis.com/v0/b/roraca.appspot.com/o/9a95dd5d-e665-4b34-8736-1beaa3385421.jpg?alt=media&token=8455cab0-6fab-41cd-89ff-dba39f14d8b3'}} />
                    <Text style={styles.title}>
                        {item}
                    </Text>
                </View>
            )
        }

  return (
    <View style={styles.container}>
            <FlatList
            data={itemdata}
            renderItem={renderItem}
            keyExtractor={item => item}
            >       
            </FlatList>
        </View>
  )
}

const styles = StyleSheet.create({

    text: {

        margin: 5,
        fontSize: 15,

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})