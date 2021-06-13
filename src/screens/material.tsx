import React, { useState } from 'react'
import { Image, Text, SafeAreaView } from 'react-native'
import { style } from './style'
import { Picker } from 'react-native-woodpicker'
import type { PickerItem } from 'react-native-woodpicker'

function generateObjectFromArray(arr: string[]): Array<PickerItem> {
    return arr.map((e: string) => ({ label: e, value: e }))
}

export default function material() {
    const surfaceItems = generateObjectFromArray([
        "Plastic", "Tissue", "Rip Stop", "Silk Span", "Cellophane"
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

    // State hooks
    const [surface, setSurface] = useState(surfaceItems[0])
    const [frame, setFrame] = useState(frameItems[0])
    const [tail, setTail] = useState(tailItems[0])
    const [line, setLine] = useState(lineItems[0])
    

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
                item={surface}
                items={surfaceItems}
                onItemChange={setSurface}
                mode="dropdown"
                placeholder="Select..."
            />



            <Text
                style={style.caption}
            >
                Frame:
            </Text>
            <Picker
                style={style.picker}
                item={frame}
                items={frameItems}
                onItemChange={setFrame}
                mode="dropdown"
                placeholder="Select..."
            />

            <Text
                style={style.caption}
            >
                Tail:
            </Text>
            <Picker
                style={style.picker}
                item={tail}
                items={tailItems}
                onItemChange={setTail}
                mode="dropdown"
                placeholder="Select..."
            />

            <Text
                style={style.caption}
            >
                Line:
            </Text>
            <Picker
                style={style.picker}
                item={line}
                items={lineItems}
                onItemChange={setLine}
                mode="dropdown"
                placeholder="Select..."
            />
        </SafeAreaView>
    )
}

