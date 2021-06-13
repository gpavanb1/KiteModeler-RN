import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'
import Slider from '@react-native-community/slider'


export default function Fly(props: any) {
    return (
        <SafeAreaView style={style.view}>
            <Image
                style={style.image}
                source={require('../../assets/fly.png')} />

            <Text
                style={style.caption}
            >
                Wind Speed (m/s):
            </Text>
            <Slider
                style={style.slider}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onSlidingComplete={props.setters.fly_wind_speed}
            />

            <Text
                style={style.caption}
            >
                Line Length (m):
            </Text>
            <Slider
                style={style.slider}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onSlidingComplete={props.setters.fly_line_length}
            />

            <Text
                style={style.caption}
            >
                Altitude (m):
            </Text>
            <Slider
                style={style.slider}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onSlidingComplete={props.setters.fly_altitude}
            />
        </SafeAreaView>
    )
}

