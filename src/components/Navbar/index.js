import React, { Component } from 'react'
import styled from "styled-components"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

let DOCUMENT_SCROLL_TOP = window.scrollY
let NAVBAR_TIMER

class Navbar extends Component {
	constructor() {
		super()

		this.state = {
			shouldCancelCollapse: false,
			isExpanded: true,
			isSetToCollapse: false,
			collapseTimerAmount: 3000,
		}
	}
	render() {
		const { isExpanded, isSetToCollapse } = this.state
		const hasntBeenSetToCollapse = !isSetToCollapse

	  	return (
            <NavbarView { ...this.props } isExpanded={ isExpanded }>
                <List>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </List>
            </NavbarView>
	  	)
	}
	componentWillMount = () => {
		window.addEventListener("scroll", this._handleOnScroll)
		DOCUMENT_SCROLL_TOP = window.scrollY
	}
	componentWillUnmount = () => {
		window.removeEventListener("scroll", this._handleOnScroll)
	}
	shouldComponentUpdate = (props, state) => {
		const { isExpanded, isSetToCollapse } = state
		const hasntBeenSetToCollapse = !isSetToCollapse
		
		if (isExpanded && hasntBeenSetToCollapse) {
			this._collapseNavbarHandler()
		}

		return true		
	}
	_collapseNavbarHandler = () => {
		if (DOCUMENT_SCROLL_TOP > (window.innerHeight / 2)) {
			this.setState({ isSetToCollapse: true })
			this._collapseNavbar()
		}
	}
	_collapseNavbar = () => {
		const { collapseTimerAmount } = this.state

		this.setState({ shouldCancelCollapse: false })
		
		NAVBAR_TIMER = setTimeout(() => {
			const { shouldCancelCollapse } = this.state
			
			if (shouldCancelCollapse) {
				this.setState({ shouldCancelCollapse: false })
			} else {
				this.setState({ isSetToCollapse: false })
				this._setIsExpanded(false)
			}
		}, collapseTimerAmount)
	}
	_setIsExpanded = (isExpanded) => {
		const haveScrolledPastTheHeaderSection = DOCUMENT_SCROLL_TOP >= window.innerHeight
		
		if (isExpanded || haveScrolledPastTheHeaderSection && !isExpanded) {
			this.setState({ isExpanded })
		}
	}
	_handleOnScroll = (e) => {
		const { isExpanded, isSetToCollapse } = this.state
		const isScrollingUp = DOCUMENT_SCROLL_TOP > window.scrollY
		const haveScrolledPastTheHeaderSection = DOCUMENT_SCROLL_TOP >= window.innerHeight
		
		if (isScrollingUp && !isExpanded) {
			this._setIsExpanded(true)
		}

		if (isScrollingUp && isSetToCollapse) {
			this.setState({ shouldCancelCollapse: true })
			NAVBAR_TIMER = clearTimeout(NAVBAR_TIMER)
			this._collapseNavbar()
		} else if (!isScrollingUp && isExpanded && haveScrolledPastTheHeaderSection) {
			this._setIsExpanded(false)

		}

		DOCUMENT_SCROLL_TOP = window.scrollY
	}
}

const NavbarView = styled.nav`
	background: rgba(0, 0, 0, 0.6);
	box-shadow: 0 3px 3px 1px rgba(40, 40, 40, .8);
    color: ${ PRIMARY_COLOR };
	display: flex;
	align-items: center;
	padding: 0 1em;
    position: fixed;
	top: 0;
	width: 100%;
	height: 63px;
	box-sizing: border-box;
    font-size: 20px;
	z-index: 100;
	transition: transform 350ms ease-in-out;
	transform: translateY(${({ isExpanded }) => isExpanded ? 0 : `-100%`});
`
const List = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: space-around;	
	width: 100%;
	list-style: none;

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		color: ${ SECONDARY_COLOR };
		text-decoration: underline;
	}
	
	
	@media (min-width: 768px) {
		justify-content: flex-start;
		
		> * {
			align-items: center;
			display: flex;
			margin-left: 24px;
			margin-right: 24px;
		}
	
		> *:last-child {
			margin-right: 0;
		}
	}
`

export default Navbar
