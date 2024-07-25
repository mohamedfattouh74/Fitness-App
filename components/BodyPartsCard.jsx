import { View , TouchableOpacity , StyleSheet , Image , Text} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from "react-native-reanimated";
import capetalizeFirstLetter from "../utils/capetalizeFirstLetter";


export default function BodyPartsCard({index,item}){

    const router = useRouter();

    return(
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
            <TouchableOpacity onPress={()=>router.push({pathname:'/exercises',params: item})} style={styles.bodyPartsCard}>
                <Image source={item.image} resizeMode="cover" style={styles.bodyPartsImage}/>
                <LinearGradient
                colors={['transparent','#18181b']}
                style={[{width:wp(44),height:hp(15)},styles.gradient]}
                start={{x:0.5,y:0}}
                end={{x:0.5,y:0.8}}
                />
                <Text style={styles.cardText}>{capetalizeFirstLetter(item?.name)}</Text>
            </TouchableOpacity>
        </Animated.View >
    )
}

const styles = StyleSheet.create({
    bodyPartsCard:{
        width:wp(44),
        height:wp(52),
        display:'flex',
        justifyContent:'flex-end',
        padding:4,
        marginBottom:12
    },
    bodyPartsImage:{
        width:wp(44),
        height:wp(52),   
        borderRadius:35,
        position:'absolute'
    },
    gradient:{
        position:'absolute',
        bottom:0,
        borderRadius:35
    },
    cardText:{
        fontWeight:'800',
        textAlign:'center',
        fontSize:hp(2.3),
        color:'white',
        paddingBottom:6
    }
})