
import React from 'react';
import { 
    
    View, 
    Text, 
    StyleSheet,
    ScrollView,
} from 'react-native';
import Divider from 'react-native-divider';

const Help_center = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style = {styles.Header} >HOME PAGE </Text>
                <Text style = {styles.text}> When you open the app the first screen that appears is the homepage, 
                        this page advertises businesses products
                </Text>
                <Divider/>
                <Text style = {styles.Header} > DRAWER NAVIGATOR  </Text>
                <Text style = {styles.text}> You can pull down the top arrow of any front page of the app and it will show you the drawer navigator, this drawer contains other link to other 
screens such as Track, Rates, Login/register, FAQ, Contact, About, Careers.
                </Text>
                <Divider/>
                <Text style = {styles.Header} >DOWLOAD SITE </Text>
                <Text style = {styles.text}> this is the dowload page when customer visits the website roraca.weebly.com
                </Text>
                <Divider/>
                <Text style = {styles.Header} >LOG IN</Text>
                <Text style = {styles.text}>You can login your account here by typing your username and password, 
if you don’t have account yet, click the “Create account” button to 
be re-directed to create account screen
                </Text>
                <Divider/>
                <Text style = {styles.Header} >CREATE ACCOUNT</Text>
                <Text style = {styles.text}>You need to provide all the information needed to create your account; 
you can choose what type of account you’ll be having (Seller, customer, Driver) to determine the function of your account. before singing up make sure to understand the T&C and 
after you successfully sign up you will be directed to the login page again.
                </Text>
                <Divider/>
                <Text style = {styles.Header} >SELLER</Text>
                <Text style = {styles.text}> After you login to your account you will be re- directed 
to your Page in this case the Seller Page.
                </Text>
                <Divider/>
                <Text style = {styles.Header} >LISTING MANAGER </Text>
                <Text style = {styles.text}> The Ad Manager is where the seller sees and add products by clicking the pink circle with + sign.
Customers can view seller’s product in the foodlane page
                </Text>
                <Divider/>
                <Text style = {styles.Header} >PROFILE </Text>
                <Text style = {styles.text}> This is the seller’s profile in this screen seller can view transaction history,
 they can also search a certain transaction and expand the view by clicking “view all”
                </Text>
                <Divider/>
                <Text style = {styles.Header} >ORDERS</Text>
                <Text style = {styles.text}> This is where the customer sees its order and history. The customer can also search a past order, 
and customer can also expand the view by clicking”
                </Text>
                <Divider/>
                <Text style = {styles.Header} >FOODLANE</Text>
                <Text style = {styles.text}> This is where the customer can view Seller’s products,
 they can also search items/goods in the search bar, 
customer can check specific type of products in category

                </Text>

                


                
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Header:{

        fontSize: 20,
        fontWeight: '900',
        textAlign: 'left'

    },

    text: {
        textAlign: 'center'
    }
});

export default Help_center;
