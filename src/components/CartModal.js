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
    p {
        width: 17%;
        text-align: center;
    }
`

const ProductContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    p {
        width: 17%;
        text-align: center;
    }
`

const TotalContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const CartModal = ({ orderProducts }) => {

    const createTotal = () => {
        const aux = orderProducts.map(e => e.quantity * e.price)
        return aux.reduce((a, c) => a + c)
    }

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
            {orderProducts.length > 0 ?
                orderProducts.map((e, i) =>
                    <ProductContainer key={i}>
                        <img
                            src={e.image}
                            alt={i}
                            width='50px'
                        />
                        <p>{e.name}</p>
                        <p>${e.price}</p>
                        <p>{e.quantity}</p>
                        <p>${(e.price * e.quantity).toFixed(2)}</p>
                    </ProductContainer>)
                :
                <p>No items added to cart</p>
            }
            <TotalContainer>
                <p>Total</p>
                <p>
                    {orderProducts.length > 0 ? `$${createTotal().toFixed(2)}` : "-.-"}
                </p>
            </TotalContainer>
        </Container>
    )
}

export default CartModal
