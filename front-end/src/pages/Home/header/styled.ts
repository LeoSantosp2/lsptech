import styled from 'styled-components';

import * as colors from '../../../config/colors';

export const Header = styled.header`
    width: 100%;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    background-color: ${colors.color04};

    a {
        color: ${colors.color01};
    }

    a:hover {
        transition: 0.4s;
        color: ${colors.color02};
    }

    .header-box {
        width: 100%;
        height: 120px;
        display: flex;
    }

    .logo,
    .webmail,
    .log-cad {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .webmail {
        justify-content: center;
    }

    .log-cad {
        justify-content: right;
    }

    .logo a {
        width: 175px;
        height: 30px;
        margin-left: 20px;
    }

    .logo a img {
        width: 175px;
        height: 30px;
    }

    .webmail a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .webmail a svg {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    .log-cad a {
        margin-right: 20px;
    }

    nav {
        width: 100%;
        height: 30px;
        text-align: center;
        background-color: ${colors.color04};
    }

    nav a {
        margin: 0px 10px;
        font-size: 17px;
    }
`;
