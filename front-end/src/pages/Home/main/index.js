import React from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineCloudUpload } from 'react-icons/ai'
import { MdComputer } from 'react-icons/md'

import { Main } from "./styled";

import IconHospedagem from '../../../images/Icons/icon-hospedagem.png'

export default function MainHome(){
    const navigate = useNavigate()

    return(
        <Main>

            <div className="plans">
                
                <div className="plan">

                    <img src={IconHospedagem} />

                    <h3>Hospedagem de Sites</h3>

                    <p>Hospede seu site conosco</p>

                    <button onClick={() => navigate('/hospedagem-sites')}>Ver Planos</button>

                </div>

                <div className="plan">

                    <AiOutlineCloudUpload size={48} />

                    <h3>VPS</h3>

                    <p>VPS da melhor qualidade</p>

                    <button onClick={() => navigate('/vps')}>Ver Planos</button>

                </div>

                <div className="plan">

                    <MdComputer size={48} />

                    <h3>Servidores Dedicados</h3>

                    <p>Servidores dedicados com acesso do cliente</p>

                    <button onClick={() => navigate('/servidores-dedicados')}>Ver Planos</button>

                </div>

            </div>

            <article id="about-us">

                <div className="title">

                    <h1>Sobre Nós</h1>

                </div>

                <div className="article">

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    
                </div>

            </article>

        </Main>
    )
}