import React, { useReducer, useState } from 'react'

import './desafio2.modules.css'

const Desafio2 = () => {
    
    
    const [number, setNumber] = useState(0)
    const reducer = (state, action) => {
        if (number!=0)
            switch (action.type) {
                case 'add':
                    return {
                        number:state.number + parseInt(number)
                    }
                case 'subtract':
                    return {
                        number:state.number - parseInt(number)
                    }
                    
                    
                }
                else {
                    switch (action.type) {
                        case 'add':
                            return {
                                number:state.number + 1
                            }
                            case 'subtract':
                                return {
                                    number:state.number - 1
                                }
                                
                            }
                        }
                    }
    const [state, dispatch] = useReducer(reducer, { number:0 })
    
    return (
        <>
            <h1>ZéEnigma2 </h1>
            <div className='container2'>
                <input type='number' placeholder='Número' value={number} onChange={(e) => setNumber(e.target.value)} />
                <button onClick={() => dispatch({type:'add'})}>Add</button>
                <button onClick={() => dispatch({type:'subtract'})}>Subtract</button>
                <div data-testid="results">
                    {state.number}
                </div>
            </div>
        </>
    )
}

export default Desafio2 