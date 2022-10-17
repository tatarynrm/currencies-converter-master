import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const CUR_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
const HeaderCur = () => {
    const [headerCur, setHeaderCur] = useState([])
    const getHeaderCur = async () => {
        const res = await axios(CUR_URL)
        const data = await res.data
        const result = data.filter(cur => cur.ccy !== 'BTC')
        setHeaderCur(result)
    }
    useEffect(() => {
        getHeaderCur()
    }, [])
    return (
        <div className='header-cur'>
            {headerCur?.map(cur => (
                <div key={cur.ccy} className="currency-pairs">
                    <div className="names">
                        <span>{cur.ccy}</span> / <span>{cur.base_ccy}</span>
                    </div>
                    <div className="purchase">
                        BUY: <span>{(+cur.buy).toFixed(4)}</span>
                    </div>
                    <div className="sale">
                        SALE: <span>{(+cur.sale).toFixed(4)}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HeaderCur