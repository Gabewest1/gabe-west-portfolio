import React from "react"
import styled, { keyframes } from "styled-components"
import SelfWritingText from "../shared/SelfWritingText"

const Container = styled.div`
    color: black;
    text-align: center;    
    border-top: solid #848484 30px;
    border-bottom: solid #848484 30px;
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
    color: white;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bolder;

    @media (min-width: 768px) {
        font-size: .8em;
    }
`
export default class About extends React.PureComponent {
    render() {
        return (
            <Container>
                <h1>Hi!</h1>
                <Hi>
                    I'm Gabe West and I'm a passionate:
                </Hi>
                <MyPassions>
                    <Heart src="/assets/images/heart.svg" />
                    <_SelfWritingText color={ "white" }/>
                </MyPassions>
            </Container>
        )
    }
}