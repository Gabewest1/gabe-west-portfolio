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

				<HeaderContent>
					
					<Logo>
						<img src="/assets/images/header_logo.png" alt="logo" />
					</Logo>

					<HeroText>Gabe West</HeroText>
					
					<SubTitle>
						<Descriptors>
							FRONTEND<span style={{ margin: "0 7px" }}>•</span>
							BACKEND<span style={{ margin: "0 7px" }}>•</span>
							MOBILE
						</Descriptors>
						<Developer>JavaScript Developer</Developer>
					</SubTitle>

				</HeaderContent>

			</HeaderView>
	  	)
	}
}


const Logo = styled.div`
	width: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	max-height: 40vh;
	margin: 10px 0;

	img {
		max-width: 100%;
		max-height: 100%;
	}
`
const Descriptors = styled.p`
	display: inline-block;
	margin: 10px 0;
	padding: 10px 0;
	border-top: solid thin ${ PRIMARY_COLOR };	
	border-bottom: solid thin ${ PRIMARY_COLOR };	
	font-family: raleway;

	@media (min-width: 768px) {
		width: 350px;
	}
`
const Developer = styled.p`
	margin: 0;
	font-size: 28px;
	font-family: 'Dancing Script', cursive;
`
const HeroText = styled.h1`
	font-family: 'Dancing Script', cursive;
	font-weight: 100;
	margin: 0;
	text-align: center;
	z-index: 1;
`
const SubTitle = styled.p`
	color: #efefef;
	border-radius: 7px;
	margin: 1px 0;
	font-size: 14px;
	font-weight: 100;
	text-align: center;
	font-family: 'raleway', sans-serif;	
	color: ${ PRIMARY_COLOR };
	width: 100%;
`
const HeaderContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	z-index: 1;
`
const HeaderView = styled.header`
	align-items: center;
	background: url(/assets/images/hero/hero_image.jpg) no-repeat;
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
			${"#000"} 0%,
			${colorer("#000").light(5)} 25%,
			${colorer("#000").light(10)} 50%,
			${colorer("#000").light(15)} 75%
		);
		// background-color: black;
		opacity: .86;
	}

	@media (min-width: 768px) {
		${ HeroText } {
			font-size: 72px;
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
