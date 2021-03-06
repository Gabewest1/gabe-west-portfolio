import React from "react"
import styled from "styled-components"
import randomColor from "random-color"

import { PRIMARY_COLOR } from "../../constants"
import projectData from "./projectData"
import AnimateScrollIn from "../shared/AnimateScrollIn"
import SectionTitle from "../shared/SectionTitle"
import {
    Background,
    Container,
    ProjectsView,
    Title,
    Description,
    ProjectImage,
    CardView,
    Stripe
} from "./styles"

export default class Projects extends React.Component {
    render() {
        const projects = projectData.map((project, i) => <Card key={ i } project={ project } />)

        return (
            <Container id="projects">
                <Background>
                    <SectionTitle>My Work</SectionTitle>
                    <ProjectsView>
                        { projects }
                    </ProjectsView>
                </Background>
            </Container>
        )
    }
}

class Card extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            active: false,
            arrows: false,
            bars: true,
            color: PRIMARY_COLOR
        }
    }
    render() {
        const { color } = this.state
        const { title, description, href, reactNative, src, subTitle } = this.props.project

        return (
            <AnimateScrollIn>
                <CardView
                    key={ title }
                    className={ `material-card ${this.state.active ? "mc-active" : "" }`}
                    color={ color }
                >
                    <h2>
                        <span>{ title }</span>
                        <strong>
                            { subTitle }
                        </strong>
                    </h2>
                    <div className="mc-content">
                        <div className="img-container">
                            <img className="img-responsive" src={ src } />
                        </div>
                        <div className="mc-description">
                            { description }
                        </div>
                    </div>
                    <a className={ `mc-btn-action` } onClick={ this._handleCTAClick }>
                        <i className={ this._getCTAIcon() }></i>
                    </a>
                    <div className="mc-footer">
                        <h4>
                            { this._renderLink(title, href, reactNative) }
                        </h4>
                    </div>
                </CardView>
            </AnimateScrollIn>
        )
    }
    _renderLink = (title, href, isReactNativeProject) => {
        if (isReactNativeProject) {
            return (
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <a target="_blank" href={ href.android } alt={ "android link" }>Play Store</a> 
                    <a target="_blank" href={ href.ios } alt="ios link">App Store</a> 
                </div>
            )   
        } else {
            return <a target="_blank" href={ href } alt={ title + " link" }>Check it out</a>
        }
    }
    _getCTAIcon = () => {
        const { active, arrows, bars } = this.state

        if (active && !arrows || !active && arrows) {
            setTimeout(() => this.setState({ arrows: !arrows }), 800)

            return `fa fa-star fa-spin-fast`
        } else if (active && arrows) {
            return `fa fa-arrow-left`            
        } else {
            return `fa fa-bars`
        }
    }
    _handleCTAClick = () => {
        const arrows = this.state.active

        this.setState({ active: !this.state.active })
    }
}
