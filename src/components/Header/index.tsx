import Image from 'next/image'
import { DropdownMenu } from '../Dropdown'
import { Container, Content, Logo, MenuItems, HeaderButton } from './styles'

interface HeaderProps {
  customBG?: string;
}

export function Header({ customBG }: HeaderProps) {
  return (
    <Container bgcolor={customBG ? customBG : null}>
      <Content>
        <Logo>
          <Image src="/logo.svg" width={108} height={31} />
        </Logo>
        <div className="menus">
        <MenuItems>
          <DropdownMenu title="Men" hasChildreen={false} />
          <DropdownMenu title="Women" hasChildreen={false} />
          <DropdownMenu title="Objects" hasChildreen={false} />
        </MenuItems>
        <MenuItems>
          <DropdownMenu title="FAQ" hasChildreen={false} />
          <DropdownMenu title="Help" hasChildreen={false} />
          <DropdownMenu title="Contact Us" hasChildreen={false} />
        </MenuItems>
        </div>
        <HeaderButton type="button">Login or Register</HeaderButton>
      </Content>
    </Container>
  )
}