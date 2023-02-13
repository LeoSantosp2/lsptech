import styled from 'styled-components';

import * as colors from '../../../config/colors';

export const Main = styled.main`
    width: 100%;
    margin-top: 50px;
    color: ${colors.color05};

    .plans {
        width: 100%;
        display: flex;
        align-items: center;
        background-color: ${colors.color04};
    }

    .plan {
        width: 100%;
        margin: 50px 10px;
        border-radius: 10px;
        border: 1px solid ${colors.color05};
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .plan img {
        width: 48px;
        height: 48px;
    }

    .plan h3 {
        margin-bottom: 10px;
    }

    .plan button {
        width: 100px;
        height: 30px;
        margin: 10px 0px;
        border-radius: 4px;
        border: 1px solid ${colors.color05};
        transition: 0.4s;
        outline: none;
        background-color: ${colors.color04};
        color: ${colors.color05};

        :hover {
            background-color: ${colors.color05};
            color: ${colors.color04};
        }
    }

    article {
        width: 100%;
        margin-top: 20px;
        background-color: ${colors.color04};
    }

    .title {
        width: 100%;
        font-size: 20px;
    }

    .title h1 {
        padding-top: 20px;
        padding-left: 10px;
    }

    .article {
        width: 100%;
        font-size: 17px;
        padding: 30px;
        text-align: justify;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
