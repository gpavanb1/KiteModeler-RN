import React from 'react'
import { SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import { solveDiamond } from '../backend/api'
import { style } from '../screens/style'

export default function Results(props: any) {
    const results = solveDiamond(props.data)
    return (
        <SafeAreaView>
            <SafeAreaView style={style.summary}>
                <SafeAreaView style={style.yay_nay}>
                    <Text h4>Will the kite fly? {(results._tension > 0 ? <Text>YES 👍</Text> : <Text>NO 👎</Text>)}</Text>
                </SafeAreaView>
                <Text h4>Forces</Text>
                <SafeAreaView style={style.summary_values}>
                    <Text style={style.caption}>Lift (gm): {results._lift.toFixed(2)}</Text>
                    <Text style={style.caption}>Drag (gm): {results._drag.toFixed(2)}</Text>
                    <Text style={style.caption}>Weight (gm): {results._weight.toFixed(2)}</Text>
                    <Text style={style.caption}>Tension (gm): {results._tension.toFixed(2)}</Text>
                    <Text style={style.caption}>Angle(deg): {(results._aoa_no_torque * 180 / Math.PI).toFixed(2)}</Text>
                </SafeAreaView>
            </SafeAreaView>
            
            <SafeAreaView style={style.summary}>
                <Text h4>Geometry</Text>
                <SafeAreaView style={style.summary_values}>
                    <Text style={style.caption}>Center of Pressure (cm): {results._cp.toFixed(2)}</Text>
                    <Text style={style.caption}>Center of Gravity (cm): {results._cg.toFixed(2)}</Text>
                    <Text style={style.caption}>Surface Area (cm2): {results._surface_area.toFixed(2)}</Text>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={style.summary}>
                <Text h4>Flight</Text>
                <SafeAreaView style={style.summary_values}>
                    <Text style={style.caption}>Range (m): {results.range().toFixed(2)}</Text>
                    <Text style={style.caption}>Height (m): {isNaN(results.height()) ? 
                    <Text>Blown Away 🌬️</Text> : results.height().toFixed(2)}</Text>
                    <Text style={style.caption}>Ground Pressure (kPa): {results._pressure.toFixed(2)}</Text>
                    <Text style={style.caption}>Ground Temperature (K): {results._temperature.toFixed(2)}</Text>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
}
