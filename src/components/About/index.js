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
    height: 20vmax;
`
const Intro = styled.h3`
    font-size: 11vw;
    margin: 0;
`
const SelfTaughtView = styled.div`
    align-items: center;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    > * {
        z-index: 1;
        flex: 0 1 50%;
    }

    @media (min-width: 768px) {
        flex-direction: row-reverse;

    }
`
const AboutMeText = styled.h3`
    color: tan;
    font-size: 2.5vw;
    max-width: 90%;
`
const AboutMeImg = styled.img`
    width: 100%;
`
const AboutMe = styled.div`
    background: ${ SECONDARY_COLOR };
    padding: 4em;
    line-height: 2.3;
    text-align: left;

    p { 
        margin: 0;
    }
`
export default class About extends React.PureComponent {
    render() {
        return (
            <Container>
                <Header>
                    <Intro>Who Is Gabe West?</Intro>
                    <div style={{ fontSize: "2vw" }}>(Pro Tip: He's Pretty Awesome :D)</div>
                </Header>
                
                <SelfTaughtView>

                    <div style={{ lineHeight: 0 }}>
                        <AboutMeImg src="/assets/images/self_taught.jpg" />
                    </div>

                    <div>
                        <AboutMeText>
                            I'm a
                            <ColoredText> self-taught </ColoredText>
                            developer whose
                            <ColoredText> inspired everyday </ColoredText>
                            to build <ColoredText> badass </ColoredText> creations.
                        </AboutMeText>
                    </div>

                </SelfTaughtView>

                <AboutMe>
                    <p>
                        I love everything about the web from designing database schemas to perfecting animations.
                        I'm truely passionate about taking ideas in my head and bringing them to reality through
                        web technoligies. I don't believe there is an artistic medium that allows an individual to 
                        express their inner thoughts and emotions comprable to programming. 
                    </p>
                </AboutMe>

            </Container>
        )
    }
}
