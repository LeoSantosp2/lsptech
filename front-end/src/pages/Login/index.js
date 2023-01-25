import React, { useState } from 'react'
import {BsFacebook, BsGoogle} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { isEmail } from 'validator'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

import {LoginRegister} from '../../styles/GlobalStyles'

import { Container, Form } from './styled'

import Logo from '../../images/Logo/Logo.png'

import * as actions from '../../store/modules/auth/actions'

export default function LoginPage(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    function handleSubmit(e){
        e.preventDefault()

        let formError = false

        if(!isEmail(email)){
            formError = true

            toast.error('E-mail Inválido.')
        }

        if(senha.length < 8 || senha.length > 24){
            formError = true

            toast.error('Senha Inválida.')
        }

        if(formError) return

        if(isLoggedIn) {
            toast.error('Login já foi efetuado.')

            return
        }

        dispatch(actions.loginRequest({ email, senha }))

        navigate('/')
    }

    return(

        <LoginRegister>

            <Container>
                
                <div className="left-side">

                    <div className="title">

                        <h1>Login</h1>

                    </div>

                    <Form onSubmit={handleSubmit}>

                        <input
                            type="email"
                            value={email}
                            placeholder="E-mail"
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            value={senha}
                            placeholder="Senha"
                            onChange={e => setSenha(e.target.value)}
                        />

                        <button type='submit'>Acessar</button>

                    </Form>

                    <Link>Esqueceu sua senha?</Link>

                    <div className="logo-medias">

                        <p>Acesse com</p>

                        <Link><BsFacebook /></Link>
                        <Link><BsGoogle /></Link>

                    </div>

                </div>

                <div className="right-side">

                    <img src={Logo} />
                    
                </div>

            </Container>

        </LoginRegister>

    )
}