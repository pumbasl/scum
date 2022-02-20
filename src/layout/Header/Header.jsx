import React from 'react';
import { css } from '@emotion/react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const LoginButton = () => {
    const cssButton = css`
        padding: 10px;
        color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #7668CB;
        outline: none;
        border: 0;

        &:hover{
            transition-duration: .5s;
            background-color: purple;
        }
    `;

    const handleClick = () => {
        console.log('lox');
    };

    return(
        <button 
            css={cssButton}
            onClick={handleClick}
        >
            SING IN WITH WAX
        </button>
    );
};

export default function Header(){
    return(
        <div
            css={ css`flex: 0 0 auto;` } 
        >
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand>
                        <h1 css={ css`
                            -webkit-text-stroke-width: 1px;
                            -webkit-text-stroke-color: black;
                        ` }>
                            GET WAX
                        </h1>
                    </Navbar.Brand>

                    <Nav className="mr-auto">
                        <Nav.Link css={ css`font-size: 30px;` } className="me-5">Home</Nav.Link>
                        <Nav.Link css={ css`font-size: 30px;` } className="me-5">Stake</Nav.Link>
                        <Nav.Link css={ css`font-size: 30px;` } className="me-5">Contacts</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link as={LoginButton} href="#home">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}