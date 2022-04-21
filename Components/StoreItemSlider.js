import React from 'react';
import { 
    
    View, 
    Text, 
    StyleSheet, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 import {FlatListSlider} from 'react-native-flatlist-slider';
 import Preview from '../Components/StoreImageSlider';


   


const _StoreItemList = () => {

    const images = [
        {
         image:'https://lecoucou.com/wp-content/uploads/sites/19/2019/09/lecoucou_jenniferchase-9-e1569341111753-1024x576.jpg',
         desc: 'poulet poêlé blanchi dans de la sauce soja, des olives et un bouquet doignons, je ne sais pas ce que cest',
        },
       {
         image:'https://lecoucou.com/wp-content/uploads/sites/19/2020/01/IMG_0036-1024x723.jpg',
         desc:
           'Cest fondamentalement le homard farceur le plus cher que vous puissiez acheter, mais cest bien',
       },
       {
        image:'https://robbreport.com/wp-content/uploads/2016/12/herb-crusted-prime-rib-21.jpg?w=900&h=568&crop=1',
        desc:
          'Cest un steak de tomahawk avec de la purée de pommes de terre, de la nourriture surestimée mais toujours bonne',
      },
       ]
    return (
        
        <FlatListSlider
        data={images}
        width={300}
        component={<Preview />}
        onPress={item => alert(JSON.stringify(item))}
        indicatorActiveWidth={40}
        contentContainerStyle={{paddingHorizontal: 16}}
      />
    );
};

//make this component available to the app
export default _StoreItemList;
