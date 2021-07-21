import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  background: #fff;
`

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 20px auto 20px;
  min-height: 500px;

  h1 {
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: underline;
  }
`

export const Products = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-auto-rows: auto;
`

export const ProductItem = styled.div`
  width: 100%;
  height: 455px;
  background: #FFFEF5;
  border-radius: 16px;
  box-shadow: 0px 2px 16px -10px rgba(54, 53, 53, 0.3);
  transition: 300ms;

  &:hover {
    box-shadow: 0px 4px 16px rgba(54, 53, 53, 0.3);
  }
`
