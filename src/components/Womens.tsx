import React from 'react';
import NavBar from './HomaNavBar';
import ProductCart from './ProductCart';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

const products = {
  WOMENS: {
    products: {
      21: {
        id: 21,
        title: "Product A",
        color: ["black"],
        category: "Category 1",
        img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        price: 50,
        rating: [4, 124],
        sizes: [
          { name: "XS", inStock: true },
          { name: "SM", inStock: true },
          { name: "MD", inStock: true },
          { name: "LG", inStock: false },
          { name: "XL", inStock: true },
          { name: "2XL", inStock: true },
        ],
        description: {
          about: "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
          highlight: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
          ],
          details: "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
        },
      },
      22: {
        id: 22,
        title: "Product B",
        color: ["white"],
        category: "Category 2",
        img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        price: 70,
        rating: [4, 124],
        sizes: [
          { name: "XS", inStock: true },
          { name: "SM", inStock: true },
          { name: "MD", inStock: true },
          { name: "LG", inStock: true },
          { name: "XL", inStock: true },
          { name: "2XL", inStock: false },
        ],
        description: {
          about: "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
          highlight: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
          ],
          details: "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
        },
      },
      23: {
        id: 23,
        title: "Product C",
        color: ["black"],
        category: "Category 3",
        img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        price: 50,
        rating: [4, 124],
        sizes: [
          { name: "XS", inStock: true },
          { name: "SM", inStock: true },
          { name: "MD", inStock: true },
          { name: "LG", inStock: false },
          { name: "XL", inStock: true },
          { name: "2XL", inStock: true },
        ],
        description: {
          about: "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
          highlight: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
          ],
          details: "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
        },
      },
      24: {
        id: 24,
        title: "Product D",
        color: ["white"],
        category: "Category 4",
        img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        price: 70,
        rating: [4, 124],
        sizes: [
          { name: "XS", inStock: true },
          { name: "SM", inStock: true },
          { name: "MD", inStock: true },
          { name: "LG", inStock: true },
          { name: "XL", inStock: true },
          { name: "2XL", inStock: false },
        ],
        description: {
          about: "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
          highlight: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
          ],
          details: "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
        },
      },
    },
  },
}

const Womens: React.FC = () => {
  const womensProducts = products.WOMENS.products;
  const dispatch = useDispatch();

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className='text-red-700 text-3xl font-bold mb-8'>Women's Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.values(womensProducts).map((product) => (
            <div key={product.id} className="product-card bg-white shadow-md rounded-lg overflow-hidden">
              <ProductCart
                id={product.id}
                img={product.img}
                color={product.color[0]}
                category={product.category}
                title={product.title}
                price={product.price}
              />
              <button 
                
                onClick={() => handleAddToCart(product)}
              >
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Womens;
