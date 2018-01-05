import React from "react"
import styled, { keyframes } from "styled-components"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

import ColoredText from "../shared/ColoredText"

export default class About extends React.PureComponent {
    render() {
        return (
            <Container>
                
                <Header>
                    <Border>
                        <Intro>Who Is Gabe West?</Intro>
                        <AboutMeText>
                            I'm a
                            self-taught
                            developer whose
                            inspired everyday 
                            to build badass creations.
                        </AboutMeText>
                        <AboutMeText>
                            I love everything about the web from designing database schemas to perfecting animations.
                            <br/><br/>I'm passionate about taking ideas in my head and bringing them to reality through
                            web technoligies. I don't believe there is an artistic medium that allows an individual to 
                            express their inner thoughts and emotions comprable to programming. 
                        </AboutMeText>
                    </Border>
                </Header>
                
                <AboutMe>
                    <TintedBackground />
                    
                </AboutMe>

            </Container>
        )
    }
}

const Border = styled.div`
    border: solid 2px ${ SECONDARY_COLOR };
    padding-bottom: 2em;
`
const Container = styled.div`
    text-align: center;    
    position: relative;
`
const Header = styled.div`
    color: ${ SECONDARY_COLOR };
    background-color: ${ PRIMARY_COLOR };
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 120px;
    padding: 2em;
    text-align: center;
`
const Intro = styled.h3`
    background-color: ${ PRIMARY_COLOR };
    font-size: 9vw;
    margin: 0;
    display: inline-block;
    transform: translateY(-55%);

    @media (min-width: 768px) {
        font-size: 4vw;
    }
`
const AboutMeText = styled.p`
    margin: 0;
`
const AboutMeImg = styled.img`
    width: 100%;
`
const AboutMe = styled.div`
    background: url(/assets/images/self_taught.jpg) no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    position: relative;
`
const TintedBackground = styled.div`
    background: rgba(0, 0, 0, .8);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
`