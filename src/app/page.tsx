import { db } from '@/db'
import { products } from '@/db/schema'
import ProductGrid from '@/components/ProductGrid'

async function getProducts() {
  try {
    const allProducts = await db.select().from(products)
    return allProducts
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export default async function Home() {
  const productList = await getProducts()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">509 E-Commerce</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Nike Collection</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Just Do It</h2>
          <p className="text-xl md:text-2xl mb-8">Discover the latest Nike collection</p>
          <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">Explore our collection of premium Nike products</p>
        </div>
        
        <ProductGrid initialProducts={productList} />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">509 E-Commerce</h3>
            <p className="text-gray-400">Your premium Nike destination</p>
          </div>
        </div>
      </footer>
    </main>
  )
}