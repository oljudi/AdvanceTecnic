import { useEffect, useState } from "react"
import styled from "styled-components"
import CartModal from "./components/CartModal"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import { Shadow } from "./components/Shadow"
import ToolBar from "./components/ToolBar"

import PRODUCTS_SERVICE from "./services/productsService";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const App = () => {

  const [openCart, setOpenCart] = useState(false)
  const [stock, setStock] = useState(false)

  const [filterBy, setFilterBy] = useState('')
  const [nameToSearch, setNameToSearch] = useState('')

  const [products, setProducts] = useState([])
  const [byNameProducts, setByNameProducts] = useState([])
  const [filterOptions, setFilterOptions] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { request: { responseText: data } } = await PRODUCTS_SERVICE.getProducts()
      setProducts(JSON.parse(data).products)
      setByNameProducts(JSON.parse(data).products)
      setFilterOptions([...new Set(JSON.parse(data).products.map(e => e.category))])
    }
    fetchProducts()
  }, [])

  return (
    <MainContainer>
      <NavBar
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      <ContentContainer>
        <ToolBar
          stock={stock}
          setStock={setStock}
          filterOptions={filterOptions}
          setFilterBy={setFilterBy}
          setNameToSearch={setNameToSearch}
        />
        <Products
          stock={stock}
          products={products}
          byNameProducts={byNameProducts}
          filterBy={filterBy}
          nameToSearch={nameToSearch}
        />
      </ContentContainer>

      {openCart &&
        <>
          <Shadow onClick={() => setOpenCart(false)} />
          <CartModal />
        </>
      }

    </MainContainer>
  );
}

export default App;
