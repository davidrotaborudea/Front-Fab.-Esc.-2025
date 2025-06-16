import { render, screen, fireEvent } from '@testing-library/react'
import Index from '@/pages/products/[id]'
import { useRouter } from 'next/router'
import * as mockData from '@/data/mockProducts'
import '@testing-library/jest-dom'

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

// Mock alert
global.alert = jest.fn()

describe('Product form', () => {
  const mockPush = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders creation form and creates a new product', async () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { id: 'created' },
      push: mockPush,
      isReady: true
    })

    render(<Index />)

    const nombreInput = await screen.findByLabelText('Nombre')
    const precioInput = screen.getByLabelText('Precio ($)')
    const cantidadInput = screen.getByLabelText('Cantidad')
    const proveedorInput = screen.getByLabelText('Proveedor')
    const thresholdInput = screen.getByLabelText('Umbral de stock')

    fireEvent.change(nombreInput, { target: { value: 'Nuevo producto' } })
    fireEvent.change(precioInput, { target: { value: '99' } })
    fireEvent.change(cantidadInput, { target: { value: '10' } })
    fireEvent.change(proveedorInput, { target: { value: 'ProveedorZ' } })
    fireEvent.change(thresholdInput, { target: { value: '5' } })

    fireEvent.click(screen.getByText('Guardar'))

    expect(mockData.mockProducts.at(-1)?.name).toBe('Nuevo producto')
    expect(global.alert).toHaveBeenCalledWith('Produto creado')
    expect(mockPush).toHaveBeenCalledWith('/products')
  })

  it('renders existing product and updates it', async () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { id: '1' },
      push: mockPush,
      isReady: true
    })

    render(<Index />)

    const nombreInput = await screen.findByLabelText('Nombre')
    const cantidadInput = screen.getByLabelText('Cantidad')

    expect(nombreInput).toHaveValue('Croquetas para perro extra grande')
    expect(cantidadInput).toHaveValue('120')

    fireEvent.change(cantidadInput, { target: { value: '150' } })
    fireEvent.click(screen.getByText('Guardar'))

    expect(mockData.mockProducts.find(p => p.id === 1)?.stock).toBe(150)
    expect(global.alert).toHaveBeenCalledWith('Produto actualizado')
    expect(mockPush).toHaveBeenCalledWith('/products')
  })
})
