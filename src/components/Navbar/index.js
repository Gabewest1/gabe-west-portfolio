import React, { Component } from 'react'
import styled from "styled-components"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

class Navbar extends Component {
	render() {
	  	return (
            <NavbarView>
                <List>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </List>
            </NavbarView>
	  	)
	}
}

const NavbarView = styled.nav`
	display: flex;
	padding: 1em;
	position: fixed;
	top: 0;
	width: 100%;
	box-sizing: border-box;
    font-size: 20px;
    z-index: 100;
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
