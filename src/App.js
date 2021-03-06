import React, { Component } from 'react'
import styled, { keyframes } from "styled-components"
import './App.css'

import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const Container = styled.div`

`

class App extends Component {
  render() {
    return (
		<Container>
			<Navbar />
			<Header />
			<About />
			<Projects />
			<Contact />
		</Container>
    )
  }
}

export default App
