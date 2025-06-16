import { render, screen } from '@testing-library/react'
import Index from '@/components/organism/InventoryTable'
import { Product } from '@/models/product'
import '@testing-library/jest-dom'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img alt={props.alt ?? ''} {...props} />
  }
}))

describe('ProductsTable component', () => {
  const mockProducts: Product[] = [
    {
      id: 1,
      name: 'Producto A',
      stock: 10,
      price: 1000,
      provider: 'Proveedor X',
      threshold: 10,
    },
    {
      id: 2,
      name: 'Producto B',
      stock: 5,
      price: 2500,
      provider: 'Proveedor Y',
      threshold: 10,
    }
  ]

  it('renders table headers', () => {
    render(<Index products={mockProducts} />)
    expect(screen.getByText('Nombre')).toBeInTheDocument()
    expect(screen.getByText('Stock')).toBeInTheDocument()
    expect(screen.getByText('Precio')).toBeInTheDocument()
    expect(screen.getByText('Proveedor')).toBeInTheDocument()
    expect(screen.getByText('Acciones')).toBeInTheDocument()
  })

  it('renders all product rows', () => {
    render(<Index products={mockProducts} />)

    expect(screen.getByText('Producto A')).toBeInTheDocument()
    expect(screen.getByText('Producto B')).toBeInTheDocument()

    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()

    expect(screen.getByText('1000')).toBeInTheDocument()
    expect(screen.getByText('2500')).toBeInTheDocument()

    expect(screen.getByText('Proveedor X')).toBeInTheDocument()
    expect(screen.getByText('Proveedor Y')).toBeInTheDocument()
  })

  it('renders edit link with image', () => {
    render(<Index products={mockProducts} />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
    expect(links[0]).toHaveAttribute('href', 'products/1')
    expect(links[1]).toHaveAttribute('href', 'products/2')
  })
})
