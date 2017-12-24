import React, { Component } from 'react'
import styled, { keyframes } from "styled-components"
import './App.css'

import Header from "./components/Header"
import Projects from "./components/Projects"
import About from "./components/About"
import ParticlesBackground from "./components/shared/ParticlesBackground"

const Container = styled.div`

`
const _ParticlesBackground = styled(ParticlesBackground)`
	background-color: #112128;
	position: fixed;
	z-index: -1;	//Lets the quote hover above
`

class App extends Component {
  render() {
    return (
		<Container>
			<_ParticlesBackground />
			<Header />
			<About />
			<Projects />
		</Container>
    )
  }
}

export default App
