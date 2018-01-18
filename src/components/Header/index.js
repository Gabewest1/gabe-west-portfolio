import React, { Component } from 'react'
import styled from "styled-components"
import ReactFitText from "react-fittext"
import colorer from "colorer"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

import SelfWritingText from "../shared/SelfWritingText"
import ColoredText from "../shared/ColoredText"

class Header extends Component {
	render() {
	  	return (
			<HeaderView>

				<HeroText style={{ fontSize: "8vw" }}>
					<ColoredText color="#718199">Hello,</ColoredText> I'm Gabe West!
				</HeroText>
				
				<SubTitle>
					FRONTEND<span style={{ margin: "0 7px" }}>/</span>
					BACKEND<span style={{ margin: "0 7px" }}>/</span>
					MOBILE
					<br/>
					<span>JavaScript Developer</span>
				</SubTitle>

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
		background: linear-gradient(45deg,
			${SECONDARY_COLOR} 0%,
			${colorer(SECONDARY_COLOR).light(10)} 50%,
			${colorer(SECONDARY_COLOR).light(20)} 51%,
			${colorer(SECONDARY_COLOR).light(30)} 100%
		);
		opacity: .7;
	}
`
const HeroText = styled.h3`
	margin: 0;
	text-align: center;
	z-index: 1;
	font-size: 48px;
	font-family: 'Titillium Web', sans-serif;

	@media (min-width: 768px) {
		font-size: 2em;
	}
`
const SubTitle = styled.p`
	color: #efefef;
	border: solid thin ${ PRIMARY_COLOR };
	z-Index: 3;
	margin: 8px 0;
	text-align: center;
	padding: 12px 30px;
	font-family: 'Titillium Web', sans-serif;	
	color: #718199;
	font-size: 3vw;

	span {
		color: ${ PRIMARY_COLOR };
	}

	span:last-child {
		font-size: 4vw;
	}

	// @media (max-width: 767px) {
	// 	font-size: 12px;
	// }
`
const Underline = styled.span`
	text-decoration: underline;
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
