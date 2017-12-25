import React, { Component } from 'react'
import styled from "styled-components"

import SelfWritingText from "../shared/SelfWritingText"

const HeaderView = styled.header`
	align-items: center;
	background: url(/assets/images/hero.jpg) no-repeat;
	background-position: center center;
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
		background: rgba(0,0,0,.9);
	}
`
const HeroText = styled.h1`
	margin: 0;
	text-align: center;
	font-family: 'Bungee', cursive;
	z-index: 1;
`
const _HeroText = styled(HeroText)`
	font-weight: 100;
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
	min-height: 28px;
`

export default class Header extends Component {
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
            
			<HeroText>Hello, I'm Gabe West!</HeroText>
			<_HeroText style={{ fontSize: "1em", margin: 0 }}>You can catch me:</_HeroText>
			<_SelfWritingText />
        </HeaderView>
    )
  }
}
