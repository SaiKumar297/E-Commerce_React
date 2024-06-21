import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useAppSelector } from '../redux/hooks';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const count = useAppSelector((store) => store.cart.items.length);

  return (
    <>
      <nav className="bg-gray-200 shadow-lg">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <a className="flex items-center" href="#">
            <img
              src="https://t4.ftcdn.net/jpg/03/32/31/65/360_F_332316530_ofa4oQA3ZGWxd4tRLDqKuADfy2hnpWuU.jpg"
              width="80"
              height="80"
              alt="Brand"
            />
          </a>
          <button
            className="block lg:hidden p-2 border rounded bg-gray-300"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="w-full lg:flex lg:items-center lg:w-auto hidden lg:block" id="navbarSupportedContent">
            <ul className="flex flex-col lg:flex-row lg:space-x-6 lg:ml-4 mt-3 lg:mt-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active text-lg hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Mens" className="nav-link active text-lg hover:text-blue-500">
                  Mens
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Womens" className="nav-link active text-lg hover:text-blue-500">
                  Womens
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Kids" className="nav-link active text-lg hover:text-blue-500">
                  Kids
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <Link to="/cart" className="flex items-center text-lg hover:text-blue-500">
              <FiShoppingCart className="mr-2" />
              <span>{count}</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
