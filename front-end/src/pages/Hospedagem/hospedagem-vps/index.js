import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineCloudUpload } from 'react-icons/ai'

import Header from '../../../components/Header'
import Loading from '../../../components/Loading'

import { Container } from './styled'

import axios from "../../../services/axios";

export default function Vps(){
    const [vpsStandart, setVpsStandart] = useState(0)
    const [vpsOtimized, setVpsOtimized] = useState(0)
    const [vpsPlatinum, setVpsPlatinum] = useState(0)
    const [vpsPremium, setVpsPremium] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    
    const navigate = useNavigate()
    
    useEffect(() =>{
        async function getData(){
            setIsLoading(true)

            const response = await axios.get('/preco')

            setVpsStandart(response.data[4].preco)
            setVpsOtimized(response.data[5].preco)
            setVpsPlatinum(response.data[6].preco)
            setVpsPremium(response.data[7].preco)

            setIsLoading(false)
        }

        getData()
    }, [])
    
    return(
        <Container>

            <Loading isLoading={isLoading} />
            
            <div className="vps">

                <div className="title">

                    <h1>VPS</h1>

                </div>

                <div className="plans">

                    <div className="plan">

                        <AiOutlineCloudUpload size={48} />

                        <h3>VPS Standart</h3>

                        <ul>

                            <li>1 vCPU</li>
                            <li>2 GB de Memória RAM DDR4</li>
                            <li>20 GB de Armazenamento</li>
                            <li>IP Dedicado</li>
                            <li>100% Acesso Root</li>
                            <li>OS Linux</li>

                        </ul>

                        <h3>R$ {vpsStandart} /Mês</h3>

                        <button onClick={() => navigate('/contratar/vps-standart')}>Contratar</button>

                    </div>

                    <div className="plan">

                        <AiOutlineCloudUpload size={48} />

                        <h3>VPS Otimized</h3>

                        <ul>

                            <li>2 vCPU</li>
                            <li>4 GB de Memória RAM DDR4</li>
                            <li>50 GB de Armazenamento</li>
                            <li>IP Dedicado</li>
                            <li>100% Acesso Root</li>
                            <li>OS Linux</li>

                        </ul>

                        <h3>R$ {vpsOtimized} /Mês</h3>

                        <button onClick={() => navigate('/contratar/vps-otimized')}>Contratar</button>

                    </div>

                    <div className="plan">

                        <AiOutlineCloudUpload size={48} />

                        <h3>VPS Platinum</h3>

                        <ul>

                            <li>3 vCPU</li>
                            <li>8 GB de Memória RAM DDR4</li>
                            <li>100 GB de Armazenamento</li>
                            <li>IP Dedicado</li>
                            <li>100% Acesso Root</li>
                            <li>OS Linux</li>

                        </ul>

                        <h3>R$ {vpsPlatinum} /Mês</h3>

                        <button onClick={() => navigate('/contratar/vps-platinum')}>Contratar</button>

                    </div>

                    <div className="plan">

                        <AiOutlineCloudUpload size={48} />

                        <h3>VPS Premium</h3>

                        <ul>

                            <li>4 vCPU</li>
                            <li>16 GB de Memória RAM DDR4</li>
                            <li>256 GB de Armazenamento</li>
                            <li>IP Dedicado</li>
                            <li>100% Acesso Root</li>
                            <li>OS Linux</li>

                        </ul>

                        <h3>R$ {vpsPremium} /Mês</h3>

                        <button onClick={() => navigate('/contratar/vps-premium')}>Contratar</button>

                    </div>

                </div>

            </div>
            
        </Container>
    )
}

export function VpsPage(){
    return(
        <Container>

            <Header />

            <Vps />

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
                            <th>Memória RAM</th>
                            <th>Armazenamento</th>
                            <th>vCPU</th>
                            <th>OS</th>
                            <th>SSL Grátis</th>
                            <th>Painel</th>
                            <th>WordPress</th>

                        </tr>

                    </thead>

                    <tbody>
                        
                        <tr>

                            <th>VPS Standart</th>

                            <td>1</td>
                            <td>Ilimitado</td>
                            <td>Ilimitado</td>
                            <td>2 GB DDR4</td>
                            <td>20 GB SSD</td>
                            <td>1</td>
                            <td>Linux</td>
                            <td>Sim</td>
                            <td>CPanel</td>
                            <td>Sim</td>

                        </tr>

                        <tr>

                            <th>VPS Otimized</th>

                            <td>1</td>
                            <td>Ilimitado</td>
                            <td>Ilimitado</td>
                            <td>4 GB DDR4</td>
                            <td>50 GB SSD</td>
                            <td>2</td>
                            <td>Linux</td>
                            <td>Sim</td>
                            <td>CPanel</td>
                            <td> Sim</td>

                        </tr>

                        <tr>

                            <th>VPS Platimun</th>

                            <td>2</td>
                            <td>Ilimitado</td>
                            <td>Ilimitado</td>
                            <td>8 GB DDR4</td>
                            <td>100 GB SSD</td>
                            <td>3</td>
                            <td>Linux</td>
                            <td>Sim</td>
                            <td>CPanel</td>
                            <td>Sim</td>

                        </tr>

                        <tr>

                            <th>VPS Premium</th>

                            <td>3</td>
                            <td>Ilimitado</td>
                            <td>Ilimitado</td>
                            <td>16 GB DDR4</td>
                            <td>256 GB SSD</td>
                            <td>4</td>
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