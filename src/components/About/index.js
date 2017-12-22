import React from "react"
import styled, { keyframes } from "styled-components"
import SelfWritingText from "../shared/SelfWritingText"

const Container = styled.div`
    color: black;
    text-align: center;    
`
const Hi = styled.p`

`
const MyPassions = styled.div`
    height: 250px;
    position: relative;
    max-width: 200px;
    margin: 0 auto;
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
`
export default class About extends React.Component {
    render() {
        return (
            <Container>
                <h1>Hi!</h1>
                <Hi>
                    I'm Gabe West and I'm a passionate
                    <MyPassions>
                        <Heart src="/assets/images/heart.svg" />
                        <_SelfWritingText />.
                    </MyPassions>
                </Hi>
            </Container>
        )
    }
}