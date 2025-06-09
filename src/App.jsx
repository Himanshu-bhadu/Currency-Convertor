import { useState } from 'react';
import Inputbox from './components/Inputbox';
import usecurrencyinfo from './hooks/usecurrencyinfo'
import './App.css'

function App() {

  const [amount, setamount] = useState(0);
  const [from,setfrom]=useState("usd");
  const [to,setto]=useState("inr");
  const[ans,setans]=useState(0);

  const currencyinfo=usecurrencyinfo(from);

  const data=Object.keys(currencyinfo);

  const swap=()=>{
    setfrom(to);
    setto(from);
    setans(amount);
    setamount(ans);
  }

  const convert=()=>{
    setans(amount*currencyinfo[to])
  }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage:'url(https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600)'}}>

        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border-gray-400 rounded-lg p-5 backdrop-blur-sm bg-yellow-200'>
              <form onSubmit={(e)=>{
                e.preventDefault();
                convert();
              }}>
                <div className='w-full mb-1'>
                  <Inputbox
                  label="from" 
                  amount={amount}
                  currencyoption={data}
                  oncurrencychange={(currency)=>(setfrom(currency))}
                  selectcurrency={from}
                  onamountchange={(amount)=>setamount(amount)}
                  amountdisable={false}
                  currencydisable={false}
                  />
                </div>  
                <div className='relative w-full h-0.5'>
                <button 
                type='button'
                className='absolute left-1/3 translate-x-10 -translate-y-1/2 border-2 border-white rounded-md 
                bg-blue-600 text-white px-2 py-0.5 '
                onClick={swap}>
                  swap
                </button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <Inputbox
                  label="to"
                  amount={ans}
                  currencyoption={data}
                  oncurrencychange={(currency)=>(setto(currency))}
                  selectcurrency={to}
                  amountdisable={true}
                  currencydisable={false}
                />
              </div>
              <button type="submit" className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
              </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
