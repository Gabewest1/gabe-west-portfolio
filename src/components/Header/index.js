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
			<HeaderView id="header">

				<div style={{ zIndex: 1 }}>
					<HeroText>
						<ColoredText color="#718199">Hello,</ColoredText> I'm Gabe West!
					</HeroText>
					
					<SubTitle>
						FRONTEND<span style={{ margin: "0 7px" }}>/</span>
						BACKEND<span style={{ margin: "0 7px" }}>/</span>
						MOBILE
						<br/>
						<span>JavaScript Developer</span>
					</SubTitle>
				</div>

			</HeaderView>
	  	)
	}
}

const HeroText = styled.h1`
	margin: 0;
	text-align: center;
	z-index: 1;
	font-family: Raleway-Bold;
`
const SubTitle = styled.p`
	color: #efefef;
	border: solid thin ${ PRIMARY_COLOR };
	border-radius: 7px;
	margin: 8px 0;
	font-size: 14px;
	font-weight: 700;
	text-align: center;
	padding: 12px 0;
	color: #718199;
	width: 100%;

	span {
		color: ${ PRIMARY_COLOR };
	}

	span:last-child {
		font-family: Raleway-Bold;	
		font-size: 22px;
	}
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
			${colorer(SECONDARY_COLOR).light(10)} 25%,
			${colorer(SECONDARY_COLOR).light(20)} 50%,
			${colorer(SECONDARY_COLOR).light(30)} 75%
		);
		opacity: .7;
	}

	@media (min-width: 768px) {
		${ HeroText } {
			font-size: 72px;
			margin-bottom: 10px;
		}
		${ SubTitle } {
			font-size: 20px;

			span:last-child {
				font-size: 32px;
			}
		}
	}
`

export default Header
