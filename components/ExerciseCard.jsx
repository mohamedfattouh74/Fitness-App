import { useRouter } from 'expo-router';
import { Text,TouchableOpacity,Image,StyleSheet,View} from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import capetalizeFirstLetter from '../utils/capetalizeFirstLetter';

export default function ExerciseCard({index,item}){

    const router=useRouter();

    return(
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
            <TouchableOpacity onPress={()=>router.push({pathname:'/exerciseDetails',params:item})} style={styles.exerciseContainer}>
                <View style={styles.imageContainer}>
                    <Image resizeMode='cover' style={styles.exerciseImage} source={{uri:item.gifUrl}}/>
                </View>
                <Text style={styles.exerciseName}>{capetalizeFirstLetter(item.name.length>20 ? item.name.slice(0,20)+'...':item.name)}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    exerciseContainer:{
        display:'flex',
        paddingVertical:6,
        },
    imageContainer:{
        width:wp(44),
        height:wp(52),   
        borderRadius:35,
        overflow:'hidden'
    },  
    exerciseImage:{
        width:'100%',
        height:'100%'
    },
    exerciseName:{
        marginLeft:2,
        marginTop:6,
        fontWeight:'700',
        color:'#404040',
    }
})
