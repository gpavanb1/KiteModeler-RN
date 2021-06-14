import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'
import { Picker } from 'react-native-woodpicker'
import type { PickerItem } from 'react-native-woodpicker'


const valToPicker: any = (e: string) => ({label: e, value: e})

function generateObjectFromArray(arr: string[]): Array<PickerItem> {
    return arr.map((e: string) => (valToPicker(e)))
}

export default function Material(props: any) {

    const surfaceItems = generateObjectFromArray([
        "Plastic", "Tissue Paper", "Rip Stop", "Silk Span", "Cellophane"
    ])
    const frameItems = generateObjectFromArray([
        "1/4 Balsa", "1/8 Balsa", "1/4 Birch", "3/8 Plastic Tube", "Skewer Stick"
    ])
    const tailItems = generateObjectFromArray([
        "1 in Plastic", "3 in Plastic", "1 in Nylon"
    ])
    const lineItems = generateObjectFromArray([
        "Nylon", "Cotton"
    ])

    return (
        <SafeAreaView style={style.view}>
            <Image
                style={style.image}
                source={require('../../assets/material.png')} />

            <Text
                style={style.caption}
            >
                Surface:
            </Text>
            <Picker
                style={style.picker}
                item={valToPicker(props.data.surface)}
                items={surfaceItems}
                onItemChange={props.setters.material_surface}
                mode="dropdown"
                placeholder={surfaceItems[0].value}
            />

            <Text
                style={style.caption}
            >
                Frame:
            </Text>
            <Picker
                style={style.picker}
                item={valToPicker(props.data.frame)}
                items={frameItems}
                onItemChange={props.setters.material_frame}
                mode="dropdown"
                placeholder={frameItems[0].value}
            />

            <Text
                style={style.caption}
            >
                Tail:
            </Text>
            <Picker
                style={style.picker}
                item={valToPicker(props.data.tail)}
                items={tailItems}
                onItemChange={props.setters.material_tail}
                mode="dropdown"
                placeholder={tailItems[0].value}
            />

            <Text
                style={style.caption}
            >
                Line:
            </Text>
            <Picker
                style={style.picker}
                item={valToPicker(props.data.line)}
                items={lineItems}
                onItemChange={props.setters.material_line}
                mode="dropdown"
                placeholder={lineItems[0].value}
            />
        </SafeAreaView>
    )
}

