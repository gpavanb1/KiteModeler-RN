import React, { useState } from 'react'
import { Image, Text, SafeAreaView, View } from 'react-native'
import { style } from './style'
import ModalDropdown from 'react-native-modal-dropdown';

function generateObjectFromArray(arr: string[]) {
    return arr.map((e: string) => e)
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
    
    const onSurface = (idx: string, v: string) => setSurface(v)
    const onFrame = (idx: string, v: string) => setFrame(v)
    const onTail = (idx: string, v: string) => setTail(v)
    const onLine = (idx: string, v: string) => setLine(v)


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
            <ModalDropdown
                style={style.picker}
                dropdownTextStyle={style.caption}
                textStyle={style.caption}
                options={surfaceItems}
                defaultValue={surface}
                onSelect={onSurface}
            />
            


            <Text
                style={style.caption}
            >
                Frame:
            </Text>
            <ModalDropdown
                style={style.picker}
                textStyle={style.caption}
                dropdownTextStyle={style.caption}
                options={frameItems}
                defaultValue={frame}
                onSelect={onFrame}
            />

            <Text
                style={style.caption}
            >
                Tail:
            </Text>
            <ModalDropdown
                style={style.picker}
                dropdownTextStyle={style.caption}
                textStyle={style.caption}
                options={tailItems}
                defaultValue={tail}
                onSelect={onTail}
            />

            <Text
                style={style.caption}
            >
                Line:
            </Text>
            <ModalDropdown
                style={style.picker}
                dropdownTextStyle={style.caption}
                textStyle={style.caption}
                options={lineItems}
                defaultValue={line}
                onSelect={onLine}
            />
        </SafeAreaView>
    )
}

