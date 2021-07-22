import { render } from '@testing-library/react'
import { useRouter } from 'next/router'
import { ActiveLink } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('Active Link component', () => {
  test('active link renders correctly', () => {
    const { getByText } = render(
      <ActiveLink />
    )
    expect(getByText('ActiveLink')).toBeInTheDocument()
  })
})
