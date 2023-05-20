import React from 'react'

export default function Tablerow({item,index}) {
  return (
    <>
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>
          <img src={item.image} alt="" />
        </td>
        <td>{item.symbol}</td>
        <td>{item.circulating_supply}</td>
        <td>{item.total_supply}</td>
        <td>{item.total_volume}</td>
      </tr>
    </>
  );
}
