import { useState, useEffect } from "react";
import axios from "axios";

export default function StockData() {
    var [stockPrice, setStockPrice] = useState(0);
    
    useEffect(() => {
        setInterval(() => {
            axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC").then((response) => {
                setStockPrice(response.data.data.pricecurrent)
            })
        }, 1000)
    }, [])
    return (
        <h1>The SBi Stock Price is: {stockPrice}</h1>
    )

}
