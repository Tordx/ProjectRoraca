import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    Pressable,
    Image,
    FlatList,
} from 'react-native';
import { Switch } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Fourth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e2239d74',
        title: 'Fourth Item',
      },
      {
        id: '58694a0f-233-471f-bd96-145571e29d74',
        title: 'Fourth Item',
      },
      {
        id: '123123-3da1-471f-bd96-145571e29d74',
        title: 'Fourth Item',
      },
      {
        id: '232321313-3da1-471f-bd96-145571e29d74',
        title: 'Fourth Item',
      },

];

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const _checkout = () => {

    const renderItem = ({ item }) => (
        <Item title={item.title} /> );

    const [isSelected, setSelection] = useState(false);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (

      

        <View style={styles.container}>
            <FlatList
        
        
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}

        />
            <View style = {styles.SwitchButton}>
                <View style = {{
                    marginRight: 170, 
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'center',
                    }} >
                   
                        <Text> Available Coins:
                    <Text style = {{color: '#222255', fontSize: 17, fontWeight: '900', textAlign: 'center' }}> 150
                    </Text>
                    </Text> 
                </View>
                <Image
                        style = {{width: 25, height: 25, marginRight: 10,   }}
                        source = {{uri: 'https://i.imgur.com/o67cBSn.png'}}
                        />
                <Switch 
                    style = {{marginRight: 20,}}
                    color='#222255'
                    value={isSwitchOn} 
                    onValueChange={onToggleSwitch} />
            </View>
            <View style = {styles.bottomcheckout}>
              <View style={styles.container}>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    tintColors = {{ true: '#225' , false: '#808080' }}
                  />
                
                </View>
                <Text style={styles.label}>{isSelected ? "added" : 'All'} </Text>
               
              </View>
                <Text style = {{

                    fontSize: 25,
                    fontWeight: 'bold',

                }}>
                    0.00
                </Text>
                <Pressable
                style = {styles.bottomcheckoutbox}>
                    <Text 
                    style = {styles.checkouttext}>
                        Check Out 
                        <Text style = {{fontSize: 15,}}> (<Text> 0 </Text>)  </Text> 
                
                    </Text>
                </Pressable>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

      checkboxContainer: {
        marginRight: 125,
        top: 10,
      },
      label: {
          bottom: 15,
          right: 20,

      },

    item: {
        backgroundColor: '#e2e2e2',
        padding: 20,
        marginVertical: 0,
        width: 405,
        alignItems: 'center',
    
      },
      title: {
        fontSize: 32,
        textAlign: 'center',
      },

    SwitchButton: {

        flexDirection: 'row',
        width: 420,
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',
        shadowColor: "#000",
        shadowOffset: {
	            width: 0,
	            height: 4,
        },
        shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,

    },

    checkouttext: {

        textAlign: 'center',
        justifyContent: 'center',
        color: '#e2e2e2',
        fontWeight: '900',
        fontSize: 15,

    },

    bottomcheckoutbox: {

        borderRadius: 10,
        width: 130,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#222255',
        margin: 20,

    },

    bottomcheckout: {

        flexDirection: 'row',
        width: 420,
        height: 75,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',
       
    },
});

export default _checkout;
