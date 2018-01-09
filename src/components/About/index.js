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
                            Who Is Gabe West?
                        </Intro>
                        <div>
                            <Underline>Who Is Gabe West?</Underline>
                        </div>
                    </Header>
                    <Main>
                        <div>
                            <img style={{ maxWidth: "100%", maxHeight: "300px" }} src="/assets/images/self_taught.jpg" alt=""/>
                        </div>
                        <div style={{ textAlign: "left" }}>
                            <AboutMeText>
                                I'm a
                                self-taught fullstack
                                developer who is
                                inspired everyday 
                                to build badass creations.
                            </AboutMeText>
                            <Skills>
                                <Skill>
                                    <Icon>
                                        <img src="/assets/images/html.png" alt=""/>
                                    </Icon>
                                    <p>I construct intricate interfaces</p>
                                </Skill>

                                <Skill>
                                    <Icon>
                                        <img src="/assets/images/css.png" alt=""/>
                                    </Icon>
                                    <p>I visualize &amp; solidify designs</p>
                                </Skill>

                                <Skill>
                                    <Icon>
                                        <img src="/assets/images/mongo.png" alt=""/>
                                    </Icon>
                                    <p>I manage vasts amounts of user-critical information</p>
                                </Skill>

                                <Skill>
                                    <Icon>
                                        <img src="/assets/images/node.svg" alt=""/>
                                    </Icon>
                                    <p>I orchastrate communications between client and server</p>
                                </Skill>

                                <Skill>
                                    <Icon>
                                        <img src="/assets/images/javascript.png" alt=""/>
                                    </Icon>
                                    <p>I bring together amazing experiences</p>
                                </Skill>
                            </Skills>
                        </div>
                    </Main>
                    <Underline>About Me</Underline>
                </AboutMe>
            </Container>
        )
    }
}

const Skills = styled.ul`
    list-style: none;
    font-size: 13px;

    @media (max-width: 767px) {
        padding: 0;
    }
`
const Skill = styled.li`
    display: flex;
    align-items: center;
`
const Icon = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 8px;

    img {
        max-width: 100%;
    }
`
const Underline = styled.span`
    border-top: solid 1px ${ PRIMARY_COLOR };
    font-weight: bolder;
    color: transparent;
    margin: 11px 0px;
    display: inline-block;
    height: 0px;
`
const Container = styled.div`
    position: relative;
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;

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
    font-size: 18px;
    font-weight: 600;
    text-align: center;

    @media (min-width: 768px) {
        margin: 0;    
    }
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
    flex-direction: column;
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