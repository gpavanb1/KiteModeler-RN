import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'


export default function bridle() {
    return (
        <SafeAreaView style={style.view}>
            <Text>Bridle</Text>
            <Image
            style={style.image}
            source={require('../../assets/bridle.png')} />
        </SafeAreaView>
    )
}

