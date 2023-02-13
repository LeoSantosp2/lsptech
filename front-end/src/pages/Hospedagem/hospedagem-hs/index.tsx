import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Main } from './styled';

import Header from '../../../components/Header';
import Loading from '../../../components/Loading';

import IconHospedagem from '../../../images/Icons/icon-hospedagem.png';

import axios from '../../../services/axios';

export default function Hospedagem() {
    const [planoPequeno, setPlanoPequeno] = useState(0);
    const [planoMedio, setPlanoMedio] = useState(0);
    const [planoGrande, setPlanoGrande] = useState(0);
    const [planoPro, setPlanoPro] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            setIsLoading(true);

            const response = await axios.get('/preco');

            setPlanoPequeno(response.data[0].preco);
            setPlanoMedio(response.data[1].preco);
            setPlanoGrande(response.data[2].preco);
            setPlanoPro(response.data[3].preco);

            setIsLoading(false);
        }

        getData();
    }, []);

    return (
        <Container>
            <Loading isLoading={isLoading} />

            <div className="hospedagem">
                <div className="title">
                    <h1>Hospedagem de Sites</h1>
                </div>

                <div className="plans">
                    <div className="plan">
                        <img src={IconHospedagem} />

                        <h3>Plano Pequeno</h3>

                        <ul>
                            <li>1 Domínio</li>
                            <li>10 Sub Domínios</li>
                            <li>10 Contas de E-mail</li>
                            <li>30 GB de Armazenamento</li>
                        </ul>

                        <h3>R$ {planoPequeno.toFixed(2)} /mês</h3>

                        <button
                            onClick={() => navigate('/contratar/plano-pequeno')}
                        >
                            Contratar
                        </button>
                    </div>

                    <div className="plan">
                        <img src={IconHospedagem} />

                        <h3>Plano Médio</h3>

                        <ul>
                            <li>2 Domínio</li>
                            <li>20 Sub Domínios</li>
                            <li>20 Contas de E-mail</li>
                            <li>50 GB de Armazenamento</li>
                        </ul>

                        <h3>R$ {planoMedio.toFixed(2)} /mês</h3>

                        <button
                            onClick={() => navigate('/contratar/plano-medio')}
                        >
                            Contratar
                        </button>
                    </div>

                    <div className="plan">
                        <img src={IconHospedagem} />

                        <h3>Plano Grande</h3>

                        <ul>
                            <li>5 Domínio</li>
                            <li>50 Sub Domínios</li>
                            <li>50 Contas de E-mail</li>
                            <li>80 GB de Armazenamento</li>
                        </ul>

                        <h3>R$ {planoGrande.toFixed(2)} /mês</h3>

                        <button
                            onClick={() => navigate('/contratar/plano-grande')}
                        >
                            Contratar
                        </button>
                    </div>

                    <div className="plan">
                        <img src={IconHospedagem} />

                        <h3>Plano Pro</h3>

                        <ul>
                            <li>10 Domínio</li>
                            <li>Sub Domínios Ilimitados</li>
                            <li>Contas de E-mail Ilimitadas</li>
                            <li>100 GB de Armazenamento</li>
                        </ul>

                        <h3>R$ {planoPro.toFixed(2)} /mês</h3>

                        <button
                            onClick={() => navigate('/contratar/plano-pro')}
                        >
                            Contratar
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export function HospedagemSitesPage() {
    return (
        <Container>
            <Header />

            <Hospedagem />

            <Main>
                <div className="expecification">
                    <div className="title">
                        <h1>Expecificações</h1>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Domínio</th>
                                <th>Sub Domínio</th>
                                <th>Contas de Email</th>
                                <th>Armazenamento</th>
                                <th>SSL Grátis</th>
                                <th>Painel</th>
                                <th>WordPress</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>Plano Pequeno</th>

                                <td>1</td>
                                <td>10</td>
                                <td>10</td>
                                <td>30 GB</td>
                                <td>Sim</td>
                                <td>CPanel</td>
                                <td>Sim</td>
                            </tr>

                            <tr>
                                <th>Plano Médio</th>

                                <td>2</td>
                                <td>20</td>
                                <td>20</td>
                                <td>50 GB</td>
                                <td>Sim</td>
                                <td>CPanel</td>
                                <td>Sim</td>
                            </tr>

                            <tr>
                                <th>Plano Grande</th>

                                <td>5</td>
                                <td>50</td>
                                <td>50</td>
                                <td>80 GB</td>
                                <td>Sim</td>
                                <td>CPanel</td>
                                <td>Sim</td>
                            </tr>

                            <tr>
                                <th>Plano Pro</th>

                                <td>10</td>
                                <td>Ilimitado</td>
                                <td>Ilimitado</td>
                                <td>100 GB</td>
                                <td>Sim</td>
                                <td>CPanel</td>
                                <td>Sim</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Main>
        </Container>
    );
}
