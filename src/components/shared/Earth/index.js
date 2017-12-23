import React from "react"
import styled from "styled-components"

const EarthView = styled.div`
    position: relative;
`
const EarthImage = styled.img`
    max-width: 100%;
`

const EarthText = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
`
export default class Earth extends React.Component {
    render() {
        return (
            <EarthView { ...this.props }>
                <EarthImage src="/assets/images/world_img.png" />
                <EarthText src="/assets/images/world_text.png" />
            </EarthView>
        )
    }
}
