import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'


export default function material() {
    return (
        <SafeAreaView style={style.view}>
            <Text>Material</Text>
            <Image
            style={style.image}
            source={require('../../assets/material.png')} />
        </SafeAreaView>
    )
}

