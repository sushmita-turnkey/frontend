import React from 'react'
import { Container } from 'react-bootstrap'
export default function Header() {
    return (
        <Container className='w-100  pb-3 '>
            <div className="welcome fs-4" >
                <p>WelcomeInvestor,</p> 
                <span>
                    "To a World of Sustainable Wealth Creation"
                </span>
                <p className='pt-3'>A Financial Journey filled with capitalization of enormous wealth opportunity in an economic transition.</p>
            </div>
        </Container>
    )
}
