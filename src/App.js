import React, { Component } from 'react'
import styled, { keyframes } from "styled-components"
import './App.css'

import Header from "./components/Header"
import Projects from "./components/Projects"
import About from "./components/About"

const Container = styled.div`

`

class App extends Component {
  render() {
    return (
		<Container>
			<Header />
			<About />
			<Projects />
		</Container>
    )
  }
}

export default App
