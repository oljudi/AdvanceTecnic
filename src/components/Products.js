import React, { useState } from 'react'
import styled from 'styled-components'

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


const Products = ({ stock, products, byNameProducts, filterBy, nameToSearch }) => {

    const [orderByOption, setOrderByOption] = useState('')

    const [byName, setByName] = useState(false)
    const [byCategory, setByCategory] = useState(false)
    const [byPrice, setByPrice] = useState(false)
    const [byStock, setByStock] = useState(false)

    const handleOrderBy = (row) => {
        const options = ['Asc', 'Desc', '']
        if (orderByOption === '') {
            setOrderByOption(options[0])
            switch (row) {
                case 'product':
                    setByStock(false)
                    setByPrice(false)
                    setByCategory(false)
                    setByName(true)
                    break;
                case 'category':
                    setByStock(false)
                    setByPrice(false)
                    setByCategory(true)
                    setByName(false)
                    break;
                case 'price':
                    setByStock(false)
                    setByPrice(true)
                    setByCategory(false)
                    setByName(false)
                    break;
                case 'stock':
                    setByStock(true)
                    setByPrice(false)
                    setByCategory(false)
                    setByName(false)
                    break;
                default:
                    break;
            }
        }
        if (orderByOption === options[0]) {
            setOrderByOption(options[1])
            switch (row) {
                case 'product':
                    setByStock(false)
                    setByPrice(false)
                    setByCategory(false)
                    setByName(true)
                    break;
                case 'category':
                    setByStock(false)
                    setByPrice(false)
                    setByCategory(true)
                    setByName(false)
                    break;
                case 'price':
                    setByStock(false)
                    setByPrice(true)
                    setByCategory(false)
                    setByName(false)
                    break;
                case 'stock':
                    setByStock(true)
                    setByPrice(false)
                    setByCategory(false)
                    setByName(false)
                    break;
                default:
                    break;
            }
        }
        if (orderByOption === options[1]) {
            setOrderByOption(options[2])
            setByStock(false)
            setByPrice(false)
            setByCategory(false)
            setByName(false)
        }
    }

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
                    onClick={() => handleOrderBy('product')}
                >
                    {byName ?
                        orderByOption === 'Asc' ? <p>🔺 Product 🔺</p>
                            : <p>🔻 Product 🔻</p>
                        :
                        <p>Product</p>
                    }
                </div>
                <div
                    className='header'
                    onClick={() => handleOrderBy('category')}
                >
                    {byCategory ?
                        orderByOption === 'Asc' ? <p>🔺 Category 🔺</p>
                            : <p>🔻 Category 🔻</p>
                        :
                        <p>Category</p>
                    }
                </div>
                <div
                    className='header'
                    onClick={() => handleOrderBy('price')}
                >
                    {byPrice ?
                        orderByOption === 'Asc' ? <p>🔺 Price 🔺</p>
                            : <p>🔻 Price 🔻</p>
                        :
                        <p>Price</p>
                    }
                </div>
                <div
                    className='header'
                    onClick={() => handleOrderBy('stock')}
                >
                    {byStock ?
                        orderByOption === 'Asc' ? <p>🔺 Stock 🔺</p>
                            : <p>🔻 Stock 🔻</p>
                        :
                        <p>Stock</p>
                    }
                </div>
                <div
                    className='header'
                >
                    <p>Quantity</p>
                </div>
            </ProductsHeader>

            {byName &&
                (nameToSearch === '' ?
                    (filterBy === '' ?
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.sort((a, b) => a.name.localeCompare(b.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.sort((a, b) => b.name.localeCompare(a.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.stock > 0).sort((a, b) => a.name.localeCompare(b.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.stock > 0).sort((a, b) => b.name.localeCompare(a.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                        :
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.category === filterBy).sort((a, b) => a.name.localeCompare(b.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.category === filterBy).sort((a, b) => b.name.localeCompare(a.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => a.name.localeCompare(b.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => b.name.localeCompare(a.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                    )
                    :
                    (filterBy === '' ?
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).sort((a, b) => b.name.localeCompare(a.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.stock > 0).sort((a, b) => a.name.localeCompare(b.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.stock > 0).sort((a, b) => b.name.localeCompare(a.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                        :
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).sort((a, b) => a.name.localeCompare(b.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).sort((a, b) => b.name.localeCompare(a.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => a.name.localeCompare(b.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => b.name.localeCompare(a.name)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                    )
                )
            }

            {byCategory &&
                (nameToSearch === '' ?
                    (filterBy === '' ?
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.sort((a, b) => a.category.localeCompare(b.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.sort((a, b) => b.category.localeCompare(a.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.stock > 0).sort((a, b) => a.category.localeCompare(b.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.stock > 0).sort((a, b) => b.category.localeCompare(a.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                        :
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.category === filterBy).sort((a, b) => a.category.localeCompare(b.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.category === filterBy).sort((a, b) => b.category.localeCompare(a.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => a.category.localeCompare(b.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => b.category.localeCompare(a.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                    )
                    :
                    (filterBy === '' ?
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).sort((a, b) => a.category.localeCompare(b.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).sort((a, b) => b.category.localeCompare(a.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.stock > 0).sort((a, b) => a.category.localeCompare(b.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.stock > 0).sort((a, b) => b.category.localeCompare(a.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                        :
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).sort((a, b) => a.category.localeCompare(b.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).sort((a, b) => b.category.localeCompare(a.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => a.category.localeCompare(b.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => b.category.localeCompare(a.category)).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                    )
                )
            }

            {byPrice &&
                (nameToSearch === '' ?
                    (filterBy === '' ?
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.sort((a, b) => a.price - b.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.sort((a, b) => b.price - a.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.stock > 0).sort((a, b) => a.price - b.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.stock > 0).sort((a, b) => b.price - a.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                        :
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.category === filterBy).sort((a, b) => a.price - b.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.category === filterBy).sort((a, b) => b.price - a.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => a.price - b.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => b.price - a.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                    )
                    :
                    (filterBy === '' ?
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).sort((a, b) => a.price - b.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).sort((a, b) => b.price - a.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.stock > 0).sort((a, b) => a.price - b.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.stock > 0).sort((a, b) => b.price - a.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                        :
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).sort((a, b) => a.price - b.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).sort((a, b) => b.price - a.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => a.price - b.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => b.price - a.price).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                    )
                )
            }

            {byStock &&
                (nameToSearch === '' ?
                    (filterBy === '' ?
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.sort((a, b) => a.stock - b.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.sort((a, b) => b.stock - a.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.stock > 0).sort((a, b) => a.stock - b.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.stock > 0).sort((a, b) => b.stock - a.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                        :
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.category === filterBy).sort((a, b) => a.stock - b.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.category === filterBy).sort((a, b) => b.stock - a.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => a.stock - b.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => b.stock - a.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                    )
                    :
                    (filterBy === '' ?
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).sort((a, b) => a.stock - b.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).sort((a, b) => b.stock - a.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.stock > 0).sort((a, b) => a.stock - b.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.stock > 0).sort((a, b) => b.stock - a.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                        :
                        (stock ?
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).sort((a, b) => a.stock - b.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).sort((a, b) => b.stock - a.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                            :
                            (orderByOption === 'Asc' ?
                                byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => a.stock - b.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                                : byNameProducts.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).filter(e => e.stock > 0).sort((a, b) => b.stock - a.stock).map((e, i) =>
                                    <Product item={e} key={i} />
                                )
                            )
                        )
                    )
                )
            }

            {orderByOption === '' &&
                (nameToSearch === '' ?
                    (filterBy === '' ?
                        (stock ?
                            products.map((e, i) =>
                                <Product item={e} key={i} />
                            )
                            :
                            products.filter(e => e.stock > 0).map((e, i) =>
                                <Product item={e} key={i} />
                            )
                        )
                        :
                        (stock ?
                            products.filter(e => e.category === filterBy).map((e, i) =>
                                <Product item={e} key={i} />
                            )
                            :
                            products.filter(e => e.category === filterBy).filter(e => e.stock > 0).map((e, i) =>
                                <Product item={e} key={i} />
                            )
                        )
                    )
                    :
                    (filterBy === '' ?
                        (stock ?
                            products.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).map((e, i) =>
                                <Product item={e} key={i} />
                            )
                            :
                            products.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.stock > 0).map((e, i) =>
                                <Product item={e} key={i} />
                            )
                        )
                        :
                        (stock ?
                            products.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).map((e, i) =>
                                <Product item={e} key={i} />
                            )
                            :
                            products.filter(e => e.name.toLowerCase().includes(nameToSearch.toLowerCase())).filter(e => e.category === filterBy).filter(e => e.stock > 0).map((e, i) =>
                                <Product item={e} key={i} />
                            )
                        )
                    )
                )
            }
        </Container>
    )
}

export default Products
