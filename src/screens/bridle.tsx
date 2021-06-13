import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'
import Slider from '@react-native-community/slider'


export default function Bridle(props: any) {
    return (
        <SafeAreaView style={style.view}>
            <Image
                style={style.image}
                source={require('../../assets/bridle.png')} />

            <Text
                style={style.caption}
            >
                Bridle Length (B - cm):
            </Text>
            <Slider
                style={style.slider}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onSlidingComplete={props.setters.bridle_h}
            />

            <Text
                style={style.caption}
            >
                Knot Length (K - cm):
            </Text>
            <Slider
                style={style.slider}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onSlidingComplete={props.setters.bridle_k}
            />
        </SafeAreaView>
    )
}

