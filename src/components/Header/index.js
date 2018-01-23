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
						Gabe West
					</HeroText>
					
					<SubTitle>
						<Descriptors>
							FRONTEND<span style={{ margin: "0 7px" }}>•</span>
							BACKEND<span style={{ margin: "0 7px" }}>•</span>
							MOBILE
						</Descriptors>
						<Developer>JavaScript Developer</Developer>
					</SubTitle>
				</div>

			</HeaderView>
	  	)
	}
}

const Descriptors = styled.p`
	display: inline-block;
	margin: 10px 0;
	padding: 10px 0;
	border-top: solid thin ${ PRIMARY_COLOR };	
	border-bottom: solid thin ${ PRIMARY_COLOR };	
	width: 350px;
`
const Developer = styled.p`
	margin: 0;
`
const HeroText = styled.h1`
	margin: 0;
	text-align: center;
	z-index: 1;
	font-family: Raleway-Bold;
`
const SubTitle = styled.p`
	color: #efefef;
	border-radius: 7px;
	margin: 1px 0;
	font-size: 14px;
	font-weight: 700;
	text-align: center;
	color: #718199;
	color: ${ PRIMARY_COLOR };
	width: 100%;

	${Descriptors} {
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
			font-size: 68px;
			// margin-bottom: 10px;
		}
		${ SubTitle } {
			font-size: 20px;

			${Developer} {
				font-size: 42px;
			}
		}
	}
`

export default Header
