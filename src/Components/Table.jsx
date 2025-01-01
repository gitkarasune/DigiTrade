import React from 'react'

const Table = ({ displayCoin, currency }) => {
    return (
        <div className='container mx-auto mt-28 p-4' style={{ maxWidth: "900px"}}>
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
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400'>{item.market_cap_rank}</td>
                                <td className='flex justify-center items-center'>
                                    <img src={item.image} alt="" style={{ width: "35px" }} />
                                    <p className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400'>{item.name + " - " + item.symbol}</p>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400'>{currency.symbol} {item.current_price.toLocaleString()}</td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400 ${item.price_change_percentage_24h > 0 ? 'text-green-800 text-center' : 'text-red-800 text-center'}`}>{Math.floor(item.price_change_percentage_24h * 100) / 100}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400'>{currency.symbol} {item.market_cap.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table



// const Table = ({ displayCoin, currency }) => {
//     return (
//         <div className='mt-48 mb-5 rounded-xl m-auto crypto-table'>
//             <div className='table-layout'>
//                 <p className='text-xs md:text-lg'>#</p>
//                 <p className='text-xs md:text-lg'>Coins</p>
//                 <p className='text-xs md:text-lg'>Price</p>
//                 <p className='text-xs md:text-lg' style={{ textAlign: "center"}}>24H Change</p>
//                 <p className='text-xs md:text-lg' style={{ textAlign: "right"}}>Market Cap</p>
//             </div>
//             { displayCoin.slice(0, 10).map((item, index) => (
//                 <div className='' key={index}>
//                     <p>{item.market_cap_rank}</p>
//                     <div className='flex items-center gap-10'>
//                         <img src={item.image} alt="" style={{ width: "35px"}} />
//                         <p>{ item.name + " - " + item.symbol}</p>
//                     </div>
//                     <p>{ currency.symbol} {item.current_price.toLocaleString()}</p>
//                     <p>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
//                     <p className='market_cap'>{ currency.symbol} {item.market_cap.toLocaleString()}</p>
//                 </div>
//             )) }
//         </div>
//     )
// }