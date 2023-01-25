import styled, {createGlobalStyle} from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

import * as colors from '../config/colors'

import Background from '../images/Imgs/background.png'

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        font-family: 'Quicksand';
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    html, body, #root{
        width: 100%;
        height: 100%;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
    
    button{
        cursor: pointer;
    }
`

export const ContainerImg = styled.section`
    width: 100%;
    background: #fff url(${Background}) center center no-repeat fixed;
    background-size: cover;
`

export const LoginRegister = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.color04};
`