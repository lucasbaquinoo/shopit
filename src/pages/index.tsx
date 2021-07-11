import Image from 'next/image'
import styled from 'styled-components'
import { Header } from "../components/Header"

export default function Home() {
  return (
    <Container>
      <Header customBG="#E9EDC9" />
      <Content>
        <Image src="/stand_clothes.png" width={898} height={753} />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background: var(--light-goldenrod-yellow);
  overflow: hidden;
`
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
