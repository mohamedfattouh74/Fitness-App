import { FlatList, View , StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ExerciseCard from "./ExerciseCard";


export default function ExerciseList({data}){

    return(
        <View style={styles.exerciseContainer}>
            <FlatList 
            data={data}
            numColumns={2}
            keyExtractor={item=>item.name}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:60,paddingTop:20}}
            columnWrapperStyle={{
                justifyContent:'space-between',
                gap:6
            }}
           renderItem={({item,index})=><ExerciseCard index={index} item={item} key={item.id}/>}/>
        </View>
    )
}

const styles= StyleSheet.create({
    exerciseContainer:{
        marginHorizontal:6,
    },

})