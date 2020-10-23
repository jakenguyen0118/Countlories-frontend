import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

const NavBar = () => {
	return (
		<>
			<Navbar bg='light' expand='lg' sticky='top'>
				<Navbar.Brand href='/'>Countlories</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/about'>About</Nav.Link>
						<Nav.Link href='/team'>Team</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default NavBar
