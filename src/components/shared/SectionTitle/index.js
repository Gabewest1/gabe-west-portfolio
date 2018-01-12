import React from "react"
import styled from "styled-components"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../constants"

const Stripe = styled.div`
    position: absolute;
    top: 0;
    border-top: solid 12vmax transparent;
    
    /* GENERATE LEFT/RIGHT POSITION AND STRIPE DIRECTION */
    ${({ right, secondary }) => {
        const position = right ? "right: 0" : "left: 0"
        // const borderColor = secondary ? SECONDARY_COLOR : PRIMARY_COLOR
        const borderColor = "#718199"
        const borderDirection = right ? "border-right" : "border-left"

        return `
            ${position};
            ${borderDirection}: solid 12vmax ${ borderColor };
        `
    }}
`
const Title = styled.h3`
    line-height: 12vmax;
    font-size: 20px;
    text-align: center;
    letter-spacing: 4px;
    margin: 0;
    position: relative;
    z-index: 1;

    @media (min-width: 768px) {
        font-size: 28px;
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
