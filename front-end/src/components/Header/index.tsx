import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Header } from './styled';

import Logo from '../../images/Logo/Logo.png';

import * as actions from '../../store/modules/auth/actions';

export default function HeaderComponent() {
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

    const dispatch = useDispatch();

    function handleLogout(e: { preventDefault: () => void }) {
        e.preventDefault();

        dispatch(actions.loginFailure());

        toast.success('Usuário deslogado com sucesso.');
    }

    return (
        <Header>
            <div className="logo">
                <Link to={'/'}>
                    <img src={Logo} />
                </Link>
            </div>

            <div className="log-cad">
                {isLoggedIn ? (
                    <Link to="/logout" onClick={handleLogout}>
                        Sair
                    </Link>
                ) : (
                    <Link to={'/login'}>Login</Link>
                )}

                {isLoggedIn ? (
                    <Link to="/">Painel</Link>
                ) : (
                    <Link to={'/cadastro'}>Cadastre-se</Link>
                )}
            </div>
        </Header>
    );
}
