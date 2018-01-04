import React from "react"
import styled, { keyframes } from "styled-components"
import { SECONDARY_COLOR } from "../../constants"

import ColoredText from "../shared/ColoredText"

const Container = styled.div`
    text-align: center;    
    position: relative;
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`
const Intro = styled.h3`
    font-size: 4vw;
    margin: 0;
`
const AboutMeText = styled.p`
    color: #efefef;
    position: relative;
`
const AboutMeImg = styled.img`
    width: 100%;
`
const AboutMe = styled.div`
    background: url(/assets/images/self_taught.jpg) no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    height: 100vh;
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
export default class About extends React.PureComponent {
    render() {
        return (
            <Container>
                
                <Header>
                    <Intro>Who Is Gabe West?</Intro>
                    <AboutMeText>
                        I'm a
                        self-taught
                        developer whose
                        inspired everyday 
                        to build badass creations.
                    </AboutMeText>
                </Header>
                
                <AboutMe>
                    <TintedBackground />
                    <AboutMeText>
                        I love everything about the web from designing database schemas to perfecting animations.
                        I'm truely passionate about taking ideas in my head and bringing them to reality through
                        web technoligies. I don't believe there is an artistic medium that allows an individual to 
                        express their inner thoughts and emotions comprable to programming. 
                    </AboutMeText>
                </AboutMe>

            </Container>
        )
    }
}
