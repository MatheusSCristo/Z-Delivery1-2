import React, { useEffect } from 'react'

import "./cardlist.css"
import { useState } from 'react';


const CardList = ({ size }) => {

    const [message, setMessage] = useState([])
    useEffect(() => {
        setMessage(() => {
            let array = []
            for (let i = 0; i < size; i++) {
                array.push('down')
            }
            return array
        })

    }, [size])

    const handleOnClickCard = (index) => {
        const newMessage = [...message];
        newMessage.map((item, index) => {
            if (item === 'up') {
                newMessage[index] = 'down'
            }
        })
        newMessage[index] = 'up'
        setMessage(newMessage)
    }



    return (
        message.map((item, index) =>
            <div className='card' onClick={() => handleOnClickCard(index)}>
                <p>{item}</p>
            </div>


        ))
}

export default CardList