import { Container, Content, Products, ProductItem } from './styles'

export function ProductList() {
  return (
    <Container>
      <Content>
        <h1>New Arrivals</h1>
        <Products>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Products>
      </Content>
    </Container>
  )
}