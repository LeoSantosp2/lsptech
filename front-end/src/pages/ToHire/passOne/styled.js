import styled from "styled-components";

import * as colors from '../../../config/colors'

export const Container = styled.div`
    .title h1{
        margin-bottom: 25px;
        margin-left: 25px;
    }

    .plan p{
        margin-bottom: 25px;
        margin-left: 35px;
    }

    .periods{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    input#optionOne,
    input#optionTwo,
    input#optionThree,
    input#optionFour{
        display: none;
    }

    input:checked + label{
        transition: 0.4s;
        border: 1px solid ${colors.color02};

        .checkbox{
            transition: 0.4s;
            background-color: ${colors.color01};
        }
    }

    label{
        width: 250px;
        height: 200px;
        border-radius: 4px;
        border: 1px solid ${colors.color01};
        display: block;
        position: relative;
        cursor: pointer;
        text-align: center;
    }

    label p{
        padding: 20px 0px;
    }

    label h1{
        padding: 20px 0px;
    }

    .checkbox{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid ${colors.color01};
        position: absolute;
        top: 5%;
        left: 4%;
        transform: translate(-4%, -5%);
    }
`