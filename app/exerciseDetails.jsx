import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View , ScrollView , Image ,Text} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import capetalizeFirstLetter from "../utils/capetalizeFirstLetter";


export default function ExerciseDetails(){

    const item = useLocalSearchParams();

    return(
        <View style={styles.detailsContainer}> 
            <View style={styles.headerImageContainer}> 
                <Image resizeMode='cover' source={{uri:item.gifUrl}} style={styles.headerImage}/>
            </View>

            <ScrollView style={styles.detailsView}>
                <Animated.Text entering={FadeInDown.duration(300).springify()} style={styles.exerciseText}>{capetalizeFirstLetter(item.name)}</Animated.Text>

                <Animated.Text entering={FadeInDown.duration(300).delay(100).springify()} style={styles.detailsText}>Equipment: <Text style={styles.detailsInnerText}>{item.equipment}</Text></Animated.Text>

                <Animated.Text entering={FadeInDown.duration(300).delay(200).springify()} style={styles.detailsText}>Secondary muscles: <Text style={styles.detailsInnerText}>{item.secondaryMuscles}</Text></Animated.Text>

                <Animated.Text entering={FadeInDown.duration(300).delay(300).springify()} style={styles.detailsText}>Target: <Text style={styles.detailsInnerText}>{item.target}</Text></Animated.Text>

                <Animated.Text entering={FadeInDown.duration(300).delay(400).springify()} style={styles.exerciseText}>Instructions</Animated.Text>

                {
                    item.instructions.split(',').map((instruction,index)=>{

                        return(
                            <Animated.Text entering={FadeInDown.duration(300).delay((index+6)*100).springify()} style={styles.instructions}>{instruction}</Animated.Text>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer:{
        flex:1,
        paddingBottom:10
    },
    headerImageContainer:{
        width:wp(100),
        height:hp(40),
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
        overflow: 'hidden' // Ensures the image respects the border radius
    },
    headerImage:{
        width:'100%',
        height:'100%',
    },
    detailsView:{
        marginHorizontal:16,
        marginTop:8
    },
    exerciseText:{
        fontSize:hp(3.5),
        fontWeight:'700',
        color:'#404040',
        marginVertical:8,
    },
    instructions:{
        marginVertical:4,
        color:'#404040',
    },
    detailsText:{
        marginVertical:2,
        color:'#404040',
    },
    detailsInnerText:{
        fontWeight:'bold'
    }
})