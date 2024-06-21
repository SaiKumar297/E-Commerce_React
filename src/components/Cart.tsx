import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { RxCross1 } from 'react-icons/rx';
import CartProduct from './CartProduct';

const Cart = ({ setOpenCart }: { setOpenCart: (value: boolean) => void }) => {
  const products = useAppSelector((store) => store.cart.items);

  const getTotal = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div>
      <RxCross1 onClick={() => setOpenCart(false)} />
      <h3>Your Cart</h3>
      <div className="cart-container">
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
      <div>
        <p>Total</p>
        <p>${getTotal()}</p>
      </div>
      <div>
        <button>View Cart</button>
      </div>
      <div>
        <button>Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
