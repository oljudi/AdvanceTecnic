import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import PRODUCTS_SERVICE from "../services/productsService";
import Product from './Product';

const Container = styled.div`
    background: whitesmoke;
    height: 90vh;
    width: 80vw;
`

const ProductsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    .header {
        width: 20%;
        height: 5vh;
        text-align: center;
        border: 1px solid red;
    }
    .picker {
        width: 5%;
        height: 5vh;
        border: 1px solid green;
    }
`


const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { request: { responseText: data } } = await PRODUCTS_SERVICE.getProducts()
            setProducts(JSON.parse(data).products)
        }
        fetchProducts()
    }, [])

    return (
        <Container>
            <ProductsHeader>
                <div
                    className='picker'
                >
                    <p></p>
                </div>
                <div
                    className='header'
                >
                    <p></p>
                </div>
                <div
                    className='header'
                >
                    <p>Product</p>
                </div>
                <div
                    className='header'
                >
                    <p>Category</p>
                </div>
                <div
                    className='header'
                >
                    <p>Price</p>
                </div>
                <div
                    className='header'
                >
                    <p>Stock</p>
                </div>
                <div
                    className='header'
                >
                    <p>Quantity</p>
                </div>
            </ProductsHeader>
            {products.map((e, i) =>
                <Product item={e} key={i} />
            )}
            {console.log(products)}
        </Container>
    )
}

export default Products
