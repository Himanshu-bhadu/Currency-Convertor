import React,{useId}from "react";

function Inputbox({
    label,
    classname="",
    amount,
    onamountchange,
    oncurrencychange,
    currencyoption=[],
    selectcurrency="usd",
    amountdisable=false, 
    currencydisable=true,
}){
    const amountinp=useId();
    return(
        <div className={`bg-white p-3 rounded-lg flex text-sm ${classname}`}>
            <div className="w-1/2">
                <label htmlFor={amountinp}
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input 
                    id={amountinp}
                    type="number"
                    min={0}
                    className="outline-none w-full bg-transparent py-2"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountdisable}
                    onChange={(e)=>onamountchange && onamountchange(Number(e.target.value))}
                />
            </div>
            <div className="justify-center text-right flex-wrap w-1/2">
                <p className="text-black/60">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-slate-100 cursor-pointer outline-none" value={selectcurrency}
                onChange={(e)=>oncurrencychange && oncurrencychange(e.target.value)}
                disabled={currencydisable}>
                    {currencyoption.map((currency)=>(
                        <option  key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Inputbox;