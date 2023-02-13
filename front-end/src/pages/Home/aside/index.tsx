import React from 'react';
import { Link } from 'react-router-dom';

import { Aside } from './styled';

import ImgCurriculo from '../../../images/Imgs/img-curriculo.png';

export default function AsideHome() {
    return (
        <Aside>
            <div className="portifolio">
                <div className="title">
                    <h1>Portifólio</h1>
                </div>

                <div className="imgs">
                    <a
                        href="https://leosantosp2.github.io/curriculo/"
                        target="_blank"
                        rel="noreferrer"
                    >
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

            <div className="form" id="contact-us">
                <div className="title">
                    <h1>Fale Conosco</h1>
                </div>

                <form action="/" method="post">
                    <input type="text" name="name" placeholder="Nome" />

                    <input type="email" name="email" placeholder="E-mail" />

                    <textarea
                        placeholder="Digite sua mensagem"
                        required
                    ></textarea>

                    <button>Enviar</button>
                </form>
            </div>
        </Aside>
    );
}
