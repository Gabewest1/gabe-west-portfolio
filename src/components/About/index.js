import React from "react"
import styled, { keyframes } from "styled-components"
import SelfWritingText from "../shared/SelfWritingText"

const Container = styled.div`
    text-align: center;    
    padding: 30px 0px;
    border-top: solid 3px white;
    border-bottom: solid 3px white;
`
const Hi = styled.p`

`
const MyPassions = styled.div`
    height: 200px;
    position: relative;
    max-width: 175px;
    margin: 0 auto;

    @media (min-width: 992px) {
        max-width: 200px;
    }

    @media (min-width: 1200px) {
        max-width: 220px;
    }
`
const Heart = styled.img`
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const _SelfWritingText = styled(SelfWritingText)`
    text-decoration: underline;

    @media (min-width: 768px) {
        font-size: .8em;
    }
`
export default class About extends React.PureComponent {
    render() {
        return (
            <Container>
                <h1>Hello, I'm Gabe!</h1>
                <Hi>
                    And you can catch me <_SelfWritingText color={ "white" } /> 
                </Hi>
            </Container>
        )
    }
}