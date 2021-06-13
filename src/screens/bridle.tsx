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
                min={0}
                max={100}
                setter={props.setters.bridle_h}
            />


            <SliderLabel
                textStyle={style.caption}
                sliderStyle={style.slider}
                caption="Knot Length (K - cm):"
                defaultValue={props.data.k}
                min={0}
                max={100}
                setter={props.setters.bridle_k}
            />
        </SafeAreaView>
    )
}

