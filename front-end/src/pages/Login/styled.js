import styled from "styled-components";

import * as colors from '../../config/colors'

export const Container = styled.section`
    width: 800px;
    border-radius: 4px;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);
    display: flex;
    background-color: ${colors.color04};
    animation-name: animacao;
    animation-duration: 1.5s;

    @keyframes animacao{
        from {margin-top: -100%;}
        to {margin-top: 0%;}
    }

    .left-side{
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title{
        width: 100%;
        padding: 10px 0px;
        font-size: 25px;
        text-align: center;
    }

    a{
        font-size: 15px;
        text-decoration: underline;
        color: ${colors.color05};
    }

    .logo-medias{
        width: 100%;
        padding: 10px 0px;
        text-align: center;
    }

    .logo-medias p{
        margin: 20px 0px 10px;
    }

    .logo-medias a{
        margin: 0px 10px;
        color: ${colors.color05};
    }

    .logo-medias a svg{
        width: 20px;
        height: 20px;
    }

    .right-side{
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right-side img{
        width: 175px;
        height: 30px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    input{
        width: 400px;
        height: 30px;
        margin: 20px 0px;
        padding: 10px;
        border: 1px solid ${colors.color02};
        border-radius: 4px;
        outline: none;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
        transition: 0.3s;
        background-color: ${colors.color04};

        &::placeholder{
            color: ${colors.color05};
        }

        &:focus{
            background-color: ${colors.color02};
            color: ${colors.color04};
            &::placeholder{
                color: ${colors.color04};
            }
        }
    }

    input:hover{
        background-color: ${colors.color02};
        color: ${colors.color04};

        &::placeholder{
            color: ${colors.color04};
        }
    }

    button{
        width: 80px;
        height: 30px;
        margin-bottom: 15px;
        border: 1px solid ${colors.color02};
        border-radius: 4px;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
        transition: 0.3s;
        background-color: ${colors.color04};
    }

    button:hover{
        background-color: ${colors.color02};
        color: ${colors.color04};
    }
`