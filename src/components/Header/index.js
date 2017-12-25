import React, { Component } from 'react'
import styled from "styled-components"

import Earth from "../shared/Earth"

const HeaderView = styled.header`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	position: relative;
`
const Quote = styled.div`
	text-align: center;
	position: relative;
	margin-top: 55px;
`
const Underline = styled.span`
	text-decoration: underline;
`
const Navbar = styled.nav`
	display: flex;
	font-size: .75em;
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
const _Earth = styled(Earth)`
	max-width: 400px;
	margin: 0 auto;
	top: 30px;
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
            <Quote>
				<h2 style={{textAlign: "center" }}>Imagination is more important then knowledge</h2>
                For knowledge is limited,
            </Quote>	

			<br/> 

            <_Earth />
        </HeaderView>
    )
  }
}
