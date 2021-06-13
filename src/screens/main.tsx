import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import MyTabView from './tabview'


export default class MainDiamond extends Component<any, any> {
    setters = {
        geom_h1: (v: any) => {
            var geom = { ...this.state.geom }
            geom.h1 = v
            this.setState({ geom })
        },
        geom_h2: (v: any) => {
            var geom = { ...this.state.geom }
            geom.h2 = v
            this.setState({ geom })
        },
        geom_w1: (v: any) => {
            var geom = { ...this.state.geom }
            geom.w1 = v
            this.setState({ geom })
        },
        geom_t: (v: any) => {
            var geom = { ...this.state.geom }
            geom.t = v
            this.setState({ geom })
        },
        bridle_h: (v: any) => {
            var bridle = { ...this.state.bridle }
            bridle.b = v
            this.setState({ bridle })
        },
        bridle_k: (v: any) => {
            var bridle = { ...this.state.bridle }
            bridle.k = v
            this.setState({ bridle })
        },
        fly_wind_speed: (v: any) => {
            var fly = { ...this.state.fly }
            fly.wind_speed = v
            this.setState({ fly })
        },
        fly_line_length: (v: any) => {
            var fly = { ...this.state.fly }
            fly.line_length = v
            this.setState({ fly })
        },
        fly_altitude: (v: any) => {
            var fly = { ...this.state.fly }
            fly.altitude = v
            this.setState({ fly })
        },
        material_surface: (v: any) => {
            var material = { ...this.state.material }
            material.surface = v
            this.setState({ material })
        },
        material_frame: (v: any) => {
            var material = { ...this.state.material }
            material.frame = v
            this.setState({ material })
        },
        material_tail: (v: any) => {
            var material = { ...this.state.material }
            material.tail = v
            this.setState({ material })
        },
        material_line: (v: any) => {
            var material = { ...this.state.material }
            material.line = v
            this.setState({ material })
        }
    }

    constructor(props: any) {
        super(props)
        this.state = {
            geom: {
                h1: 12.7,
                h2: 25.4,
                w1: 25.4,
                t: 0
            },
            bridle: {
                b: 39.4,
                k: 30.5
            },
            fly: {
                wind_speed: 3.0,
                line_length: 30.,
                altitude: 0.0
            },
            material: {
                surface: "Plastic",
                frame: "1/4 Balsa",
                tail: "1 in Plastic",
                line: "Nylon"
            },
            env_name: "Earth",
            results: {}
        }
    }

    render() {
        return (
            <MyTabView data={this.state} setters={this.setters} />
        )
    }
}
