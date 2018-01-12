import React from "react"
import styled from "styled-components"
import randomColor from "random-color"

import { PRIMARY_COLOR } from "../../constants"
import projectData from "./projectData"
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
            <Container>
                <Stripe/>

                <SectionTitle secondary>My Latest Work</SectionTitle>

                <Background>
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
        const { title, description, src, subTitle } = this.props.project

        return (
            <CardView
                key={ title }
                className={ `material-card ${this.state.active ? "mc-active" : "" }`}
                color={ color }
            >
                <h2>
                    <span>{ title }</span>
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
                        Social
                    </h4>
                </div>
            </CardView>
        )
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
