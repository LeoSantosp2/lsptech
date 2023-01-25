import styled from "styled-components"

import * as colors from '../../config/colors'

export const Header = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    background-color: ${colors.color04};

    div{
        width: 100%;
        display: flex;
        align-items: center;
    }

    .logo{
        padding-left: 20px;
    }

    .logo a img{
        width: 175px;
        height: 30px;
    }

    .log-cad{
        padding-right: 20px;
        justify-content: right;
    }

    .log-cad a{
        margin: 0px 10px;
        transition: 0.4s;
        color: ${colors.color01};
    }

    .log-cad a:hover{
        color: ${colors.color02};
    }
`