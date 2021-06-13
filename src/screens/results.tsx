import React from 'react'
import { Text, SafeAreaView } from 'react-native'

export default function Results(props: any) {
    return (
        <SafeAreaView>
            <Text>{JSON.stringify(props.data)}</Text>
        </SafeAreaView>
    )
}
