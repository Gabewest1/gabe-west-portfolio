import React, { Component } from 'react'
import styled from "styled-components"
import ReactFitText from "react-fittext"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

import SelfWritingText from "../shared/SelfWritingText"
import ColoredText from "../shared/ColoredText"

class Header extends Component {
	render() {
	  	return (
			<HeaderView>
	
				<Navbar>
					<List>
						<li><a href="#">About</a></li>
						<li><a href="#">Projects</a></li>
						<li><a href="#">Contact</a></li>
					</List>
				</Navbar>
				
				<HeroText style={{ fontSize: "7vw" }}>
					<ColoredText>Hello,</ColoredText> I'm Gabe West!
				</HeroText>
				
				<_HeroText style={{ margin: 0 }}><ColoredText>You can catch me:</ColoredText></_HeroText>
				<_SelfWritingText color="white" />
	
			</HeaderView>
	  	)
	}
}

const Stripe = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    border-top: solid 122px transparent;
    border-right: solid 285px ${ PRIMARY_COLOR };
`

const HeaderView = styled.header`
	align-items: center;
	background: url(/assets/images/hero/img7.jpg) no-repeat;
	background-attachment: fixed;
	background-position: center right;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	position: relative;

	&:before {
		content: "";
		display: block;
		position: absolute;
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,.8);
	}
`
const HeroText = styled.h3`
	margin: 0;
	text-align: center;
	z-index: 1;
	line-height: 2em;
	font-size: 1em;
	font-family: 'Titillium Web', sans-serif;

	@media (min-width: 480px) {
		font-size: 2em;
	}
`
const _HeroText = styled(HeroText)`
	font-weight: 100;
	font-size: 1em;
`
const Underline = styled.span`
	text-decoration: underline;
`
const Navbar = styled.nav`
	display: flex;
	padding: 1em;
	position: absolute;
	top: 0;
	width: 100%;
	box-sizing: border-box;
	font-size: 20px;
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
const _SelfWritingText = styled(SelfWritingText)`
	min-height: 32px;
	color: #efefef;
	font-family: 'Pacifico', cursive;
`

export default Header
