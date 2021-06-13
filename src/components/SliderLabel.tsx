import React, {useState} from 'react'
import { Text, View } from 'react-native'
import Slider from '@react-native-community/slider'


export default function SliderLabel(props: any) {
    const [value, setValue] = useState(props.defaultValue)
    return (
        <View style={props.sliderStyle}>
            <Text
                style={props.textStyle}
            >
                {props.caption} {value.toFixed(2)}
            </Text>
            <Slider
                value={props.defaultValue}
                minimumValue={props.min}
                maximumValue={props.max}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onValueChange={setValue}
                onSlidingComplete={props.setter}
            />
        </View>
    )
}
