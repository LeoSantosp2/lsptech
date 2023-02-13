import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Main } from './styled';

import PassOne from './passOne';

import Logo from '../../images/Logo/Logo.png';

export default function ToHirePage() {
    return (
        <Container>
            <Header>
                <Link to={'/'}>
                    <img src={Logo} />
                </Link>
            </Header>

            <Main>
                <PassOne />
            </Main>
        </Container>
    );
}
