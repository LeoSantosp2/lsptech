import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from 'react-icons/ai'
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify'

import { Header } from "./styled";

import Logo from '../../../images/Logo/Logo.png'

import * as actions from '../../../store/modules/auth/actions'

export default function HeaderHome(){
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    const dispatch = useDispatch()

    function handleLogout(e){
        e.preventDefault()

        dispatch(actions.loginFailure())

        toast.success('Usuário deslogado com sucesso.')
    }

    return(
        <Header>

            <div className="header-box">

                <div className="logo">

                    <Link to={'/'}>

                        <img
                            src={Logo}
                            alt="Logo da Empresa"
                            crossOrigin="anonymous"
                        />

                    </Link>

                </div>

                <div className="webmail">

                    <Link to={'/'} target="_blank" >

                        <AiOutlineMail />

                        Webmail

                    </Link>

                </div>

                <div className="log-cad">

                    {isLoggedIn ? <Link to={'/logout'} onClick={handleLogout}>Sair</Link> : <Link to={'/login'}>Login</Link>}

                    {isLoggedIn ? <Link>Painel</Link> : <Link to={'/cadastro'}>Cadastre-se</Link>}

                </div>

            </div>

            <nav>

                <Link to={'/hospedagens'}>Hospedagem</Link>|
                <Link to={'/crie-seu-site'}>Crie Seu Site</Link>|
                <a href="#about-us">Sobre Nós</a>|
                <a href="#contact-us">Fale Conosco</a>

            </nav>

        </Header>
    )
}
