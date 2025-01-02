import React from 'react'
import { Link } from "react-router-dom"

const Table = ({ displayCoin, currency }) => {
    return (
        <div className='container mx-auto mt-28 p-4' style={{ maxWidth: "900px" }}>
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white border border-gray-800 shadow-lg rounded-2xl'>
                    <thead>
                        <tr className='w-full bg-gray-900 border-b border-gray-800'>
                            <th className='text-xs md:text-lg px-6 py-3 text-left font-medium text-gray-300'>#</th>
                            <th className='text-xs md:text-lg px-6 py-3 text-left font-medium text-gray-300'>Coins</th>
                            <th className='text-xs md:text-lg px-6 py-3 text-left font-medium text-gray-300'>Price</th>
                            <th className='text-xs md:text-lg px-6 py-3 text-left font-medium text-gray-300'>24H Change</th>
                            <th className='text-xs md:text-lg px-6 py-3 text-left font-medium text-gray-300'>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody className='bg-gray-900'>
                        {displayCoin.slice(0, 10).map((item, index) => (
                            <tr key={index}>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400'>
                                    <Link to={`/coin/${item.id}`}>
                                        {item.market_cap_rank}
                                    </Link>
                                </td>
                                <td className='flex justify-center items-center'>
                                    <Link className='flex justify-center items-center' to={`/coin/${item.id}`}>
                                        <img src={item.image} alt="" style={{ width: "35px" }} />
                                        <p className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400`}>{item.name + " - " + item.symbol}</p>
                                    </Link>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400'>
                                    <Link to={`/coin/${item.id}`}>
                                        {currency.symbol} {item.current_price.toLocaleString()}
                                    </Link>
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400 ${item.price_change_percentage_24h > 0 ? 'text-green-800 text-center' : 'text-red-800 text-center'}`}>
                                    <Link to={`/coin/${item.id}`}>
                                        {Math.floor(item.price_change_percentage_24h * 100) / 100}
                                    </Link>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400'>
                                    <Link to={`/coin/${item.id}`}>
                                        {currency.symbol} {item.market_cap.toLocaleString()}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table