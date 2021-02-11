import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid red;
    height: 5vh;
    width: 80vw;
    display: flex;
    justify-content: space-between;
`

const FilterItem = styled.div`
    display: flex;
    flex-direction: column;
`

const ToolBar = () => {
    return (
        <Container>
            <FilterItem>
                <label>Search by name:</label>
                <input />
            </FilterItem>
            <FilterItem>
                <label>Order by:</label>
                <input />
            </FilterItem>
            <FilterItem>
                <label>Stock</label>
                <input />
            </FilterItem>
            <FilterItem>
                <label>Filter by: </label>
                <input />
            </FilterItem>
        </Container>
    )
}

export default ToolBar
