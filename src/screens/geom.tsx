import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'
import Slider from '@react-native-community/slider'


export default function Geom(props: any) {
    return (
        <SafeAreaView style={style.view}>
            <Image
                style={style.image}
                source={require('../../assets/geometry.png')}
            />

            <Text
                style={style.caption}
            >
                Top to Frame Intersection (H1 - cm):
            </Text>
            <Slider
                style={style.slider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onSlidingComplete={props.setters.geom_h1}
            />

            <Text
                style={style.caption}
            >
                Frame Intersection to Bottom (H2 - cm):
            </Text>
            <Slider
                style={style.slider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onSlidingComplete={props.setters.geom_h2}
            />

            <Text
                style={style.caption}
            >
                Side-to-Side (W1 - cm):
            </Text>
            <Slider
                style={style.slider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onSlidingComplete={props.setters.geom_w1}
            />

            <Text
                style={style.caption}
            >
                Tail Length (T - cm):
            </Text>
            <Slider
                style={style.slider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onSlidingComplete={props.setters.geom_t}
            />
        </SafeAreaView>
    )
}

