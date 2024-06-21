import React from 'react';
import { useAppSelector } from '../redux/hooks';
import CartProduct from './CartProduct';
import NavBar from './HomaNavBar';

const CartPage = () => {
  const products = useAppSelector((store) => store.cart.items);

  const getTotal = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto py-8">
        <h3 className="text-2xl font-semibold mb-6">Your Cart</h3>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="cart-container space-y-4">
            {products?.map((item: any) => (
              <CartProduct
                key={item.id}
                id={item.id}
                img={item.img}
                color={item.color}
                title={item.title}
                price={item.price}
                category={item.category}
                quantity={item.quantity}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="text-xl font-medium">Total</p>
              <p className="text-2xl font-bold">${getTotal()}</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                View Cart
              </button>
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
