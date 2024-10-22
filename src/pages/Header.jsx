import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <i className="fa-solid fa-school fa-2xl" size="2xl" style={{ color: "#63E6BE", }} />
                        {' '}
                        Student-Mgt
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header