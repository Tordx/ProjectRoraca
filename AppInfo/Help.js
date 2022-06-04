
import React from 'react';
import { 
    
    View, 
    StyleSheet,
    ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Divider, Text} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import PlaceOrder from './Textfiles/_placeorder';
import SendPackage from './Textfiles/_sendpackage';
import TrackOrder from './Textfiles/_trackorders';
import ReportUsers from './Textfiles/_reportusers'
import PaymentOptions from './Textfiles/_paymentoptions';
import ListItem from './Textfiles/_listitems';
import SendOrders from './Textfiles/_sendorders';
import ManageOrders from './Textfiles/_manageorders';
import Withdraw from './Textfiles/_withdraw';
import GetDeliveries from './Textfiles/_getdeliveries';
import Requirements from './Textfiles/_requirements';
import Tracklocation from './Textfiles/_getdeliveries';
import Rates from './Textfiles/_rates';
const Help_center = () => {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
        <ScrollView>
        
            <View style = {styles.HeaderContainer} > 
            <Text style = {styles.Header} >ror<Text style = {[styles.Header ,{color: 'orange'}]} >aca</Text></Text>
            <Text style = {{
            textAlign: 'center',
            marginLeft: 15,
            marginBottom: 20,
            }}> Help Center </Text>
            </View>
        
            <Divider/>

            <TouchableOpacity
            style = {{alignSelf: 'center', margin: 20,}}
            onPress={() => navigation.navigate('Careers')}
            >
                <Text> CAREERS</Text>
            </TouchableOpacity>

                <View style = {styles.faqbox}>
                <FontAwesome
                
                    name = {'lock'}
                    size = {20}
                    color = {'red'}

                />
                    <Text style = { {

                        justifyContent: 'center',
                        textAlign: 'left',
                        fontSize: 20,
                        fontWeight: '800',
                        color: '#595858'    
                    }}> Account Manager
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text style = {styles.helpboxtext}> Account Setting
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {styles.helpboxtext}> Password
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {styles.helpboxtext}> Data Privacy
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {styles.helpboxtext}> Reported User
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {styles.helpboxtext}> Notifications
                    </Text>
                </TouchableOpacity>
            
            <Divider/>

            <Text style = {{

                justifyContent: 'center',
                textAlign: 'center',
                fontSize: 25,
                fontWeight: '900',
                color: '#808080',
                margin: 10,
            }}> Frequently Asked Questions </Text>
                <View style = {styles.faqbox}>
                <FontAwesome
                
                    name = {'users'}
                    size = {25}
                    color = {'pink'}

                />
                    <Text style = { {

                        justifyContent: 'center',
                        textAlign: 'left',
                        fontSize: 20,
                        fontWeight: '800',
                        color: '#595858'
                    }}> Customers
                    </Text>
                </View>
                <PlaceOrder/>
                <SendPackage/>
                <TrackOrder/>
                <ReportUsers/>
                <PaymentOptions/>
                <View style = {styles.faqbox}>
                <FontAwesome
                
                    name = {'store'}
                    size = {25}
                    color = {'#225'}

                />
                    <Text style = { {

                        justifyContent: 'center',
                        textAlign: 'left',
                        fontSize: 20,
                        fontWeight: '800',
                        color: '#595858'
                    }}> Seller
                    </Text>
                </View>
                <ListItem/>
                <SendOrders/>
                <ManageOrders/>
                <ReportUsers/>
                <Withdraw/>

                <View style = {styles.faqbox}>
                <FontAwesome
                
                    name = {'motorcycle'}
                    size = {25}
                    color = {'orange'}

                />
                    <Text style = { {

                        justifyContent: 'center',
                        textAlign: 'left',
                        fontSize: 20,
                        fontWeight: '800',
                        color: '#595858'
                    }}> Delivery Rider
                    </Text>
                </View>
                <GetDeliveries/>
                <Requirements/>
                <Tracklocation/>
                <Rates/>
                <Withdraw/>

                
            <View style = {{flexDirection: 'row', margin: 10, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <FontAwesome
                
                    name = {'phone'}
                    size = {20}
                    color = {'green'}

                />
                    <Text style = {styles.infotext}>  Call: 075 637 6606 </Text>
            </View>
            <View style = {{flexDirection: 'row', margin: 10, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <FontAwesome
                
                    name = {'facebook-messenger'}
                    size = {20}
                    color = {'#006AFF'}

                />
                    <Text  style = {styles.infotext}> Chat with us: @roraca</Text>
            </View>
            <View style = {{flexDirection: 'row', margin: 10, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <FontAwesome
                
                    name = {'envelope'}
                    size = {20}
                    color = {'#D42D2D'}

                />
                    <Text style = {styles.infotext}> Email us: support@roraca.com</Text>
            </View>

            <TouchableOpacity
            
            onPress={() => navigation.navigate('About')}

            >
            <View style = {{flexDirection: 'row', margin: 20, alignItems: 'center', justifyContent: 'center'}}>
                
                    <Text style = {{

                        justifyContent: 'center',
                        textAlign: 'left',
                        fontSize: 15,
                        fontWeight: '800',
                    }}> ABOUT US</Text>
            </View>
            </TouchableOpacity>

            <Text style = {{

                justifyContent: 'center',
                textAlign: 'center',
                fontSize: 15,
                color: '#808080',
                margin: 10,
            }}> Hi there, using the roraca app means you agree to our 
            <Text style = {{color: 'green'}} > Terms of use and conditions</Text> </Text>
            
       
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    infotext: {

        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 15,
        
    },

    faqbox: {

        
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },

    helpboxtext: {

        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '800',
        margin: 15,
        


    },

    helpbox:{

        width: 350,
        height: 350,
        flexGrow: 1,
        backgroundColor: '#ffff',
        alignSelf: 'stretch',
        borderRadius: 20,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,

    },

    HeaderContainer: {

        alignItems: 'flex-start',
        backgroundColor: '#fff',

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#e2e2e2',
        height: '100%'

    },

    Header:{

        marginLeft: 20,
        marginTop: 20,
        fontSize: 35,
        fontWeight: '900',
        color: '#225',
        fontFamily: 'bauhaus93',

    },

    text: {
        textAlign: 'center',
    }
});

export default Help_center;
