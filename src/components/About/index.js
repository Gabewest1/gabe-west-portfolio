import React from "react"
import styled, { keyframes } from "styled-components"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

import ColoredText from "../shared/ColoredText"

export default class About extends React.PureComponent {
    render() {
        const center = {
           
        }

        return (
            <Container>
                <AboutMe>
                    <Header>
                        <Intro>
                            About
                        </Intro>
                        <div>
                            <Underline>About Me</Underline>
                        </div>
                    </Header>
                    <Main>
                        <div>
                            <img style={{ maxWidth: "100%", maxHeight: "250px" }} src="/assets/images/self_taught.jpg" alt=""/>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "left" }}>
                            <AboutMeText>
                                I'm a
                                self-taught
                                developer whose
                                inspired everyday 
                                to build badass creations.
                            </AboutMeText>
                            <AboutMeText>
                                I love everything about the web from designing database schemas to perfecting animations. 
                            </AboutMeText>
                            <AboutMeText>
                            I'm passionate about taking ideas in my head and bringing them to reality through
                                web technoligies. I don't believe there is an artistic medium that allows an individual to 
                                express their inner thoughts and emotions comprable to programming.
                            </AboutMeText>
                        </div>
                    </Main>
                    <div>
                        <Intro>
                            Me  

                        </Intro>
                        <Underline>About Me</Underline>

                    </div>
                </AboutMe>
            </Container>
        )
    }
}

const Underline = styled.span`
    border-top: solid 1px ${ PRIMARY_COLOR };
    font-weight: bolder;
    color: transparent;
    margin: 11px 0px;
    display: inline-block;
    height: 0px;
    white-space: nowrap;
    width: 156px;
`
const Container = styled.div`
    // text-align: center;    
    position: relative;
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    border: solid thin ${ PRIMARY_COLOR };

    > * {
        flex: 0 1 50%;
    }

    @media (min-width: 768px) {
        flex-direction: row;

        div:first-child {
            margin-right: 14px;
        }
    }
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
`
const Intro = styled.h3`
    font-size: 28px;
    margin: 0;
    display: inline-block;
    font-weight: 500;
    letter-spacing: 6px;

    @media (min-width: 768px) {

    }
`
const AboutMeText = styled.p`
    margin: 0;
    font-size: 13px;
`
const AboutMeImg = styled.img`
    width: 100%;
`
const AboutMe = styled.div`
    background-color: ${ SECONDARY_COLOR };
    position: relative;
    padding: 2em;
    text-align: center;
    display: flex;
    align-items: center;
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