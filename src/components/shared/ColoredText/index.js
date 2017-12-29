import React from "react"
import styled from "styled-components"
import { SECONDARY_COLOR } from "../../../constants"

const ColoredText = styled.span`
    color: ${({ color }) => color ? color : SECONDARY_COLOR };
    text-decoration: ${({ underline }) => underline ? "underline" : "none" };
`

export default ColoredText
