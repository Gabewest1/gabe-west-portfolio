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
            <AnimateScrollInView isHidden={ isHidden } innerRef={ component => this.component = component }>
                { this.props.children }
            </AnimateScrollInView>
        )
    }
    componentWillMount = () => {
        if (this.state.isHidden) {
            window.addEventListener("scroll", this._shouldShowComponent)
        }
    }
    componentDidMount = () => {
        const scrollTop = this._getScrollTop(this.component)
        console.log("SCROLLTOP:", scrollTop)

        this.setState({ scrollTop })
    }
    _getScrollTop = (el) => {
        // yay readability
        for (var scrollTop = 0; el != null; scrollTop += el.offsetTop, el = el.offsetParent);

        return scrollTop
    }
    _shouldShowComponent = (e) => {
        if (window.scrollY + (window.innerHeight / 1.5) >= this.state.scrollTop) {
            this.setState({ isHidden: false })
            window.removeEventListener("scroll", this._shouldShowComponent)
        }
    }
}

const AnimateScrollInView = styled.div`
    opacity: ${({ isHidden }) => isHidden ? 0 : 1};
    transition: opacity .7s ease-in-out;
`
export default AnimateScrollIn
