import React, { useContext, useState, useEffect } from 'react'
import SearchForms from "../Components/SearchForms"
import Table from '../Components/Table'
import { CoinContext } from "../Context/CoinContext"

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);

  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className='min-h-screen text-white bg-gray-900 pb-36 pt-28 maxContainer'>
      <div className='radient'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl text-center font-bold mt-36 ' id='JSCaption'>Largest <br /> Crypto Marketplace</h1>
        <p className='mt-6 text-center text-lg'>Welcome to the world&apos;s largest cryptocurrency marketplace. <br /> Sign up to explore more about cryptos.</p>

        <SearchForms />
      </div>

      {/* Table */}
      <Table displayCoin={displayCoin} currency={currency} />
    </div>
  )
}

export default Home