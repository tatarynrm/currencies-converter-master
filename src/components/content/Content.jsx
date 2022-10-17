import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CurrencyInput from '../currency-input/CurrencyInput'

import './Content.css'
const Content = () => {

    const [amount1, setAmount1] = useState(1)
    const [amount2, setAmount2] = useState(1)
    const [currency1, setCurrency1] = useState('USD')
    const [currency2, setCurrency2] = useState('UAH')
    const [rates, setRates] = useState([])
    console.log(rates);
    useEffect(() => {
        try {
            axios.get('https://api.exchangerate.host/latest?base=UAH')
                .then(response => {
                    setRates(response.data.rates)

                })
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        if (!!rates) {
            handleAmount1Change(1)
        }
    }, [rates])



    function format(number) {
        return number.toFixed(2)
    }
    function handleAmount1Change(amount1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
        setAmount1(amount1)
    }
    function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
        setCurrency1(currency1)
    }
    function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
        setAmount2(amount2)
    }
    function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
        setCurrency2(currency2)
    }

    return (
        <div className='content'>
            <div className="cur-block">
                <CurrencyInput
                    currencies={Object.keys(rates)}
                    amount={amount1}
                    currency={currency1}
                    onAmountChange={handleAmount1Change}
                    onCurrecyChange={handleCurrency1Change}
                />

                <CurrencyInput
                    currencies={Object.keys(rates)}
                    amount={amount2}
                    currency={currency2}
                    onAmountChange={handleAmount2Change}
                    onCurrecyChange={handleCurrency2Change}
                />
            </div>

        </div>
    )
}

export default Content