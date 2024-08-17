import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('inr')

  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(fromCurrency)

  const options = Object.keys(currencyInfo)

  // const backgroundImage = `https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600`

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap items-center bg-cover bg-slate-950 overflow-hidden">
      <div className="w-1/2">
        <div className="w-full max-w-md mx-auto rounded-lg p-5 backdrop-blur-sm bg-gray-800">
          <form
              onSubmit={(e)=>{
                e.preventDefault()
                convert()
              }}
          >
            <div className="w-full mb-1">
              <InputBox
                label={'From'}
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                currencyOptions={options}
                selectCurrency={fromCurrency}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label={'To'}
                amount={convertedAmount}
                onAmountChange={(amount) => setConvertedAmount(amount)}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                currencyOptions={options}
                selectCurrency={toCurrency}
                amountDisabled={true}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              {fromCurrency.toUpperCase()} convert {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      <div className='w-1/2 h-full flex items-center justify-center'>
            <div className='w-full h-[135%] rounded-l-full bg-slate-900 flex items-center'>
              <img src="https://res.cloudinary.com/chaiaurcode/image/upload/v1720728413/chaicode/cwzjplercsrmh2cpysa0.png" alt="img" />
            </div>
      </div>
    </div>
  );
}

export default App
