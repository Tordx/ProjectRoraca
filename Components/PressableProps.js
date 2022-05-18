
import React from 'react';
import { 
    
    Text, 
    StyleSheet,
    Pressable

} from 'react-native';

const PressableProps = (pressable) => {
    return (

        <Pressable style = {({pressed}) => [
            {backgroundColor: pressed? '#222255': '#e2e2e2'}, styles.Pressable]}
                  onPress={pressable.onPressFunction}
                  >
                  <Text style = {styles.buttontext}> 
            {pressable.title} </Text>
                  </Pressable >
    );
};


const styles = StyleSheet.create({

    buttontext: {

        color: '#ffa45e',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 18,
  
      },

      Pressable: {

        width: 150,
        height: 45,
        backgroundColor: '#222255',
        borderRadius: 30,
        margin: 5,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
});


export default PressableProps;
