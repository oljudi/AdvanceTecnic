import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: #98ded9;
    height: 5vh;
    width: 80vw;
    display: flex;
    justify-content: space-evenly;
`

const FilterItem = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    button {
            border: none;
            background: #161d6f;
            height: 30px;
            border-radius: 5px;
            color: white;
            font-weight: 800;   
    }
`

const StockSelector = styled.div`
    margin-top: 5px;
    width: 5%;
    display: flex;
    justify-content: space-between;
    .picker {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`

const ToolBar = ({ stock, setStock, filterOptions, setFilterBy, setNameToSearch, setOpenCart }) => {

    return (
        <Container>
            <FilterItem>
                <label>Search by product name</label>
                <input onChange={e => setNameToSearch(e.target.value)} />
            </FilterItem>
            <FilterItem>
                <label>Filter by category</label>
                <select
                    onChange={e => setFilterBy(e.target.value)}
                >
                    <option value=''>Select one...</option>
                    {filterOptions.map((e, i) => <option key={i}>{e}</option>)}
                </select>
            </FilterItem>
            <StockSelector
                onClick={() => setStock(!stock)}
            >
                <div className='picker'>
                    {stock ?
                        <FontAwesomeIcon icon={faCheckSquare} />
                        :
                        <FontAwesomeIcon icon={faSquare} />
                    }
                </div>
                <p>Stock</p>
            </StockSelector>
            <FilterItem >
                <button
                    onClick={() => setOpenCart(true)}
                >
                    Create order
                </button>
            </FilterItem>
        </Container>
    )
}

export default ToolBar
