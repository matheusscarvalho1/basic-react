import React, { useState, useEffect } from 'react'
import './Counter.css'

const Counter = () => {
    const [contador, setContador] = useState(0)
    const [contTeste, setTeste] = useState('')


    useEffect(() =>{
        console.log('renderizou o contador com novo valor')
        }, [contador])

        useEffect(() =>{
            console.log('renderizou o estado de "teste"')
            }, [contTeste])


    const handleOnClick = operador => {
        const novoValor = operador ==='+' 
        ? contador + 1
        : contador - 1
        setContador(novoValor)

    } 

    return (
    <>
        <div className = "counter">
            <span>{contador}</span>
            <button onClick={() => handleOnClick('-')}>-</button>
            <button onClick={() => handleOnClick('+')}>+</button>
            <button onClick={() => setTeste('OutroValor')}>Teste</button>
        </div>
     </>
    )
}

export default Counter;