import React, { useEffect, useState } from 'react'
import Charts, { Chart } from "react-google-charts";

const LineChart = ({ historicalData }) => {

  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let data = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        data.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
      });

      setData(data);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType='LineChart'
      data={data}
      height={"100%"}
      legendToggle
      className='rounded-2xl'
    />
  )
}

export default LineChart