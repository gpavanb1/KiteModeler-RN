import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'
import SliderLabel from '../components/SliderLabel'


export default function Fly(props: any) {
    return (
        <SafeAreaView style={style.view}>
            <Image
                style={style.image}
                source={require('../../assets/fly.png')} />

            <SliderLabel
                textStyle={style.caption}
                sliderStyle={style.slider}
                caption="Wind Speed (m/s):"
                defaultValue={props.data.wind_speed}
                min={0}
                max={100}
                setter={props.setters.fly_wind_speed}
            />
            

            <SliderLabel
                textStyle={style.caption}
                sliderStyle={style.slider}
                caption="Line Length (m):"
                defaultValue={props.data.line_length}
                min={0}
                max={100}
                setter={props.setters.fly_line_length}
            />

            <SliderLabel
                textStyle={style.caption}
                sliderStyle={style.slider}
                caption="Altitude (m):"
                defaultValue={props.data.altitude}
                min={0}
                max={100}
                setter={props.setters.fly_altitude}
            />
        </SafeAreaView>
    )
}

