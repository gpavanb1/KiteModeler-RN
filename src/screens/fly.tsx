import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'


export default function fly() {
    return (
        <SafeAreaView style={style.view}>
            <Text>Fly</Text>
            <Image
            style={style.image}
            source={require('../../assets/fly.png')} />
        </SafeAreaView>
    )
}

