import { create } from 'zustand'
import { Product } from '@/db/schema'

interface ProductStore {
  products: Product[]
  loading: boolean
  error: string | null
  setProducts: (products: Product[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  addProduct: (product: Product) => void
  updateProduct: (id: number, product: Partial<Product>) => void
  removeProduct: (id: number) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  setProducts: (products) => set({ products }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  addProduct: (product) => set((state) => ({ 
    products: [...state.products, product] 
  })),
  updateProduct: (id, updatedProduct) => set((state) => ({
    products: state.products.map((product) =>
      product.id === id ? { ...product, ...updatedProduct } : product
    ),
  })),
  removeProduct: (id) => set((state) => ({
    products: state.products.filter((product) => product.id !== id),
  })),
}))