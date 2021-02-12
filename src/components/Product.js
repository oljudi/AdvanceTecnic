import React, { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    .item {
        display: flex;
        width: 20%;
        height: 15vh;
        text-align: center;
        border: 1px solid red;
        justify-content: center;
        align-items: center;
        .quantity {
            display: flex;
            input {
                    width: 2vw;
                    text-align: center;
                }
            button {
                    border: none;
                    :disabled {
                        cursor: not-allowed;
                        color: red;
                    }
                }
            }
    }
    .picker {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5%;
        height: 15vh;
        border: 1px solid green;
    }
`

const Product = ({ item }) => {

    const [quantity, setQuantity] = useState(0)
    const [selected, setSelected] = useState(false)

    const handleSelection = (stock) => {
        if (stock > 0) {
            setSelected(!selected)
            if (!selected) setQuantity(1)
            else setQuantity(0)
        }
    }

    return (
        <Container>
            <div
                className='picker'
                onClick={() => handleSelection(item.stock)}
            >
                {selected ?
                    <FontAwesomeIcon icon={faCheckSquare} size='2x' />
                    :
                    <FontAwesomeIcon icon={faSquare} size='2x' />
                }
            </div>
            <div
                className='item'
            >
                <img
                    src={item.image}
                    alt={item.name}
                    width='100px'
                />
            </div>
            <div
                className='item'
            >
                <p>{item.name}</p>
            </div>
            <div
                className='item'
            >
                <p>{item.category}</p>
            </div>
            <div
                className='item'
            >
                <p>{item.price}</p>
            </div>
            <div
                className='item'
            >
                <p>{item.stock}</p>
            </div>
            <div
                className='item'
            >
                <div className='quantity'>
                    <button
                        onClick={() => quantity > 0 && setQuantity(quantity - 1)}
                        disabled={quantity <= 0}
                    >
                        <FontAwesomeIcon icon={faMinus} size='2x' />
                    </button>
                    <input value={quantity} readOnly onChange={(e) => setQuantity(parseInt(e.target.value))} />
                    <button
                        onClick={() => quantity <= item.stock && setQuantity(quantity + 1)}
                        disabled={quantity >= item.stock}
                    >
                        <FontAwesomeIcon icon={faPlus} size='2x' />
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default Product
