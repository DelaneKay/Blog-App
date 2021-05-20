import React from 'react'
import { Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'

function Navigation_bar() {
    return (
        <div >
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href='#home'>TechLAB</Navbar.Brand>
                <Nav className='m-auto'>
                    <Nav.Link href='#' >Artificial Intelligence</Nav.Link>
                    <Nav.Link href='#'>Gadgets</Nav.Link>
                    <Nav.Link href='#'>Robotics</Nav.Link>
                    <Nav.Link href='#'>Internet of Things</Nav.Link>
                </Nav>
            </Navbar>
            
        </div>
    )
}

export default Navigation_bar;