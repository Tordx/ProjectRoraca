import React, {useEffect, useState} from 'react';
import {
    
    View, 
    Text, 
    StyleSheet,
    BackHandler, 
    TextInput,
    Pressable,
} from 'react-native';
import Item_list from '../DirverScreen/ItemList';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export const Item_view = () => {

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
      }, [])

      const [sortUp, setsortUp] = useState(false);

    return (
        <View style={styles.container}>
            <View
            style = {{height: 625, top: 35}}>
            <Item_list/>
            </View>
            
            <View style = {{

                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'flex-start',
                    position: 'absolute',
                    top: 0,
                   

                }}>
                <View style = {{ elevation: 5,
                    flexDirection: 'row',
                    width: 325,
                    height: 35,
                    margin: 15,
                    borderRadius: 20,
                    backgroundColor: '#ffff'}}>

                    <View style = {{
                        alignContent: 'center',
                        justifyContent: 'center',
                        margin: 5,
                }}>
                        <FontAwesome5
       
                            name = {'search'}
                            size ={15}
                        />
                    </View>

                        <TextInput style = {{top: 3,}}
                            placeholder='search orders'
                />
                </View>

                 <View
                style = {{
                alignContent: 'center',
                justifyContent: 'center',
                margin: 5,
                }}>
                
                <Pressable
                onPress={({pressed}) => setsortUp(!sortUp)}
                >
                { sortUp ?
                <FontAwesome5
       
                name = {'sort-amount-down'}
                size ={30}
                /> :

                <FontAwesome5
       
                name = {'sort-amount-up'}
                size ={30}
                />

                }
                </Pressable>
                    </View>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2'
    },
});

