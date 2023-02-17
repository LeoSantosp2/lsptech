import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { AiOutlineCopyright } from 'react-icons/ai';

import { Container } from './styled';

export default function Footer() {
    return (
        <Container>
            <div className="infos-extras">
                <div className="contacts">
                    <h1>Contatos</h1>

                    <ul>
                        <li>Suporte - (00) 00000-0000</li>
                        <li>Comercial - (00) 00000-0000</li>
                        <li>Financeiro - (00) 00000-0000</li>
                        <li>suporte@lsptech.com.br</li>
                        <li>comercial@lsptech.com.br</li>
                        <li>financeiro@lsptech.com.br</li>
                    </ul>
                </div>

                <div className="address">
                    <h1>Endereço</h1>

                    <ul>
                        <li>Rua Brazil N°200 - Jardim Brazil - São Paulo/SP</li>
                    </ul>
                </div>

                <div className="social-medias">
                    <h1>Redes Sociais</h1>

                    <Link to={'/'}>
                        <BsFacebook size={20} />
                    </Link>
                    <Link to={'/'}>
                        <BsInstagram size={20} />
                    </Link>
                    <Link to={'/'}>
                        <BsLinkedin size={20} />
                    </Link>
                </div>

                <div className="about">
                    <h1>Sobre</h1>

                    <Link to={'/'}>Política de Privacidade</Link>
                    <Link to={'/'}>Política de Cookies</Link>
                    <Link to={'/'}>Trabalhe Conosco</Link>
                </div>
            </div>

            <div className="infos-empresa">
                <p>
                    <AiOutlineCopyright />
                    lsptech - Todos os Diretos
                </p>
                <p>Lsptech LTDA - 00.000.000/0000-00</p>
                <p>Aberto das 08:00hs ás 18:00hs - Seg à Sex</p>
            </div>
        </Container>
    );
}
