import React from 'react'
import './CurrencyInput.css'
const CurrencyInput = ({ clearInput, currencies, currency, amount, onAmountChange, onCurrecyChange }) => {
    return (
        <div className='cur-input'>
            <input type="number"
                value={amount}
                onChange={(e) => onAmountChange(e.target.value)}
                onFocus={(e) => onAmountChange('')}
            />
            <select className='cur-select' value={currency} onChange={(e) => onCurrecyChange(e.target.value)}>
                {currencies.map((currency) => {
                    return <option key={currency} value={currency}>{currency}</option>
                })}
            </select>
        </div>
    )
}

export default CurrencyInput