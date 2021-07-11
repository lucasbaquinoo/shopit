import styled from 'styled-components'

interface ContainerProps {
  bgcolor?: string
}

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100px;
  background: ${props => props.bgcolor ? props.bgcolor : '#fff'};
`

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  
  .menus {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  `

export const Logo = styled.div`
  margin-right: 30px;
  `

export const MenuItems = styled.div`
`

export const HeaderButton = styled.button`
  cursor: pointer;
  padding: 5px 20px;
  border-radius: 20px;
  border: none;
  background: var(--fawn);
  color: #fff;
  transition: 300ms;

  &:hover {
    filter: brightness(0.9);
  }
`
