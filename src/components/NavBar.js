import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

export default function NavBar () {
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href= '#home'>Moodie</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href='#signup'>Sign up</Nav.Link>
                        <Nav.Link href='#login'><Button variant = "success">Log in</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}