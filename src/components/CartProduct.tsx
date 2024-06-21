// components/CartProduct.tsx
import React from 'react';

interface CartProductProps {
  id: number;
  img: string;
  title: string;
  price: number;
  category: string;
  quantity: number;
  color:string
}

const CartProduct: React.FC<CartProductProps> = ({
  img,
  color,
  title,
  price,
  category,
  quantity,
}) => {
  return (
    <div className="cart-product flex items-center justify-between border-b border-gray-300 py-2">
      <div className="flex items-center">
        <img src={img} className="w-20 h-20 object-cover mr-4" />
        <div>
          <h4 className="font-bold">{title}</h4>
          <p>{color}</p>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span>Quantity: {quantity}</span>
      </div>
    </div>
  );
};

export default CartProduct;
