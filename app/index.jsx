import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import {View , Text , Image, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated,{FadeInDown} from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Index(){

    const router = useRouter();

    function handlePress(){
        router.push('home')
    }
    return(
            <GestureHandlerRootView style={{ flex: 1 }}>

                <View style={styles.container}>
                    <StatusBar style='light'/>
                    <Image style={styles.background} source={require('../assets/welcome.png')}/>
                    <LinearGradient
                    colors={['transparent','#18181b']}
                    style={[{width:wp(100),height:hp(70)},styles.gradient]}
                    start={{x:0.5,y:0}}
                    end={{x:0.5,y:0.8}}
                    >
                        <Animated.View entering={FadeInDown.delay(100).springify()} style={styles.gradientView}>
                            <Text style={styles.text}>Best <Text style={styles.innerText}>Workouts</Text></Text>
                            <Text style={styles.text}>For you</Text>
                        </Animated.View>

                        <Animated.View style={{alignItems:'center'}} entering={FadeInDown.delay(200).springify()}>
                            <TouchableOpacity onPress={handlePress} style={styles.btn}>
                                <Text style={styles.buttonText}>Get Started</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </LinearGradient>
                </View>
            </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    background:{
        width:'100%',
        height:'100%',
        position:'absolute'
    },
    gradient:{
        display:'flex',
        justifyContent:'flex-end',
        paddingBottom:64,
        width:'100%',
        position:'absolute',
        bottom:0
    },
    gradientView:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    text:{
        color:'white',
        fontSize:hp(4),
        letterSpacing:4,
        fontWeight:'bold'
    },
    innerText:{
        color:'#f43f5e'
    },
    buttonText:{
        fontSize:hp(3),
        color:'white',
        textAlign:'center'
    },
    btn:{
        backgroundColor:'#f43f5e',
        borderRadius:100,
        margin:30,
        padding:12,
        height:hp(7),
        width:wp(80)
    }
})