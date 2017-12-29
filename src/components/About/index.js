import React from "react"
import styled, { keyframes } from "styled-components"
import { SECONDARY_COLOR } from "../../constants"

import ColoredText from "../shared/ColoredText"

const Container = styled.div`
    text-align: center;    
    position: relative;
`
const Intro = styled.h3`
    font-size: 7vw;
    height: 25vmax;
    line-height: 25vmax;
    margin: 0;
    padding: 30px;    
`
const AboutMe = styled.div`
    align-items: center;
    background: url(/assets/images/self_taught.jpg) no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    height: 100vh;
    position: relative;

    &:before {
        content: "";
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,.8);
        z-index: 0;
    }
    &: after {
        content: "";
        border: solid thin white;
        display: block;
        position: absolute;
        height: 90%;
        width: 90%;
        z-index: 0;
    }

    > * {
        z-index: 1;
    }
`
const AboutMeText = styled.h3`
    font-size: 2.5vw;
    max-width: 90%;
`
const AboutMeImg = styled.img`
    width: 100%;
`
export default class About extends React.PureComponent {
    render() {
        return (
            <Container>
                <Intro>Who Is Gabe West?</Intro>
            
                <AboutMe>
                    <AboutMeText>
                        I'm a
                        <ColoredText> self-taught </ColoredText>
                        developer whose
                        <ColoredText> inspired everyday </ColoredText>
                        to build badass creations.
                    </AboutMeText>
                </AboutMe>

            </Container>
        )
    }
}
