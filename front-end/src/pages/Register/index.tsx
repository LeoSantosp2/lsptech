import React, { useState } from 'react';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { get } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { LoginRegister } from '../../styles/GlobalStyles';

import { Container, Form } from './styled';

import Logo from '../../images/Logo/Logo.png';

import axios from '../../services/axios';

import Loading from '../../components/Loading';

export default function RegisterPage() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar_senha, setConfirmarSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    function handleChangeTelefone(e: {
        target: { value: React.SetStateAction<string> };
    }) {
        setTelefone(e.target.value);
    }

    async function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();

        let formError = false;

        if (senha !== confirmar_senha) {
            formError = true;

            toast.error('Senhas não são iguais.');
        }

        if (!isEmail(email)) {
            formError = true;

            toast.error('E-mail Inválido.');
        }

        if (formError) return;

        setIsLoading(true);

        try {
            await axios.post('/cadastro', {
                nome,
                sobrenome,
                email,
                telefone,
                senha,
                confirmar_senha,
            });

            toast.success('Conta criada com sucesso.');

            navigate('/login');
        } catch (e) {
            const errors = get(e, 'response.data.errors', []);

            errors.map((error) => toast.error(error));
        }

        setIsLoading(false);
    }

    return (
        <LoginRegister>
            <Container>
                <Loading isLoading={isLoading} />

                <div className="left-side">
                    <div className="title">
                        <h1>Cadastre-se</h1>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Nome"
                        />

                        <input
                            type="text"
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}
                            placeholder="Sobrenome"
                        />

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                        />

                        <input
                            type="number"
                            value={telefone}
                            onChange={handleChangeTelefone}
                            placeholder="Telefone de Contato"
                        />

                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Senha"
                        />

                        <input
                            type="password"
                            value={confirmar_senha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            placeholder="Confirmar Senha"
                        />

                        <button type="submit">Cadastrar</button>
                    </Form>
                </div>

                <div className="right-side">
                    <img src={Logo} />
                </div>
            </Container>
        </LoginRegister>
    );
}
