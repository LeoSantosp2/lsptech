import React from "react";
import { Link } from "react-router-dom";

import {ContainerImg} from '../../styles/GlobalStyles'

import Header from '../../components/Header'

import { Main, Aside, Form } from "./styled";

import Footer from '../../components/Footer'

import ImgCurriculo from '../../images/Imgs/img-curriculo.png'

import ProfessionalLeonardo from '../../images/Professionals/professional-leonardo.jpg'

export default function CreateYourWebsitePage(){
    return(
        <ContainerImg>

            <Header />

            <Main>

                <div className="about">

                    <div className="title">

                        <h1>Um Pouco Sobre</h1>

                    </div>

                    <div className="text">

                        <p>Temos profissionais com experiências em programação (HTML/CSS, JS, Python e SQL) e, em WordPress.</p>

                    </div>

                </div>

                <div className="portifolio">

                    <div className="title">

                        <h1>Portifólio</h1>

                    </div>

                    <div className="imgs">

                        <a href="https://leosantosp2.github.io/curriculo/" target="_blank">
                            <img src={ImgCurriculo} crossOrigin="anonymous" />
                        </a>

                        <Link to={'/'}>
                            <img src={ImgCurriculo} crossOrigin="anonymous" />
                        </Link>

                        <Link to={'/'}>
                            <img src={ImgCurriculo} crossOrigin="anonymous" />
                        </Link>

                        <Link to={'/'}>
                            <img src={ImgCurriculo} crossOrigin="anonymous" />
                        </Link>

                        <Link to={'/'}>
                            <img src={ImgCurriculo} crossOrigin="anonymous" />
                        </Link>

                        <Link to={'/'}>
                            <img src={ImgCurriculo} crossOrigin="anonymous" />
                        </Link>

                    </div>

                </div>

            </Main>

            <Aside>

                <div className="Professionals">

                    <div className="title">

                        <h1>Profissionais</h1>

                    </div>

                    <div className="infos-professionals">

                        <div>

                            <img src={ProfessionalLeonardo} />

                            <h3>Leonardo S. de Paulo</h3>

                            <p>Profissional com experiência em programação. (HTML/CSS, JS, Python e SQL)</p>

                        </div>

                        <div>

                            <img src={ProfessionalLeonardo} />

                            <h3>Leonardo S. de Paulo</h3>

                            <p>Profissional com experiência em programação. (HTML/CSS, JS, Python e SQL)</p>

                        </div>

                        <div>

                            <img src={ProfessionalLeonardo} />

                            <h3>Leonardo S. de Paulo</h3>

                            <p>Profissional com experiência em programação. (HTML/CSS, JS, Python e SQL)</p>

                        </div>

                        <div>

                            <img src={ProfessionalLeonardo} />

                            <h3>Leonardo S. de Paulo</h3>

                            <p>Profissional com experiência em programação. (HTML/CSS, JS, Python e SQL)</p>

                        </div>

                        <div>

                            <img src={ProfessionalLeonardo} />

                            <h3>Leonardo S. de Paulo</h3>

                            <p>Profissional com experiência em programação. (HTML/CSS, JS, Python e SQL)</p>

                        </div>

                        <div>

                            <img src={ProfessionalLeonardo} />

                            <h3>Leonardo S. de Paulo</h3>

                            <p>Profissional com experiência em programação. (HTML/CSS, JS, Python e SQL)</p>

                        </div>

                    </div>

                </div>

                <div className="contact">

                    <div className="info-contact">

                        <div className="title">

                            <h1>Informações de Contato</h1>

                        </div>

                        <div className="infos">

                            <ul>

                                <li>Comercial: (00) 00000-0000</li>
                                <li>E-mail: comercial@lsptech.com.br</li>
                                <li>Suporte: (00) 00000-0000</li>
                                <li>E-mail: suporte@lsptech.com.br</li>

                            </ul>

                        </div>

                    </div>

                    <div className="contact-us">

                        <div className="title">

                            <h1>Fale Conosco</h1>

                        </div>

                        <Form>

                            <input type="text" name="name" placeholder="Nome" />
                            <input type="email" name="email" placeholder="E-mail" />

                            <textarea placeholder="Digite Sua Mensagem"></textarea>

                            <button>Enviar</button>

                        </Form>

                    </div>

                </div>

            </Aside>

            <Footer />

        </ContainerImg>
    )
}