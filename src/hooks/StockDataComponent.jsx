import { useEffect, useState } from "react";
import axios from "axios";

export default function StockDataComponent() {
    const [sbiStockPrice, setSbiStockPrice] = useState(0);
    const [stockColor, setStockColor] = useState("green");
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI")
                .then((response) => {
                    if (response.data.data.pricecurrent !== sbiStockPrice) {
                        const updatedData = (response.data.data.pricecurrent > sbiStockPrice) ? "green" : "red";
                        setStockColor(updatedData);
                        setSbiStockPrice(response.data.data.pricecurrent);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching SBI stock price:", error);
                });
        }, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [sbiStockPrice]); // Ensure useEffect runs when sbiStockPrice changes or on mount
    
    return (
        <div>
            <h1 style={{color: stockColor}}>SBI Stock Price is { sbiStockPrice }</h1>
        </div>
    );
}
