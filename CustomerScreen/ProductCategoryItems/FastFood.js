import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { remoteDBItem } from '../../database/pouchDb';
import { FlatList } from 'react-native-gesture-handler';

export default function FastFood() {
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
            return item.Category === 'FastFood';
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