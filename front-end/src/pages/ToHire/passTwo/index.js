import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { RiPaypalLine } from 'react-icons/ri'
import { AiOutlineCreditCard, AiOutlineBarcode, AiFillLock } from 'react-icons/ai'

import { Container, Form } from './styled'

import LogoPix from '../../../images/Logo/Logo-Pix.png'

import axios from '../../../services/axios'

export default function PassTwo({valueSubTotal}){
    const [discountName, setDiscountName] = useState('')
    const [listDiscountName, setListDicountName] = useState([])
    const [listDiscountValue, setListDiscountValue] = useState([])
    const [valueTotal, setValueTotal] = useState(0)
    const [checked, setChecked] = useState()
    const [path, setPath] = useState()
    const [time, setTime] = useState(1)

    const timeout = useRef()

    function handleChangeDiscount(e){
        setDiscountName(e.target.value)
    }

    async function handleSubmitDiscount(e){
        e.preventDefault()

        const response = await axios.get('/desconto')

        const discountsBase = []
        const discountNameBase = []
        const discountValueBase = []

        response.data.forEach((datas) => discountsBase.push(datas))

        if(discountName === ''){
            toast.error('Insira um cupom.')
            return
        }

        let newDiscountName = discountName

        newDiscountName = newDiscountName.trim().toUpperCase().replace(' ', '')

        discountsBase.forEach((discountBase) =>{
            if(discountBase.nome.indexOf(newDiscountName) !== -1){
                discountNameBase.push(discountBase.nome)
                discountValueBase.push(discountBase.valor)
            }
        })

        if(listDiscountName.indexOf(newDiscountName) !== -1){
            toast.error('Cupom já foi aplicado.')
            return
        }

        if(discountNameBase.indexOf(newDiscountName) === -1){
            toast.error('Cupom não existe.')
            return
        }

        const newListDiscoutName = [... listDiscountName]
        const newListDiscountValue = [... listDiscountValue]

        setListDicountName([... newListDiscoutName, newDiscountName])
        setListDiscountValue([... newListDiscountValue, discountValueBase])
        setDiscountName('')
    }

    useEffect(() =>{
        const values = []
        let discount = 0

        if(listDiscountValue.length !== 0){
            listDiscountValue.map((value) =>{
                for(let i = 0; i < value.length; i++){
                    values.push(value[i])
                }
            })

            values.forEach((value) => discount += value)

            setValueTotal(valueSubTotal - discount)
        }
        else{
            setValueTotal(valueSubTotal)
        }
    })

    useEffect(() =>{
        clearTimeout(timeout.current)

        timeout.current = setTimeout(() =>{
            setTime((t) => t - 1)
        })

        if(checked === 'payment-option-one'){
            setPath('credit-card')
        }
        else if(checked === 'payment-option-two'){
            setPath('pix')
        }
    }, [time])

    return(
        <Container>

            <div className="title">

                <h1>2. Escolha uma Forma de Pagamento</h1>

            </div>

            <div className="payment">

                <div className="payment-methods">
                    
                    <div className="payment-method">

                        <input
                            type="radio"
                            name="payment-option"
                            id="payment-option-one"
                            onChange={(e) => setChecked(e.target.id)}
                        />

                        <label htmlFor="payment-option-one">
                            
                            <div className="checkbox-payment"></div>
                            <p>Cartão de Crédito</p>
                            <AiOutlineCreditCard size={30} />

                        </label>

                    </div>

                    <div className="payment-method">

                        <input
                            type="radio"
                            name="payment-option"
                            id="payment-option-two"
                            onChange={(e) => setChecked(e.target.id)}
                        />

                        <label htmlFor="payment-option-two">

                            <div className="checkbox-payment"></div>
                            <p>Pix</p>
                            <img src={LogoPix} />

                        </label>

                    </div>

                    <div className="payment-method">

                        <input
                            type="radio"
                            name="payment-option"
                            id="payment-option-three"
                            onChange={(e) => setChecked(e.target.id)}
                        />

                        <label htmlFor="payment-option-three">

                            <div className="checkbox-payment"></div>
                            <p>Paypal</p>
                            <RiPaypalLine size={30} /> 

                        </label>

                    </div>

                    <div className="payment-method">

                        <input
                            type="radio"
                            name="payment-option"
                            id="payment-option-four"
                            onChange={(e) => setChecked(e.target.id)}
                        />

                        <label htmlFor="payment-option-four">

                            <div className="checkbox-payment"></div>
                            <p>Boleto Bancário</p>
                            <AiOutlineBarcode size={30} />

                        </label>

                    </div>

                </div>

                <div className="infos">

                    <div className="subtotal">

                        <p><strong>SubTotal</strong></p>
                        <p>R$ {valueSubTotal.toFixed(2)}</p>

                    </div>

                    <div className="discount">

                        <div className="discount-name">

                            <p><strong>Descontos</strong></p>

                            <ul>

                                {listDiscountName.map((list) =>(
                                    <li key={list}>{list}</li>
                                ))}

                            </ul>

                        </div>

                        <div className="discount-value">

                            <p><strong>Valor</strong></p>

                            <ul>

                                {listDiscountValue.map((list) =>(
                                    <li key={list}>{list}</li>
                                ))}

                            </ul>

                        </div>

                    </div>

                    <div className="total">

                        <p><strong>Total</strong></p>
                        <p>R$ {valueTotal.toFixed(2)}</p>

                    </div>

                    <div className="discount-coupon">

                        <Form onSubmit={handleSubmitDiscount}>
                            
                            <input
                                type="text"
                                value={discountName}
                                onChange={handleChangeDiscount}
                                id="teste"
                                placeholder="Cupom de Desconto"
                            />

                            <button type="submit">Aplicar Cupom</button>

                        </Form>

                    </div>

                    <div className="payment-security">

                        <div className="btn">

                            <Link to={`/payment/${path}`}>
                                <button>Pagamento Seguro</button>
                            </Link>

                            <p><AiFillLock size={20} /> Os pagamentos são seguros</p>

                        </div>

                    </div>

                </div>

            </div>

        </Container>
    )
}