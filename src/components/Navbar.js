import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Plymouth Montessori</h1>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-x-4 md:space-y-0 md:items-center`}
        >
          <li>
            <Link to="/welcome" className="hover:text-blue-300">
              Welcome
            </Link>
          </li>
          <li>
            <Link to="/montessori-theory" className="hover:text-blue-300">
              Montessori Theory
            </Link>
          </li>
          <li>
            <Link to="/locations" className="hover:text-blue-300">
              Locations
            </Link>
          </li>
          <li>
            <Link to="/tuition" className="hover:text-blue-300">
              Tuition
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
