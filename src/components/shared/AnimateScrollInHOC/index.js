import React from "react"
import styled from "styled-components"

import AnimateScrollIn from "../AnimateScrollIn"

class AnimateScrollInHOC extends AnimateScrollIn {
    render() {
        const { isHidden } = this.state

        const Component = this.props.component
        
        return (
            <AnimateScrollInView { ...this.props } isHidden={ isHidden } innerRef={ component => this.component = component }>
                <Component { ...this.props } isHidden={ isHidden } />
            </AnimateScrollInView>
        )
    }
}

const AnimateScrollInView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: ${({ isHidden }) => isHidden ? 0 : 1};
    transition: opacity .7s ease-in-out ${({ isHidden, shouldDelay }) => shouldDelay && shouldDelay(isHidden)};
`
export default AnimateScrollInHOC
