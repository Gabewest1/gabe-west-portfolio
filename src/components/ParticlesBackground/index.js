import React from "react"
import styled from "styled-components"
import "particles.js"
import particlesConfig from "./particlesConfig"

const Background = styled.div`
    height: 100%;
    width: 100%;
`

export default class ParticlesBackground extends React.Component {
    componentDidMount() {
        window.particlesJS("bg", particlesConfig)
    }
    render() {
        return (
            <Background id="bg" { ...this.props } />
        )
    }
}
