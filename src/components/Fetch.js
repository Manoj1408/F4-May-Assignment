import React, { useEffect, useState } from 'react';
import axios from "axios";
import Tablerow from './Tablerow';


export default function Fetch() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(){
        try {
          const arr = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
          );
          setData(arr.data);
        } catch (error) {
          console.log("Error", error);
        }
      }
      fetchData();
      
    },[]);
    console.log(data);



  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>SI.No</th>
            <th>Name</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Circulating_Supply</th>
            <th>Total_Supply</th>
            <th>Total_Volume</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                // <tr key={index}>
                //   <td>{index + 1}</td>
                //   <td>{item.name}</td>
                //   <td>
                //     <img src={item.image} alt="" />
                //   </td>
                //   <td>{item.symbol}</td>
                //   <td>{item.circulating_supply}</td>
                //   <td>{item.total_supply}</td>
                //   <td>{item.total_volume}</td>
                // </tr>
                <Tablerow item={item} index={index}/>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
