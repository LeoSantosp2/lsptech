import styled from "styled-components";

import * as colors from '../../config/colors'

export const Container = styled.section`
    width: 800px;
    height: 400px;
    border-radius: 4px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    animation-name: animacao;
    animation-duration: 1.5s;

    @keyframes animacao{
        from {margin-left: -200%;}
        to {margin-top: 0%;}
    }

    .left-side{
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    .title{
        text-align: center;
    }

    .title h1{
        margin: 10px 0px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    input{
        width: 200px;
        height: 30px;
        margin: 10px;
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

        input:hover{
            background-color: ${colors.color02};
            color: ${colors.color04};

            &::placeholder{
                color: ${colors.color04};
            }
        }
    }

    button{
        width: 80px;
        height: 30px;
        margin: 10px 0px;
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