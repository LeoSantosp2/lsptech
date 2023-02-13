import React from 'react';

import { ContainerImg } from '../../styles/GlobalStyles';

import { Main } from './styled';

import Header from '../../components/Header';
import Hospedagem from './hospedagem-hs/index';
import Vps from './hospedagem-vps/index';
import DedicatedServer from './hospedagem-ds/index';

import Footer from '../../components/Footer';

export default function HospedagemPage() {
    return (
        <ContainerImg>
            <Header />

            <Main>
                <Hospedagem />

                <Vps />

                <DedicatedServer />
            </Main>

            <Footer />
        </ContainerImg>
    );
}
