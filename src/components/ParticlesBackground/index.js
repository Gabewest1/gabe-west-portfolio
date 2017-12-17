import React from "react"
import styled from "styled-components"
import "particles.js"
import particlesConfig from "./particlesConfig"

const Background = styled.div`
    height: 300px;
    width: 100%;
    background-color: violet;
`

export default class ParticlesBackground extends React.Component {
    componentDidMount() {
        window.particlesJS("bg", particlesConfig)
    }
    render() {
        return (
            <Background id="bg" />
        )
    }
}
