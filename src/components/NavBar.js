import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    height: 5%;
    display: flex;
    background: #c7ffd8;
    h1{
        font-size: 30px;
        font-weight: 800;
        margin: 0;
    }
    .appTittle {
        width: 50%;
        display: flex;
        justify-content: space-around;
    }
    .cartContainer {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        span {
            margin: 2% 10% 0 0;
        }
    }
`

const NavBar = ({ openCart, setOpenCart }) => {

    return (
        <Container>
            <div
                className='appTittle'
            >
                <h1>
                    Advance Store
                </h1>
            </div>
            <div
                className='cartContainer'
                onClick={() => setOpenCart(!openCart)}
            >
                <span className="fa-layers fa-fw" >
                    <FontAwesomeIcon icon={faShoppingCart} size='2x' />
                    {/* <span className="fa-layers-counter" >0</span> */}
                </span>
            </div>
        </Container>
    )
}

export default NavBar
