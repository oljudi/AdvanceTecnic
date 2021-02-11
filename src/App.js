import { useState } from "react"
import styled from "styled-components"
import CartModal from "./components/CartModal"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import { Shadow } from "./components/Shadow"
import ToolBar from "./components/ToolBar"

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

  return (
    <MainContainer>
      <NavBar
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      <ContentContainer>
        <ToolBar />
        <Products />
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
