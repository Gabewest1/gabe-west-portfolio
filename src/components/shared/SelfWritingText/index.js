import React from "react"
import styled, { keyframes } from "styled-components"
import adjectives from "./adjectives"

const CursorAnimation = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`
const Adjectives = styled.span`
    position: relative;
    white-space: nowrap;

    &:after {
        animation: ${ CursorAnimation } .4s ease-in-out infinite;
        background-color: black;
        content: "";
        position: absolute;
        right: 0px;
        height: 100%;
        width: 1px;
    }
`

export default class SelfWritingText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            adjectives,
            currentAdjective: adjectives[0],
            currentAdjectiveChar: 0,
            currentAdjectiveIndex: 0,
            isWritingAdjective: true
        }
    }
    render() {
        return (
            <Adjectives { ...this.props }>
                { this._renderAdjectives() }      
            </Adjectives>
        )
    }
    _renderAdjectives = () => {
        const { isWritingAdjective } = this.state
        
        return isWritingAdjective ? this._writeAdjective() : this._eraseAdjective()
    }
    _writeAdjective = () => {
        const { currentAdjective, currentAdjectiveChar, currentAdjectiveIndex } = this.state
        const isWordFinished = currentAdjective.length === currentAdjectiveChar
        const chunks = currentAdjective.split("")

        if (isWordFinished) {
            const nextAdjectiveIndex = (currentAdjectiveIndex + 1) % adjectives.length
            const nextAdjective = adjectives[nextAdjectiveIndex]
            const nextState = {
                currentAdjective: nextAdjective,
                currentAdjectiveChar: 0,
                currentAdjectiveIndex: nextAdjectiveIndex,
                isWritingAdjective: true
            }

            setTimeout(() => this.setState(nextState), 1000)
            return currentAdjective
        } else {
            setTimeout(() => this.setState({ currentAdjectiveChar: currentAdjectiveChar + 1 }), 100)
            
            return chunks.slice(0, currentAdjectiveChar)
        }
    }
    _eraseAdjective = () => {

    }
}