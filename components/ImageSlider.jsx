import {View} from 'react-native'
import Carousel  , {ParallaxImage} from 'react-native-snap-carousel'
import { sliderImages }from '../constants/slider'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function ImageSlider(){

    return(
            <Carousel
            data={sliderImages}
            loop={true}
            autoplay={true}
            renderItem={ItemCard}
            hasParallaxImages={true}
            sliderWidth={wp(100)}
            firstItem={1}
            autoplayInterval={3000}
            itemWidth={wp(100)-70}
            slideStyle={{display:'flex',alignItems:'center'}}
            inactiveSlideOpacity={0.8}
            />
    )
}

function ItemCard({item ,index},parallaxProps){

    return (
        <View style={{width:wp(100)-70 , height:hp(25)}}>
            <ParallaxImage style={{resizeMode:'contain'}} parallaxFactor={1} containerStyle={{flex:1,borderRadius:30}} source={item} {...parallaxProps}></ParallaxImage>
        </View>
    )
}