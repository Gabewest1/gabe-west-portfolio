import React, { Component } from 'react'
import styled from "styled-components"
import ReactFitText from "react-fittext"
import { SECONDARY_COLOR } from "../../constants"

import SelfWritingText from "../shared/SelfWritingText"
import ColoredText from "../shared/ColoredText"

class Header extends Component {
	render() {
	  	return (
			<HeaderView>
	
				<Navbar>
					<p>Gabe West</p>
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
	color: tan;
	margin: 0;
	text-align: center;
	z-index: 1;
	line-height: 2em;
	font-size: 1em;

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
	justify-content: space-between;
	padding: 0 1em;
	position: absolute;
	top: 0;
	width: 100%;
	box-sizing: border-box;
`
const List = styled.div`
	display: flex;
	
	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		color: ${ SECONDARY_COLOR };
		text-decoration: underline;
	}
	
	* {
		align-items: center;
		display: flex;
		list-style: none;
		margin-left: 1em;
		margin-right: 1em;
	}

	*:last-child {
		margin-right: 0;
	}
`
const _SelfWritingText = styled(SelfWritingText)`
	min-height: 32px;
	color: #efefef;
	font-family: 'Pacifico', cursive;
`

export default Header
