import { useLocalSearchParams, useRouter } from 'expo-router'
import {View , Text  , ScrollView , Image , StyleSheet, ActivityIndicator} from 'react-native'
import { getExcersisesByBodyPart } from '../api/exerciseDB';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ExerciseList from '../components/ExerciseList';
import { useQuery } from '@tanstack/react-query';
import capetalizeFirstLetter from '../utils/capetalizeFirstLetter';

export default function Exercises(){
    const item = useLocalSearchParams();

    const {data,error,isLoading}=useQuery({
        queryKey: ['exercises',item.name],
        queryFn: ()=> getExcersisesByBodyPart(item.name)
    })

    if (error) console.log('An error has occurred: ' + error.message);


    return ( 
            <ScrollView>
                <StatusBar style='light'/>
                <Image source={item?.image} style={styles.headerImage}></Image>

                {!isLoading&&<View style={styles.exercisesContainer}>
                    <Text style={styles.exerciseText}>{capetalizeFirstLetter(item.name)} exercises</Text>
                    {error && <Text>Failed to fetch exercises</Text>}
                    <ExerciseList data={data}/>
                </View>}
                {isLoading&& <ActivityIndicator style={styles.loadingSpinner} size={'large'} color={'#404040'}/>}
            </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    headerImage:{
        width:wp(100),
        height:hp(40),
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40
    },
    exerciseText:{
        fontSize:hp(3),
        fontWeight:'700',
        color:'#404040',
        marginHorizontal:10
    },
    exercisesContainer:{
        marginHorizontal:10,
        marginTop:14
    },
    loadingSpinner:{
        marginTop:36
    },
    error:{
        fontSize:hp(3),
        fontWeight:'700',
        textAlign:'center',
        color:'#b30a0a',
        marginBottom:8,
        marginHorizontal:10
    }
})