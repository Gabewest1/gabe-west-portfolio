import React from "react"
import styled from "styled-components"

class AnimateScrollIn extends React.Component {
    constructor() {
        super()

        this.state = {
            scrollTop: 10000000,
            isHidden: true
        }
    }
    render() {
        const { isHidden } = this.state
        
        return (
            <AnimateScrollInView { ...this.props } isHidden={ isHidden } innerRef={ component => this.component = component }>
                { this.props.children }
            </AnimateScrollInView>
        )
    }
    componentWillMount = () => {
        if (this.state.isHidden) {
            window.addEventListener("scroll", this._shouldShowComponent)
        }
    }
    componentWillUnMount = () => {
        window.removeEventListener("scroll", this._shouldShowComponent)
    }
    _getScrollTop = (el) => {
        for (var scrollTop = 0; el != null; scrollTop += el.offsetTop, el = el.offsetParent);

        return scrollTop
    }
    _shouldShowComponent = (e) => {
        const scrollTop = this._getScrollTop(this.component)

        if (this.state.isHidden) {
            if (window.scrollY + (window.innerHeight / 2) >= scrollTop) {
                this.setState({ isHidden: false })
            }
        } else {
            if (window.scrollY + (window.innerHeight / 2) <= scrollTop) {
                this.setState({ isHidden: true })
            }
        }
    }
}

const AnimateScrollInView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: ${({ isHidden }) => isHidden ? 0 : 1};
    transition: opacity .7s ease-in-out;
`
export default AnimateScrollIn
