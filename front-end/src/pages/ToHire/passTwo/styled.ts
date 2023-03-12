import styled from 'styled-components';

import * as colors from '../../../config/colors';

export const Container = styled.div`
    margin-top: 50px;

    .title h1 {
        margin-bottom: 25px;
        margin-left: 25px;
    }

    .payment {
        width: 100%;
        display: flex;
    }

    .payment > div {
        width: 100%;
    }

    .payment-methods {
        margin-left: 10px;
    }

    .payment-method + .payment-method {
        margin: 10px 0px;
        border-top: 1px solid ${colors.color01};
    }

    .payment-method {
        width: 400px;
        height: 50px;
    }

    input#payment-option-one,
    input#payment-option-two,
    input#payment-option-three,
    input#payment-option-four {
        display: none;
    }

    input:checked + label {
        border: 0px;
    }

    input:checked + label .checkbox-payment {
        transition: 0.4s;
        background-color: ${colors.color01};
    }

    .payment-method > label {
        width: 400px;
        height: 60px;
        padding: 0px 20px;
        border: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .checkbox-payment {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid ${colors.color01};
    }

    .payment-method > label > img {
        width: 30px;
        height: 30px;
    }

    .infos {
        padding-right: 10px;
    }

    .infos > div + div {
        border-top: 1px solid ${colors.color01};
    }

    .subtotal {
        padding: 0px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .subtotal p {
        margin-bottom: 20px;
    }

    .discount {
        padding: 0px 10px;
        display: flex;
        justify-content: space-between;
    }

    .discount p,
    .discount ul li {
        margin: 20px 0px;
        text-align: center;
    }

    .discount-name ul li {
        text-align: left;
    }

    .total {
        padding: 0px 10px;
        display: flex;
        justify-content: space-between;
    }

    .total p {
        margin: 20px 0px;
    }

    .discount-coupon {
        padding: 20px 0px;
        display: flex;
    }

    .discount-coupon input {
        width: 170px;
        height: 25px;
        padding: 10px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border: 1px solid ${colors.color01};
        outline: none;
        background-color: ${colors.color04};

        ::placeholder {
            color: ${colors.color05};
        }
    }

    .discount-coupon button {
        width: 100px;
        height: 25px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        border: 0px;
        outline: none;
        background-color: ${colors.color01};
        color: ${colors.color04};
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn button {
        width: 300px;
        height: 40px;
        margin: 20px;
        border-radius: 4px;
        border: 0px;
        transition: 0.4s;
        background-color: ${colors.color01};
        color: ${colors.color04};
    }

    .btn button:hover {
        filter: brightness(85%);
    }

    .btn p {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Form = styled.form``;
