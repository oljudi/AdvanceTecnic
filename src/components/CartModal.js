import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 25%;
    padding: 30px;
    border-radius: 4px;
    background: whitesmoke;
`

const ProductsHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const TotalContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const CartModal = () => {
    return (
        <Container>
            <h2>Your cart:</h2>
            <ProductsHeader>
                <p></p>
                <p>Item(s)</p>
                <p>Price/unit</p>
                <p>Quentity</p>
                <p>Total</p>
            </ProductsHeader>
            <TotalContainer>
                <p>Total</p>
                <p>10.00</p>
            </TotalContainer>
        </Container>
    )
}

export default CartModal
