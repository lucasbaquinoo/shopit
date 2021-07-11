import styled from 'styled-components'
import { shade } from 'polished'

export const DropdownContent = styled.div`
  position: absolute;
  background: #f9f9f9;
  display: none;
  min-height: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  font-weight: 500;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #f1f1f1
    }
  }
`

export const Dropbtn = styled.button`
  background: transparent;
  color: var(--fawn);
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  transition: 300ms;

  &:hover ${DropdownContent} {
    display: block;
  }

  &:hover ${Dropbtn} {
    color: ${shade(0.3, '#D4A373')};
  }
`