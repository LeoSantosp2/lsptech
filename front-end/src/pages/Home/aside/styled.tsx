import styled from 'styled-components';

import * as colors from '../../../config/colors';

export const Aside = styled.aside`
    width: 100%;
    margin-top: 20px;

    .title {
        width: 100%;
        font-size: 20px;
    }

    .title h1 {
        padding-top: 20px;
        padding-left: 10px;
        padding-bottom: 10px;
        color: ${colors.color05};
    }

    .portifolio {
        background-color: ${colors.color01};
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

    .form {
        width: 100%;
        margin-top: 20px;
        background-color: ${colors.color02};
    }

    .form form {
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input,
    textarea,
    button {
        width: 800px;
        height: 35px;
        margin: 10px 0px;
        padding: 15px;
        border-radius: 4px;
        font-size: 17px;
        border: 0px;
        outline: none;
        background-color: ${colors.color04};

        &:focus {
            border: 1px solid ${colors.color05};
        }
    }

    input::placeholder,
    textarea::placeholder {
        color: ${colors.color05};
    }

    textarea {
        height: 150px;
    }

    button {
        padding: 0px;
        transition: 0.2s;
    }

    button:hover {
        filter: brightness(75%);
    }
`;
