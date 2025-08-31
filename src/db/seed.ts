import { db } from './index'
import { products } from './schema'

const nikeProducts = [
  {
    name: 'Nike Air Max 90',
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.',
    price: '119.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-max-90-mens-shoes-6n7J06.png',
    category: 'Shoes',
    brand: 'Nike',
    size: 'US 10',
    color: 'White/Black',
    stock: 25,
  },
  {
    name: 'Nike Air Force 1',
    description: 'The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best.',
    price: '109.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
    category: 'Shoes',
    brand: 'Nike',
    size: 'US 9',
    color: 'White',
    stock: 30,
  },
  {
    name: 'Nike Dri-FIT T-Shirt',
    description: 'Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable.',
    price: '29.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61b4738b-e1e2-4786-8f6c-26aa0008e80b/dri-fit-mens-fitness-t-shirt-HPFWLp.png',
    category: 'Apparel',
    brand: 'Nike',
    size: 'L',
    color: 'Black',
    stock: 50,
  },
  {
    name: 'Nike React Infinity Run',
    description: 'The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run.',
    price: '159.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8439f823-86cf-4086-81d2-4f9ff9a66866/react-infinity-run-flyknit-3-mens-road-running-shoes-QBvZvM.png',
    category: 'Shoes',
    brand: 'Nike',
    size: 'US 11',
    color: 'Blue/White',
    stock: 20,
  },
  {
    name: 'Nike Swoosh Hoodie',
    description: 'The Nike Sportswear Club Fleece Hoodie is made with soft fleece fabric for all-day comfort.',
    price: '59.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/sportswear-club-fleece-mens-pullover-hoodie-WWmVJg.png',
    category: 'Apparel',
    brand: 'Nike',
    size: 'M',
    color: 'Gray',
    stock: 35,
  },
  {
    name: 'Nike Air Jordan 1',
    description: 'The Air Jordan 1 Retro High OG brings back the classic silhouette with premium materials.',
    price: '179.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e6da41fa-1be4-4ce5-9be8-0f7b7d0b7b1a/air-jordan-1-retro-high-og-mens-shoes-Pz83Jr.png',
    category: 'Shoes',
    brand: 'Nike',
    size: 'US 10.5',
    color: 'Red/Black/White',
    stock: 15,
  },
]

export async function seedProducts() {
  try {
    console.log('Seeding products...')
    await db.insert(products).values(nikeProducts)
    console.log('Products seeded successfully!')
  } catch (error) {
    console.error('Error seeding products:', error)
    throw error
  }
}