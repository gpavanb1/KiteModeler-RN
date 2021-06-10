import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'


export default function geom() {
    return (
        <SafeAreaView style={style.view}>
            <Text>Geometry</Text>
            <Image
            style={style.image}
            source={require('../../assets/geometry.png')} />
        </SafeAreaView>
    )
}

