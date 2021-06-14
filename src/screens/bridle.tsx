import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'
import SliderLabel from '../components/SliderLabel'


export default function Bridle(props: any) {
    return (
        <SafeAreaView style={style.view}>
            <Image
                style={style.image}
                source={require('../../assets/bridle.png')} />

            <SliderLabel
                textStyle={style.caption}
                sliderStyle={style.slider}
                caption="Bridle Length (B - cm):"
                defaultValue={props.data.b}
                min={props.data.k + 0.1}
                max={100}
                setter={props.setters.bridle_h}
            />


            <SliderLabel
                textStyle={style.caption}
                sliderStyle={style.slider}
                caption="Knot Length (K - cm):"
                defaultValue={props.data.k}
                min={0.1}
                max={props.data.b - 0.1}
                setter={props.setters.bridle_k}
            />

            <Text style={style.yay_nay}>
                Bridle will be ensured to be always larger than knot
            </Text>
        </SafeAreaView>
    )
}

