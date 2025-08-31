'use client'

import { useEffect } from 'react'
import { useProductStore } from '@/store/products'
import ProductCard from './ProductCard'

interface ProductGridProps {
  initialProducts: any[]
}

export default function ProductGrid({ initialProducts }: ProductGridProps) {
  const { products, setProducts, loading, error } = useProductStore()

  useEffect(() => {
    if (initialProducts.length > 0) {
      setProducts(initialProducts)
    }
  }, [initialProducts, setProducts])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        <p>Error loading products: {error}</p>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No products found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}