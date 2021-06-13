import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'
import Slider from '@react-native-community/slider'
import SliderLabel from '../components/SliderLabel'


export default function Geom(props: any) {
    return (
        <SafeAreaView style={style.view}>
            <Image
                style={style.image}
                source={require('../../assets/geometry.png')}
            />

            <SliderLabel
                textStyle={style.caption}
                sliderStyle={style.slider}
                caption="Top to Frame Intersection (H1 - cm):"
                defaultValue={props.data.h1}
                min={0}
                max={100}
                setter={props.setters.geom_h1}
            />


            <SliderLabel
                textStyle={style.caption}
                sliderStyle={style.slider}
                caption="Frame Intersection to Bottom (H2 - cm):"
                defaultValue={props.data.h2}
                min={0}
                max={100}
                setter={props.setters.geom_h2}
            />

            <SliderLabel
                textStyle={style.caption}
                sliderStyle={style.slider}
                caption="Side-to-Side (W1 - cm):"
                defaultValue={props.data.w1}
                min={0}
                max={100}
                setter={props.setters.geom_w1}
            />


            <SliderLabel
                textStyle={style.caption}
                sliderStyle={style.slider}
                caption="Tail Length (T - cm):"
                defaultValue={props.data.t}
                min={0}
                max={100}
                setter={props.setters.geom_t}
            />
        </SafeAreaView>
    )
}

