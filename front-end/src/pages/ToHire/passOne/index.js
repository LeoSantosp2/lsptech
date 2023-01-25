import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from '../../../services/axios'

import { Container } from './styled'

import Loading from '../../../components/Loading'

import PassTwo from "../passTwo";

export default function PassOne(){
    const [price, setPrice] = useState(0)
    const [value, setValue] = useState(0)
    const [name, setName] = useState('')
    const [checked, setChecked] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const { id } = useParams()

    const planName = [... name]

    const price1month = price
    const price6month = price * 6
    const price12month = price * 12
    const price48month = price * 48

    for(let i = 0; i < planName.length; i++){
        planName[i] = planName[i][0].toUpperCase() + planName[i].substring(1)
    }

    useEffect(() =>{
        async function getData(){
            setIsLoading(true)

            const response = await axios.get('/preco')

            if(id === 'plano-pequeno'){
                setPrice(response.data[0].preco)
                setName(response.data[0].nome.replace('_', ' ').split(' '))
            }
            else if(id === 'plano-medio'){
                setPrice(response.data[1].preco)
                setName(response.data[1].nome.replace('_', ' ').split(' '))
            }
            else if(id === 'plano-grande'){
                setPrice(response.data[2].preco)
                setName(response.data[2].nome.replace('_', ' ').split(' '))
            }
            else if(id === 'plano-pro'){
                setPrice(response.data[3].preco)
                setName(response.data[3].nome.replace('_', ' ').split(' '))
            }
            else if(id === 'vps-standart'){
                setPrice(response.data[4].preco)
                setName(response.data[4].nome.replace('_', ' ').split(' '))
            }
            else if(id === 'vps-otimized'){
                setPrice(response.data[5].preco)
                setName(response.data[5].nome.replace('_', ' ').split(' '))
            }
            else if(id === 'vps-platinum'){
                setPrice(response.data[6].preco)
                setName(response.data[6].nome.replace('_', ' ').split(' '))
            }
            else if(id === 'vps-premium'){
                setPrice(response.data[7].preco)
                setName(response.data[7].nome.replace('_', ' ').split(' '))
            }
            else if(id === 'premium'){
                setPrice(response.data[8].preco)
                setName(response.data[8].nome.replace('_', ' ').split(' '))
            }
            else if(id === 'platinum'){
                setPrice(response.data[9].preco)
                setName(response.data[9].nome.replace('_', ' ').split(' '))
            }
            else if(id === 'diamond'){
                setPrice(response.data[10].preco)
                setName(response.data[10].nome.replace('_', ' ').split(' '))
            }
            
            setIsLoading(false)
        }
        
        getData()
    }, [])

    useEffect(() =>{
        if(checked === 'optionOne'){
            setValue(price1month)
        }
        else if(checked === 'optionTwo'){
            setValue(price6month)
        }
        else if(checked === 'optionThree'){
            setValue(price12month)
        }
        else if(checked === 'optionFour'){
            setValue(price48month)
        }
    })

    return(
        <Container>

            <Loading isLoading={isLoading} />

            <div className="title">

                <h1>1. Escolha um Período</h1>

            </div>

            <div className="plan">

                <p>Plano Escolhido: {planName.join(' ')}</p>

            </div>

            <div className="periods">

                <div className="period">

                    <input
                        type="radio"
                        name="option"
                        id="optionOne"
                        onChange={(e) => setChecked(e.target.id)}
                    />

                    <label htmlFor="optionOne">

                        <div className="checkbox"></div>

                        <p>1 Mês</p>
                        <h1>R$ {price1month.toFixed(2).replace('.', ',')}</h1>
                        <p>BRL/mês</p>

                    </label>

                </div>

                <div className="period">

                    <input
                        type="radio"
                        name="option"
                        id="optionTwo"
                        onChange={(e) => setChecked(e.target.id)}
                    />

                    <label htmlFor="optionTwo">

                        <div className="checkbox"></div>

                        <p>6 Meses</p>
                        <h1>R$ {price6month.toFixed(2).replace('.', ',')}</h1>
                        <p>BRL/mês</p>

                    </label>

                </div>

                <div className="period">

                    <input
                        type="radio"
                        name="option"
                        id="optionThree"
                        onChange={(e) => setChecked(e.target.id)}
                    />

                    <label htmlFor="optionThree">

                        <div className="checkbox"></div>

                        <p>12 Meses</p>
                        <h1>R$ {price12month.toFixed(2).replace('.', ',')}</h1>
                        <p>BRL/mês</p>

                    </label>

                </div>

                <div className="period">

                    <input
                        type="radio"
                        name="option"
                        id="optionFour"
                        onChange={(e) => setChecked(e.target.id)}
                    />

                    <label htmlFor="optionFour">

                        <div className="checkbox"></div>
                        
                        <p>48 Meses</p>
                        <h1>R$ {price48month.toFixed(2).replace('.', ',')}</h1>
                        <p>BRL/mês</p>

                    </label>

                </div>

            </div>

            <PassTwo valueSubTotal={value} />

        </Container>
    )
}