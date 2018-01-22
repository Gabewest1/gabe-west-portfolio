import React from "react"
import styled, { keyframes } from "styled-components"
import colorer from "colorer"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

import AnimateScrollIn from "../shared/AnimateScrollIn"
import AnimateScrollInHOC from "../shared/AnimateScrollInHOC"
import ColoredText from "../shared/ColoredText"
import SectionTitle from "../shared/SectionTitle"

export default class About extends React.PureComponent {
    constructor() {
        super()

        this.state = {
            isBarDisplayed: false,
            topBar: { left: 0, top: 0, width: 0, height: "5px" },
            bottomBar: { left: 0, top: 0, width: 0, height: "5px" }
        }
    }
    render() {
        const { bottomBar, topBar } = this.state

        return (
            <AboutMe id="about">
                <AboutMeHeader>
                    <SectionTitle secondary>About</SectionTitle>
                </AboutMeHeader>

                <Main>
                    <AnimateScrollIn>
                        <Description>
                            <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
                                <AboutMeImg src="/assets/images/self_taught.jpg" />
                            </div>
                            <div>
                                <h1 style={{ fontFamily: "raleway-bold", fontSize: 24, textAlign: "center" }}>
                                    Who's this guy?
                                </h1>
                                <MissionStatement>
                                    I'm a self-taught (proof in image) fullstack developer who specializes in frontend
                                    development. My passion is any and all things JavaScript, ranging from setting up RESTful 
                                    API's and designing database schemas to creating web and mobile applications using 
                                    various frameworks like Angular, React &amp; React Native. I'm excited to learn new 
                                    technologies and you can always find me in my room working on my craft.
                                </MissionStatement>
                            </div>
                        </Description>
                    </AnimateScrollIn>

                    <AboutMeHeader>
                        <SectionTitle secondary>The Process</SectionTitle>
                    </AboutMeHeader> 

                    <Skills>
                        <JavascriptSkill>
                            <Skill>
                                <AnimateScrollIn>
                                    <Icon>
                                        <img src="/assets/images/html_css_js.png" alt="" onLoad={ this._positionBarComponent }/>
                                    </Icon>
                                    <h3>Creating Amazing Experiences</h3>
                                    <p>Starts with an idea, passion and <strong>JAVASCRIPT!</strong></p>
                                </AnimateScrollIn>
                            <AnimateScrollInHOC component={ VerticalBar } />
                            </Skill>
                        </JavascriptSkill>


                        <OtherSkills>
                                <Skill innerRef={ leftSkill => this.leftSkill = leftSkill}>
                                    <AnimateScrollIn>
                                        <Icon>
                                            <img src="/assets/images/wireframing_icon.png" alt=""/>
                                        </Icon>
                                        <h3>Rapid Prototyping</h3>
                                        <p>
                                            I quickly test out ideas &amp; designs using libraries such as 
                                            Bootstrap, Semantic-Ui, or rolling my own layouts with flexbox and 
                                            CSS .
                                        </p>
                                    </AnimateScrollIn>
                                    <AnimateScrollInHOC top component={ VerticalBar } />                                
                                    <AnimateScrollInHOC component={ VerticalBar } />                                
                                </Skill>


                                <Skill>
                                    <AnimateScrollInHOC top component={ VerticalBar } />                                
                                    <AnimateScrollInHOC component={ VerticalBar } />                                
                                    <AnimateScrollIn>
                                        <Icon>
                                            <img src="/assets/images/node.png" alt=""/>
                                        </Icon>
                                        <h3>Communicating Over the Web</h3>
                                        <p>I orchastrate the flow of data between client and server.</p>
                                    </AnimateScrollIn>
                                </Skill>


                                <Skill>
                                    <AnimateScrollIn>
                                        <Icon>
                                            <img src="/assets/images/react_logo.svg" alt=""/>
                                        </Icon>
                                        <h3>Visualize &amp; Solidify Designs</h3>
                                        <p>I break apart ideas into components and construct large-scale applications</p>
                                    </AnimateScrollIn>
                                    <AnimateScrollInHOC component={ VerticalBar } />
                                </Skill>


                                <Skill>
                                    <AnimateScrollIn>
                                        <Icon>
                                            <img src="/assets/images/node.png" alt=""/>
                                        </Icon>
                                        <h3>Communicating Over the Web</h3>
                                        <p>I orchastrate the flow of data between client and server.</p>
                                    </AnimateScrollIn>
                                    <AnimateScrollInHOC component={ VerticalBar } />                                
                                </Skill>


                                <Skill>
                                    <AnimateScrollIn>
                                        <Icon>
                                            <img src="/assets/images/responsive_icon.png" alt=""/>
                                        </Icon>
                                        <h3>Always Responsive</h3>
                                        <p>I construct intricate interfaces that look pixel perfect on any screen size</p>
                                    </AnimateScrollIn>
                                    <AnimateScrollInHOC component={ VerticalBar } />
                                </Skill>


                                <Skill innerRef={ rightSkill => this.rightSkill = rightSkill }>
                                    <AnimateScrollIn>
                                        <Icon>
                                            <img src="/assets/images/database_icon.png" alt="" style={{ maxWidth: "70%" }} />
                                        </Icon>
                                        <h3>Handling Big Data</h3>
                                        <p>I manage vasts amounts of user-critical information using industry standard encryption strategies</p>
                                    </AnimateScrollIn>
                                    <AnimateScrollInHOC component={ VerticalBar } />
                                </Skill>
                        

                                <JavascriptSkill barAbove style={{ marginTop: "30px" }}>
                                    <Skill>
                                        <AnimateScrollIn>
                                            <Icon>
                                                <img src="/assets/images/html_css_js.png" alt="" onLoad={ this._positionBarComponent }/>
                                            </Icon>
                                            <h3>Creating Amazing Experiences</h3>
                                            <p>Starts with an idea, passion and <strong>JAVASCRIPT!</strong></p>
                                        </AnimateScrollIn>
                                        <AnimateScrollInHOC top component={ VerticalBar } />                                     
                                    </Skill>
                                </JavascriptSkill>
                        </OtherSkills>


                        <AnimateScrollIn style={{ ...topBar, position: "absolute" }} >
                            <BarConnectingSkills />
                        </AnimateScrollIn>

                        <AnimateScrollIn style={{ ...bottomBar, position: "absolute" }} >
                            <BarConnectingSkills />
                        </AnimateScrollIn>

                        <span style={{
                            position: "absolute",
                            top: topBar.top,
                            left: topBar.left,
                            transform: "translateY(-100%)",
                            fontFamily: "raleway-bold",
                            fontSize: "12px"
                        }}>
                            <AnimateScrollIn>
                                FRONTEND
                            </AnimateScrollIn>
                        </span>
                        <span style={{
                            position: "absolute",
                            top: topBar.top,
                            left: parseInt(topBar.left) + parseInt(topBar.width) + "px",
                            transform: "translate(-100%, -100%)",
                            fontFamily: "raleway-bold",
                            fontSize: "12px"
                        }}>
                            <AnimateScrollIn>
                                BACKEND
                            </AnimateScrollIn>
                        </span>
                    </Skills>

                </Main>                                                                                                                                                                                     
            </AboutMe>
        )
    }
    componentWillMount = () => {
        window.addEventListener("resize", this._positionBarComponent)
    }
    componentDidMount = () => {
        this._positionBarComponent()
    }
    componentWillUnmount = () => {
        window.removeEventListener("resize", this._positionBarComponent)        
    }
    _positionBarComponent = () => {
        const leftSkill = this._getElementsPosition(this.leftSkill)
        const rightSkill = this._getElementsPosition(this.rightSkill)
        
        const topBar_top = leftSkill.top - BAR_OFFSET
        const bottomBar_top = rightSkill.top + rightSkill.height + BAR_OFFSET + 10
        const left = leftSkill.left - BAR_WIDTH
        const right = rightSkill.left + 1
        const topBar_width = (right - left) + "px"
        const bottomBar_width = (right - left + 1) + "px"

        this.setState({
            topBar: { left, top: topBar_top, width: topBar_width },
            bottomBar: { left, top: bottomBar_top, width: bottomBar_width }
        })
    }
    _getElementsPosition = (element) => {
        const width = parseFloat(getComputedStyle(element).getPropertyValue("width").replace("px", ""))
        const height = parseFloat(getComputedStyle(element).getPropertyValue("height").replace("px", ""))
        const left = element.offsetLeft
        const top = element.offsetTop

        return { left: (width / 2) + left, top, width, height }
    }
}

const BAR_WIDTH = 2
const BAR_HEIGHT = 50
const BAR_OFFSET = 40

const VerticalBar = styled.div`
    position: absolute;
    left: 50%;
    border: solid ${ BAR_WIDTH }px ${ SECONDARY_COLOR };
    ${({ top }) => top ? "top: 0; transform-origin: top;" : "bottom: 0; transform-origin: bottom;"}
    height: ${({ isHidden }) => isHidden ? 0 : 66 }px;
    transform: rotate(180deg);
`
const BarConnectingSkills = styled.div`
    background-color: ${ SECONDARY_COLOR };
    height: 5px;
    width: 100%;
`
const Icon = styled.div`
    background-color: ${ SECONDARY_COLOR };
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    padding: 8px;

    img {
        max-width: 80%;
    }
`
const OtherSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`
const JavascriptSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${Skill} {
        min-width: 300px;
    }

    ${Icon} {
        width: 100px;
        height: 100px;
    }
`
const Skill = styled.li`
    // background-color: ${ PRIMARY_COLOR };
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 44px;
    margin: 0;
    position: relative;
    padding: 0 5px;
    box-sizing: border-box;

    > div:first-child {
        z-index: 1;
        background-color: ${ PRIMARY_COLOR };
    }

    h3 {
        margin-bottom: 5px;
        font-family: Raleway-Bold;
    }

    p {
        color: ${ colorer(SECONDARY_COLOR).light(-10)};
        margin: 0;
    }
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: justify;
    text-align-last: center;
    margin: 20px 0;

    @media (min-width: 888px) {
        flex-direction: row;
        justify-content: center;
        margin: 40px 0;

        > * {
            flex-basis: 50%;
        }

        div:last-child {
            padding: 0 15px;
            box-sizing: border-box;
        }

        h1 {
            margin-top: 0;
        }
    }
`
const Skills = styled.ul`
    list-style: none;
    font-size: 13px;
    padding: 0;

    ${Skill} {
        flex: 0 1 50%;

        &:nth-child(5) {
            margin-bottom: 0;
        }
        &:nth-child(6) {
            margin-bottom: 0;
        }
    }

    ${JavascriptSkill} {
        ${Skill} {
            min-width: 300px;
        }
    }

    ${OtherSkills} {
        margin-top: 90px;

        ${Skill} {
            margin-bottom: ${ BAR_HEIGHT + (BAR_OFFSET / 2) }px;

            ${Icon} {
                margin-top: 10px;
            }
        }
    }
`
const Container = styled.div`
    position: relative;
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    max-width: 1024px;

    > * {
        flex: 0 1 50%;
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
    border-radius: 20px;
    max-width: 100%;
    max-height: 234px;
`
const AboutMeHeader = styled.div`
    margin-bottom: 30px;
`
const AboutMe = styled.div`
    background: linear-gradient(315deg,
        ${SECONDARY_COLOR} 0%,
        ${colorer(SECONDARY_COLOR).light(10)} 50%,
        ${colorer(SECONDARY_COLOR).light(20)} 51%,
        ${colorer(SECONDARY_COLOR).light(30)} 100%
    );
    background: ${ PRIMARY_COLOR };
    color: ${ SECONDARY_COLOR };
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
    line-height: 24px;

    pre {
        font-family: inherit;
    }
`