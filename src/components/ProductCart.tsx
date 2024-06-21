// components/ProductCart.tsx
import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';


interface ProductCartProps {
  id: number;
  img: string;
  title: string;
  category: string;
  price: number;
  color:string
}

const ProductCart: React.FC<ProductCartProps> = ({ id, img, title, category, price, color }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, img, price,color, category, quantity: 1 }));
  };

  return (
    <div className="product-card">
      <Link to='/Description' className='LinkName'>
        <div>
          <img src={img} alt={title} />
        </div>
        <div className='p-4'>
        <p className="text-sm text-gray-500">{color}</p>
          <p className="text-sm text-gray-500">{category}</p>
          <h2 className="text-lg font-semibold">{title}</h2>
          <h5 className="text-lg font-semibold">${price}.00</h5>
        </div>
      </Link>
      <div className='p-4'>
        <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCart;
