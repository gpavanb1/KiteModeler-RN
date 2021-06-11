import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'
import Slider from '@react-native-community/slider'


export default function bridle() {
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
            />
        </SafeAreaView>
    )
}

