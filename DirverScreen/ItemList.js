
import React, {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Individual_parcel_list } from '../Components/DriverIP';
import { Seller_parcel } from '../Components/DriverSellerParcel';

export default function Item_list() {

    const [showParcel, setshowParcel] = useState(true);
    return (

    
    <View style = {styles.body}>
        <View style = {{width: 450, height: '100%', alignContent: 'center'}}>
        {
          showParcel? <Seller_parcel/> : <Individual_parcel_list/>
        }
        </View>
         
      <View style ={{flexDirection: 'row', position: 'absolute', bottom: 50,}} >
      <TouchableOpacity style = {styles.TH}
      onPress={()=> setshowParcel(true)}
      >
      <Text style = {styles.THT} >  Seller </Text>
      </TouchableOpacity >
      
     

      <TouchableOpacity style = {styles.TH}
        onPress={()=> setshowParcel(false)}>
      <Text style = {styles.THT}> Individual </Text>
      </TouchableOpacity>
      </View>

      </View>

    )
};

const styles = StyleSheet.create({

    TH: {
      
        borderWidth: 1,
        borderColor: '#225',
        width: 150,
        height: 35,
        backgroundColor:  '#e2e2e2',
        borderRadius: 30,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.46,
        shadowRadius: 10,
        
        elevation: 53,
      
      
      },

      body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2', 
      }
});

