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
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    > * {
        z-index: 1;
        flex: 0 1 50%;
    }

    @media (min-width: 768px) {
        flex-direction: row-reverse;

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

                    <div>
                        <AboutMeImg src="/assets/images/self_taught.jpg" />
                    </div>

                    <div>
                        <AboutMeText>
                            I'm a
                            <ColoredText> self-taught </ColoredText>
                            developer whose
                            <ColoredText> inspired everyday </ColoredText>
                            to build badass creations.
                        </AboutMeText>
                    </div>

                </AboutMe>

            </Container>
        )
    }
}
