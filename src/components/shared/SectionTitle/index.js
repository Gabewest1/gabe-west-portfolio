import React from "react"
import styled from "styled-components"

import AnimateScrollIn from "../AnimateScrollIn"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../constants"


const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: raleway;
    font-size: 48px;
    font-weight: bolder;
    text-align: center;
    letter-spacing: 4px;
    line-height: 88px;
    margin: 0;
    position: relative;
    z-index: 1;
`
const SectionTitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
`
const Underline = styled.span`
    border-top: solid 2px ${({ secondary }) => secondary ? SECONDARY_COLOR : PRIMARY_COLOR };
    font-weight: bolder;
    color: transparent;
    display: inline-block;
    font-size: 32px;
    height: 0px;
`
export default (props) => (
    <AnimateScrollIn>
        <SectionTitle { ...props }>
            <Title { ...props }>{ props.children }</Title>
            <Underline { ...props }>{ props.children }</Underline>
        </SectionTitle>
    </AnimateScrollIn>
)
