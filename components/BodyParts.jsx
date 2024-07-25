import { View , StyleSheet , Text} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { bodyParts } from "../constants/bodyParts";
import BodyPartsCard from "./BodyPartsCard";

export default function BodyParts(){

    return (
        <View style={styles.bodyPartsContainer}>
            <Text style={styles.bodyPartsText}>Exercises</Text>
            <FlatList 
            data={bodyParts}
            numColumns={2}
            keyExtractor={item=>item.name}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:50,paddingTop:20}}
            columnWrapperStyle={{
                justifyContent:'space-between'
            }}
           renderItem={({item,index})=><BodyPartsCard index={index} item={item}/>}/>
        </View>

    )
}

const styles= StyleSheet.create({
    bodyPartsContainer:{
        marginHorizontal:16,
        marginTop:12
    },
    bodyPartsText:{
        fontSize:hp(3),
        fontWeight:'700',
        color:'#404040',
        marginBottom:8
    }
})