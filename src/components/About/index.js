import React from "react"
import styled, { keyframes } from "styled-components"
import colorer from "colorer"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

import ColoredText from "../shared/ColoredText"
import SectionTitle from "../shared/SectionTitle"

export default class About extends React.PureComponent {
    render() {
        return (
            <AboutMe>
                <SectionTitle left secondary style={{ width: "100%" }}>
                </SectionTitle>

                <Main>
                    <div>
                        <img style={{ maxWidth: "100%", maxHeight: "400px" }} src="/assets/images/self_taught.jpg" alt=""/>
                    </div>
                    <div style={{ textAlign: "left" }}>
                        <AboutMeText>
                            I'm a
                            self-taught
                            developer who is
                            inspired everyday 
                            to:
                        </AboutMeText>
                        <Skills>
                            <Skill>
                                <Icon>
                                    <img src="/assets/images/html.png" alt=""/>
                                </Icon>
                                <p>Construct intricate interfaces</p>
                            </Skill>

                            <Skill>
                                <Icon>
                                    <img src="/assets/images/css.png" alt=""/>
                                </Icon>
                                <p>Visualize &amp; solidify designs</p>
                            </Skill>

                            <Skill>
                                <Icon>
                                    <img src="/assets/images/mongo.png" alt=""/>
                                </Icon>
                                <p>Manage vasts amounts of user-critical information</p>
                            </Skill>

                            <Skill>
                                <Icon>
                                    <img src="/assets/images/node.png" alt=""/>
                                </Icon>
                                <p>Orchastrate communications between client and server</p>
                            </Skill>

                            <Skill>
                                <Icon>
                                    <img src="/assets/images/javascript.png" alt=""/>
                                </Icon>
                                <p>Bring together amazing experiences</p>
                            </Skill>
                        </Skills>
                    </div>
                </Main>

                {/* <SectionTitle right secondary style={{ width: "100%" }}>What's My Mission?</SectionTitle> */}

                <div style={{ padding: "0 20px 40px 20px", width: "100%", boxSizing: "border-box" }}>
                    {/* <p><em>Simply put:</em> To be the best developer I can possible be.</p> */}
                    <MissionStatement>
                        I want to be able to construct any idea in my head through code. I don't want to constrict my ability to create
                        awesome applications because of a limited technical know-how.
                    </MissionStatement>
                    <MissionStatement>
                        I'm deeply interested in all aspects of the web from 
                        perfecting button animations to designing database schemas.
                    </MissionStatement>
                </div>

            </AboutMe>
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
    // margin: 11px 0px;
    display: inline-block;
    height: 0px;
`
const Container = styled.div`
    position: relative;
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 20px 0px 20px;
    width: 100%;
    box-sizing: border-box;

    > * {
        flex: 0 1 50%;
    }

    @media (min-width: 920px) {
        flex-direction: row;

        div:first-child {
            margin-right: 14px;
        }
    }
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 100%;
`
const Intro = styled.h3`
    font-size: 28px;
    margin: 0;
    display: inline-block;
    font-weight: 500;
    letter-spacing: 6px;
    line-height: 12vmax;
`
const AboutMeText = styled.p`
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    font-family: 'Titillium Web',sans-serif;

    @media (min-width: 768px) {
        font-size: 24px; 
    }

    @media (min-width: 920px) {
        margin: 0;        
    }
`
const AboutMeImg = styled.img`
    width: 100%;
`
const AboutMe = styled.div`
    background: linear-gradient(315deg,
        ${SECONDARY_COLOR} 0%,
        ${colorer(SECONDARY_COLOR).light(10)} 50%,
        ${colorer(SECONDARY_COLOR).light(20)} 51%,
        ${colorer(SECONDARY_COLOR).light(30)} 100%
    );
    position: relative;
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
const MissionStatement = styled.p`
    font-size: 16px;
    text-align: left;
    // font-family: 'Bangers', cursive;

    pre {
        font-family: inherit;
    }
`