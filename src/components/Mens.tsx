import React from 'react';
import NavBar from './HomaNavBar';
import ProductCart from './ProductCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const products = {
  MENS: {
    products: {
      1: {
        id: 1,
        title: "Product M",
        color: ["black"],
        category: "Category 1",
        img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        price: 50,
        rating: [4, 124],
      },
      2: {
        id: 2,
        title: "Product N",
        color: ["white"],
        category: "Category 2",
        img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        price: 70,
        rating: [4, 124],
      },
      3: {
        id: 3,
        title: "Product O",
        color: ["black"],
        category: "Category 3",
        img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        price: 50,
        rating: [4, 124],
      },
      4: {
        id: 4,
        title: "Product P",
        color: ["white"],
        category: "Category 4",
        img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        price: 70,
        rating: [4, 124],
      },
    },
  },
};

const Mens: React.FC = () => {
  const mensProducts = products.MENS.products;
  const dispatch = useDispatch();

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-blue-700 text-3xl font-bold mb-8">Men's Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.values(mensProducts).map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
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

export default Mens;
