import ProductCard from '@/components/ProductCard';
import { Product } from '@/db/schema';

// Placeholder data for latest shoes
const latestShoes: Product[] = [
  {
    id: 1,
    name: "Air Max 270",
    description: "The Nike Air Max 270 delivers visible Air cushioning from heel to toe.",
    price: "150.00",
    image: "/shoes/shoe-1.jpg",
    category: "Running",
    brand: "Nike",
    size: "US 9",
    color: "Black/White",
    stock: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: "React Infinity Run",
    description: "Designed to help reduce injury and keep you running with soft, responsive cushioning.",
    price: "160.00",
    image: "/shoes/shoe-2.webp",
    category: "Running",
    brand: "Nike",
    size: "US 10",
    color: "Blue/Gray",
    stock: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: "Zoom Pegasus 38",
    description: "A responsive shoe that delivers a smooth ride for everyday runs.",
    price: "130.00",
    image: "/shoes/shoe-3.webp",
    category: "Running",
    brand: "Nike",
    size: "US 8.5",
    color: "White/Red",
    stock: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    name: "Air Force 1 '07",
    description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original.",
    price: "90.00",
    image: "/shoes/shoe-4.webp",
    category: "Lifestyle",
    brand: "Nike",
    size: "US 11",
    color: "All White",
    stock: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    name: "Dunk Low Retro",
    description: "Created for the hardwood but taken to the streets, the basketball icon returns.",
    price: "100.00",
    image: "/shoes/shoe-5.avif",
    category: "Lifestyle",
    brand: "Nike",
    size: "US 9.5",
    color: "Black/White",
    stock: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 6,
    name: "Blazer Mid '77",
    description: "Praised by skaters and basketball players, the Nike Blazer Mid '77 delivers.",
    price: "100.00",
    image: "/shoes/shoe-6.avif",
    category: "Lifestyle",
    brand: "Nike",
    size: "US 10.5",
    color: "Vintage White",
    stock: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-heading-1 font-jost mb-4">Nike</h1>
          <p className="text-lg text-gray-600">Just Do It</p>
        </div>
      </div>

      {/* Latest Shoes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Shoes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestShoes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
