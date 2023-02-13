import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.footer`
    width: 100%;
    margin-top: 50px;
    background-color: ${colors.color03};

    .infos-extras {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .infos-extras > div {
        margin: 20px;
    }

    .infos-extras h1 {
        margin-bottom: 10px;
    }

    .contacts ul li {
        margin: 10px 0px;
    }

    .social-medias a {
        margin: 0px 10px;
        text-decoration: none;
        color: ${colors.color05};
    }

    .about {
        display: flex;
        flex-direction: column;
    }

    .about a {
        margin: 5px 0px;
        color: ${colors.color05};
    }

    .about a:hover {
        text-decoration: underline;
    }

    .infos-empresa {
        width: 100%;
        text-align: center;
        padding-bottom: 20px;
    }

    .infos-empresa p {
        margin: 10px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .infos-empresa p svg {
        margin-right: 1px;
    }
`;
