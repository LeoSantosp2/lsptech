import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { MdComputer } from 'react-icons/md'

import Header from '../../../components/Header'
import Loading from '../../../components/Loading'

import { Container } from './styled'

import axios from "../../../services/axios";

export default function DedicatedServer(){
    const [premium, setPremium] = useState(0)
    const [platinum, setPlatinum] = useState(0)
    const [diamond, setDiamond] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(() =>{
        async function getData(){
            setIsLoading(true)

            const response = await axios.get('/preco')

            setPremium(response.data[8].preco)
            setPlatinum(response.data[9].preco)
            setDiamond(response.data[10].preco)

            setIsLoading(false)
        }

        getData()
    }, [])

    return(
        <Container>

            <Loading isLoading={isLoading} />

            <div className="dedicated-server">
                    
                <div className="title">

                    <h1>Servidores Dedicados</h1>

                </div>


                <div className="plans">

                    <div className="plan">

                        <MdComputer size={48} />

                        <h3>Premium</h3>

                        <ul>

                            <li>Inter Zeon 2 vCPU 2.4GHz</li>
                            <li>4 GB de Memória RAM DDR4</li>
                            <li>256 GB de Armazenamento SSD</li>
                            <li>1 IP Dedicado</li>
                            <li>OS Linux</li>

                        </ul>

                        <h3>R$ { premium } /Mês</h3>

                        <button onClick={() => navigate('/contratar/premium')}>Contratar</button>

                    </div>

                    <div className="plan">

                        <MdComputer size={48} />

                        <h3>Platinum</h3>

                        <ul>

                            <li>Inter Zeon 4 vCPU 2.4GHz</li>
                            <li>8 GB de Memória RAM DDR4</li>
                            <li>500 GB de Armazenamento SSD</li>
                            <li>2 IP Dedicado</li>
                            <li>OS Linux</li>

                        </ul>

                        <h3>R$ { platinum } /Mês</h3>

                        <button onClick={() => navigate('/contratar/platinum')}>Contratar</button>

                    </div>

                    <div className="plan">

                        <MdComputer size={48} />

                        <h3>Diamond</h3>

                        <ul>
                            
                            <li>Inter Zeon 8 vCPU 2.4GHz</li>
                            <li>16 GB de Memória RAM DDR4</li>
                            <li>1 TB de Armazenamento SSD</li>
                            <li>3 IP Dedicado</li>
                            <li>OS Linux</li>

                        </ul>

                        <h3>R$ { diamond } /Mês</h3>

                        <button onClick={() => navigate('/contratar/diamond')}>Contratar</button>

                    </div>

                </div>

            </div>
            
        </Container>
    )
}

export function DedicatedServerPage(){
    return(
        <Container>

            <Header />

            <DedicatedServer />
            
            <div className="expecification">

                <div className="title">

                    <h1>Expecificações</h1>

                </div>

                <table>

                    <thead>

                        <tr>

                            <th></th>
                            <th>IP Dedicado</th>
                            <th>Sub Domínio</th>
                            <th>Contas de Email</th>
                            <th>Memória RAM</th>
                            <th>Armazenamento</th>
                            <th>Processador</th>
                            <th>OS</th>
                            <th>SSL Grátis</th>
                            <th>Painel</th>
                            <th>WordPress</th>

                        </tr>

                    </thead>

                    <tbody>
                        
                        <tr>

                            <th>Premium</th>

                            <td>1</td>
                            <td>Ilimitado</td>
                            <td>Ilimitado</td>
                            <td>4 GB DDR4</td>
                            <td>256 GB SSD</td>
                            <td>Intel Zeon 2 vCPU 2.4GHz</td>
                            <td>Linux</td>
                            <td>Sim</td>
                            <td>CPanel</td>
                            <td>Sim</td>

                        </tr>

                        <tr>

                            <th>Platimun</th>

                            <td>2</td>
                            <td>Ilimitado</td>
                            <td>Ilimitado</td>
                            <td>8 GB DDR4</td>
                            <td>500 GB SSD</td>
                            <td>Intel Zeon 4 vCPU 2.4GHz</td>
                            <td>Linux</td>
                            <td>Sim</td>
                            <td>CPanel</td>
                            <td> Sim</td>

                        </tr>

                        <tr>

                            <th>Diamond</th>

                            <td>3</td>
                            <td>Ilimitado</td>
                            <td>Ilimitado</td>
                            <td>16 GB DDR4</td>
                            <td>1 TB SSD</td>
                            <td>Intel Zeon 8 vCPU 2.4GHz</td>
                            <td>Linux</td>
                            <td>Sim</td>
                            <td>CPanel</td>
                            <td>Sim</td>

                        </tr>

                    </tbody>

                </table>

            </div>
            
        </Container>
    )
}