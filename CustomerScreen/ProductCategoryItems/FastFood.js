import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { remoteDBItem } from '../../database/pouchDb';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setSelectedItem } from '../../Redux/TaskReducer';

export default function FastFood() {
    useEffect(() => {
        getData()
        // StartsSync()
      }, []);

      const dispatch = useDispatch();
      const navigation = useNavigation(); 
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
                  return item
              })
              setItemdata(newFilterData)
          }
    }  
}
        const FFItemView = (item) => {
          console.log(item)
          console.log('item')
          dispatch(setSelectedItem(item))
          navigation.navigate('ProductContainer')
        }

        const renderItem = ({ item }) => {
                    
            return(
              <TouchableOpacity onPress={() => FFItemView(item)}>
                <View style={styles.item}>
                <Image 
                style={{width:195 , height:230}}
                resizeMode="cover"
                source={{uri: item.Image}}
                />
                <Text style={styles.title}>
                    {item._id}
                </Text>
            </View>
            </TouchableOpacity>
         
            )
        }

  return (
    <View style={styles.container}>
            <FlatList
              numColumns = {2}
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
    item: {
        backgroundColor: '#fff',
            width: 195,
            height: 250,
            borderRadius: 10,
            margin: 5,
    
      },
      title: {
        width: 100,
        height: 100,
        fontSize: 20,
        position: 'absolute',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#222'
      },
})