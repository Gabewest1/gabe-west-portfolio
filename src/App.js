import React, { Component } from 'react'
import styled from "styled-components"
import './App.css'

import ParticlesBackground from "./components/ParticlesBackground"
import Projects from "./components/Projects"
import About from "./components/About"

const Container = styled.div`

`
const Header = styled.header`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	position: relative;
`
const Quote = styled.p`
	text-align: center;
`
const _ParticlesBackground = styled(ParticlesBackground)`
	background-color: #112128;
	position: absolute;
	z-index: -1;	//Lets the quote hover above
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
const Earth = styled.img`
	max-width: 250px;
	margin: 0 auto;
`
class App extends Component {
  render() {
    return (
		<Container>
			<Header>
				<_ParticlesBackground />
				<Navbar>
					<p>Gabe West</p>
					<List>
						<li><a href="#">About</a></li>
						<li><a href="#">Projects</a></li>
						<li><a href="#">Contact</a></li>
					</List>
				</Navbar>
				<Quote>
					Imagination is more important the knowledge
					<br/> For knowledge is <Underline>limited,</Underline>
				</Quote>	
				<Earth src="/assets/images/world.png" />
			</Header>
			<About />
			<Projects />
		</Container>
    )
  }
}

export default App
