import { StatusBar } from 'expo-status-bar'
import {View , Text , Image, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Home(){

    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar style='dark'></StatusBar>

            <View style={styles.headerView}>
                <View>
                    <Text style={styles.text}>Ready To </Text>
                    <Text style={[styles.text,styles.innerText]}>Workout</Text>
                </View>
                <View>
                    <Image style={styles.avatar} source={require('../assets/avatar.png')}></Image>
                </View>
            </View>

            <View style={styles.carouselContainer}>
                <ImageSlider/>
            </View>

            <View style={styles.bodyPartsContainer}>
                <BodyParts/>
            </View>

            </SafeAreaView>
        </GestureHandlerRootView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        color:'#404040',
        fontSize:hp(4),
        letterSpacing:4,
        fontWeight:'bold',
        fontSize:hp(4.5)
    },
    innerText:{
        color:'#f43f5e'
    },
    headerView:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    avatar:{
        height:hp(6),
        width:wp(12),
    },
    carouselContainer:{
        marginTop:16
    },
    bodyPartsContainer:{
        flex: 1,
    }
})