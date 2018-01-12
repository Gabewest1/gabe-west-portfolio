import React from "react"
import styled from "styled-components"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../constants"

const Stripe = styled.div`
    position: absolute;
    top: 0;
    border-top: solid 150px transparent;
    
    /* GENERATE LEFT/RIGHT POSITION AND STRIPE DIRECTION */
    ${({ right, secondary }) => {
        const position = right ? "right: 0" : "left: 0"
        const borderColor = secondary ? SECONDARY_COLOR : PRIMARY_COLOR
        const borderDirection = right ? "border-right" : "border-left"

        return `
            ${position};
            ${borderDirection}: solid 285px ${ borderColor };
        `
    }}
`
const Title = styled.h3`
    line-height: 12vmax;
    font-size: 28px;
    text-align: center;
    letter-spacing: 4px;
    margin: 0;

    ${({ right, secondary }) => {
        const backgroundColor = secondary ? PRIMARY_COLOR : SECONDARY_COLOR
        const color = secondary ? SECONDARY_COLOR : PRIMARY_COLOR

        return `background-color: ${ backgroundColor }; color: ${ color };`
    }}
`
const SectionTitle = styled.div`
    position: relative;
    overflow: hidden;
`

export default (props) => (
    <SectionTitle { ...props }>
        <Stripe right={ props.right } secondary={ props.secondary } />
        <Title { ...props }>{ props.children }</Title>
    </SectionTitle>
)
