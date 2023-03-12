import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Main = styled.main`
    width: 100%;
    margin-top: 50px;
    background-color: ${colors.color04};

    .title {
        width: 100%;
        padding-top: 20px;
        padding-left: 20px;
    }

    .about {
        padding-top: 30px;
    }

    .text {
        width: 100%;
        padding: 10px;
    }

    .imgs {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .imgs img {
        width: 400px;
        height: 175px;
        margin: 15px;
        border-radius: 4px;
    }
`;

export const Aside = styled.aside`
    width: 100%;
    margin-top: 30px;
    background-color: ${colors.color02};

    .title {
        width: 100%;
        margin-bottom: 20px;
        padding-top: 20px;
        padding-left: 20px;
    }

    .title h1 {
        font-size: 2em;
    }

    .infos-professionals {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .infos-professionals > div {
        width: 400px;
        height: 400px;
        text-align: center;

        img {
            width: 300px;
            height: 300px;
            border-radius: 4px;
        }
    }

    .contact {
        width: 100%;
        display: flex;
    }

    .contact > div {
        width: 100%;
    }

    .info-contact {
        position: relative;
        text-align: center;
    }

    .infos {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .info-contact ul li {
        margin: 10px 0px;
    }

    .contact-us .title {
        text-align: center;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 400px;
        height: 30px;
        margin: 15px 0px;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid ${colors.color01};
        outline: none;
        background-color: ${colors.color04};

        ::placeholder {
            color: ${colors.color05};
        }
    }

    textarea {
        width: 400px;
        height: 100px;
        margin: 15px 0px;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid ${colors.color01};
        outline: none;
        background-color: ${colors.color04};

        ::placeholder {
            color: ${colors.color05};
        }
    }

    button {
        width: 80px;
        height: 30px;
        margin-bottom: 15px;
        border-radius: 4px;
        transition: 0.2s;
        border: 1px solid ${colors.color01};
        background-color: ${colors.color04};
    }

    button:hover {
        filter: brightness(75%);
    }
`;
