import React from "react"
import styled, { keyframes } from "styled-components"

const Spin = keyframes`
    0% {background-position: 0 0;}
    100% {background-position: 630px 0;}
`
const EarthView = styled.div`
    position: relative;

    @media (max-width: 480px) {
		width: 200px;
		height: 200px;
    }
`
const EarthImage = styled.img`
    position: relative;
    width: 300px;
    height: 300px;
    max-width: 100%;
    max-height: 100%;
    background: url(/assets/images/earthmap.png) 0 0 repeat;
    border-radius: 50%;
    background-size: 630px;
    animation: ${ Spin } 20s linear infinite;
    transition: transform 200ms linear;
    transform-style: preserve-3d;
    color: #000;
    transform: rotate(5.4deg);

    &:after {
        content: "";
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: -80px 15px 80px 10px rgba(0,0,0,.9) inset;
    }
    
    &:before {
        content: "";
        position: absolute;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.2;
        background: radial-gradient(circle at 100px 100px, #fff, #000);
    }
`
const BoxShadow = styled.div`
    border-radius: 50%;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10;

    @media (max-width: 480px) {
		top: 0px !important;
    }
`
const LeftBoxShadow = styled(BoxShadow)`
    top: -5px;
    left: -2px;
    box-shadow: inset 53px 0 80px 6px rgba(0,0,0,1); 
`
const RightBoxShadow = styled(BoxShadow)`
    top: -3px;
    left: 0px;
    box-shadow: inset -7px 0 7px 0px rgba(255,255,255,0.4); 
`
const EarthText = styled.img`
    position: absolute;
    top: 0;
    left: -3px;
    max-width: 100%;
    transform: scale(1.25);
`
export default class Earth extends React.Component {
    render() {
        return (
            <EarthView { ...this.props }>
                <EarthImage />
                <EarthText src="/assets/images/world_text.png" />
                <LeftBoxShadow />
                <RightBoxShadow />
            </EarthView>
        )
    }
}
