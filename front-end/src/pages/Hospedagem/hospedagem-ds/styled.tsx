import styled from 'styled-components';

import * as colors from '../../../config/colors';

export const Container = styled.div`
    width: 100%;

    .dedicated-server {
        width: 100%;
        margin-top: 20px;
        background-color: ${colors.color04};
    }

    .title {
        width: 100%;
        padding-top: 10px;
        padding-left: 10px;
    }

    .plans {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .plan {
        width: 300px;
        margin: 20px;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
        border: 1px solid ${colors.color05};
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .plan ul li {
        margin: 3px 0px;
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
    }

    .plan button:hover {
        background-color: ${colors.color05};
        color: ${colors.color04};
    }

    .expecification {
        width: 100%;
        background-color: ${colors.color04};
    }

    .expecification table {
        padding-bottom: 15px;
    }

    .expecification table tr {
        border: 1px solid ${colors.color05};
        text-align: left;
    }

    .expecification table th {
        padding: 10px;
        text-align: center;
    }

    .expecification table td {
        padding: 10px;
        text-align: center;
    }
`;
