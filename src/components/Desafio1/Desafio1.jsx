import React, { useState } from 'react'
import './desafio1.css'
import CardList from '../CardList'

const Desafio1 = () => {
  const [size,setSize]=useState(0)
  return (
    <>
    <h1 >Zénigma1</h1>
    <div className="container">
    <input type='number' value={size} onChange={(e)=>setSize(e.target.value)}/>
    <CardList size={size}/>
    </div>
    </>
  )
}

export default Desafio1