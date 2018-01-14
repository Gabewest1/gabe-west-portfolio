import React from "react"
import styled from "styled-components"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../constants"

const Stripe = styled.div`
    position: absolute;
    top: 0;
    border-style: solid;
    border-top: solid 73px transparent;
    ${({ right }) => right ? "right: 0" : "left: 0"};
    ${({ right }) => right ? `border-right-width: 73px` : "border-left-width: 73px"};
    ${({ right }) => right ? `border-right-color: #718199;` : "border-left-color: #718199"};
    ${({ right }) => right ? `border-left-color: transparent` : "border-right-color: transparent"};

    @media (min-width: 768px) {
        border-top-width: 140px;
        ${({ right }) => right ? `border-right-width: 140px` : "border-left-width: 140px"};    
    }
`
const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 73px;
    font-size: 20px;
    text-align: center;
    letter-spacing: 4px;
    margin: 0;
    position: relative;
    z-index: 1;

    @media (min-width: 768px) {
        font-size: 32px;
        height: 140px;
    }
`
const SectionTitle = styled.div`
    position: relative;
    overflow: hidden;

    ${({ right, secondary }) => {
        const backgroundColor = secondary ? PRIMARY_COLOR : SECONDARY_COLOR
        const color = secondary ? SECONDARY_COLOR : PRIMARY_COLOR

        return `background-color: ${ backgroundColor }; color: ${ color };`
    }}
`

export default (props) => (
    <SectionTitle { ...props }>
        { props.right && <Stripe right={ true } secondary={ props.secondary } /> }
        { props.left && <Stripe right={ false } secondary={ props.secondary } /> }
        <Title { ...props }>{ props.children }</Title>
    </SectionTitle>
)
