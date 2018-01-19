import React from "react"
import styled, { keyframes } from "styled-components"
import colorer from "colorer"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

import ColoredText from "../shared/ColoredText"
import SectionTitle from "../shared/SectionTitle"

export default class About extends React.PureComponent {
    constructor() {
        super()

        this.state = {
            isBarDisplayed: false,
            bar: { left: 0, top: 0, width: 0 }
        }
    }
    render() {
        const { bar } = this.state

        return (
            <AboutMe>
                <AboutMeHeader>
                    <h1>About</h1>
                    <Underline>About</Underline>
                </AboutMeHeader>

                <Main>
                    <Skills>
                        <OtherSkills>
                            <Skill innerRef={ leftSkill => this.leftSkill = leftSkill}>
                                <Icon>
                                    <img src="/assets/images/responsive_icon.png" alt=""/>
                                </Icon>
                                <h3>Always Responsive</h3>
                                <p>I construct intricate interfaces that look pixel perfect on any screen size.</p>
                            </Skill>

                            <Skill>
                                <Icon>
                                    <img src="/assets/images/react_logo.svg" alt=""/>
                                </Icon>
                                <h3>Visualize &amp; Solidify Designs</h3>
                                <p>Perspiciatis numquam, recusandae libero nulla eveniet nemo!</p>
                            </Skill>

                            <Skill>
                                <Icon>
                                    <img src="/assets/images/database_icon.png" alt=""/>
                                </Icon>
                                <h3>Handling Big Data</h3>
                                <p>Manage vasts amounts of user-critical information</p>
                            </Skill>

                            <Skill innerRef={ rightSkill => this.rightSkill = rightSkill }>
                                <Icon>
                                    <img src="/assets/images/node.png" alt=""/>
                                </Icon>
                                <h3>Communicating Across the Web</h3>
                                <p>Orchastrate communications between client and server</p>
                            </Skill>
                        </OtherSkills>

                        <BarConnectingSkills style={ bar } />

                        <JavascriptSkill>
                            <Skill>
                                <Icon>
                                    <img src="/assets/images/javascript.png" alt=""/>
                                </Icon>
                                <h3>Creating Amazing experiences</h3>
                                <p>Illo velit doloremque laudantium dolorum aliquid blanditiis vero quas facilis.</p>
                            </Skill>
                        </JavascriptSkill>
                    </Skills>
                </Main>

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
    componentDidMount = () => {
        const leftSkill = this._getElementsPosition(this.leftSkill)
        const rightSkill = this._getElementsPosition(this.rightSkill)
        
        const top = leftSkill.top + BAR_OFFSET
        const left = leftSkill.left - BAR_WIDTH
        const right = rightSkill.left + BAR_WIDTH
        const width = (right - left) + "px"

        this.setState({ bar: { left, top, width }})
    }
    _getElementsPosition = (element) => {
        const width = parseFloat(getComputedStyle(element).getPropertyValue("width").replace("px", ""))
        const height = parseFloat(getComputedStyle(element).getPropertyValue("height").replace("px", ""))
        const left = element.offsetLeft
        const top = element.offsetTop

        return { left: (width / 2) + left, top: top + height }
    }
}

const BAR_WIDTH = 2
const BAR_HEIGHT = 30
const BAR_OFFSET = 40

const BarConnectingSkills = styled.div`
    background-color: ${ PRIMARY_COLOR };
    height: 5px;
    position: absolute;
`
const OtherSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const JavascriptSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
const Skill = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 44px;
    margin: 0;
    position: relative;

    h3 {
        margin-bottom: 5px;
    }

    p {
        color: ${ colorer(PRIMARY_COLOR).light(-10)};
        margin: 0;
        // max-width: 90%;
    }
`
const Skills = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    font-size: 13px;
    padding: 0;

    ${Skill} {
        flex: 0 1 50%;
    }

    ${OtherSkills} {
        margin-bottom: 90px;

        ${Skill} {
            &:after {
                content: "";
                position: absolute;
                height: ${ BAR_HEIGHT }px;
                border: solid ${ BAR_WIDTH }px ${ PRIMARY_COLOR };
                bottom: -${ BAR_OFFSET }px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
    ${JavascriptSkill} {
        ${Skill} {
            &:after {
                content: "";
                position: absolute;
                height: ${ BAR_HEIGHT }px;
                border: solid ${ BAR_WIDTH }px ${ PRIMARY_COLOR };
                top: -${ BAR_OFFSET }px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
    @media (min-width: 768px) {

        ${Skill} {
            flex: 0 1 25%;
        }
    }
`
const Icon = styled.div`
    width: 80px;
    height: 80px;

    img {
        max-width: 100%;
    }
`
const Underline = styled.span`
    border-top: solid 3px ${ PRIMARY_COLOR };
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
    width: 100%;
    box-sizing: border-box;

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
const AboutMeHeader = styled.div`
    margin-bottom: 60px;

    h1 {
        margin-bottom: 7px;
    }
`
const AboutMe = styled.div`
    background: linear-gradient(315deg,
        ${SECONDARY_COLOR} 0%,
        ${colorer(SECONDARY_COLOR).light(10)} 50%,
        ${colorer(SECONDARY_COLOR).light(20)} 51%,
        ${colorer(SECONDARY_COLOR).light(30)} 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: relative;
    text-align: center;
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