import { Dropbtn, Dropdown, DropdownContent } from './styles'

interface DropProps {
  hasChildreen?: boolean;
  title: string
}

export function DropdownMenu({ hasChildreen = true, title }: DropProps) {
  return (
    <Dropdown>
      <Dropbtn>{title}</Dropbtn>
      <DropdownContent>
        {hasChildreen ? (
          <>
            <a href="">Link 1 do link</a>
            <a href="">Link 2 do link</a>
            <a href="">Link 3 do link</a>
          </>
        ) : (
          null
        )}
      </DropdownContent>
    </Dropdown>
  )
}