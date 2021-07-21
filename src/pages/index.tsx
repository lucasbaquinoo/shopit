import styled from 'styled-components'
import { Header } from "../components/Header"
import { ProductList } from '../components/ProductList'

export default function Home() {
  return (
    <Container>
      <Header customBG="#FEFAE0" />
      <Content>
        <Image />
        <ProductList />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--cornsilk);
  overflow-x: hidden;
`
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Image = styled.div`
  min-width: 898px;
  min-height: 700px;
  margin: 10px auto 0;
  background-image: url('/stand_hero.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`