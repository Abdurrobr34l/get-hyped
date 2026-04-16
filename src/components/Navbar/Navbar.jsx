import React from 'react';
import NavLink from '../UI/NavLink';
import Button from '../UI/Button';
import Fire from '../../assets/fire-icon.png';

const Navbar = () => {
  return (
    <div className='py-10'>
      <Button children={"Get Results"} icon={Fire} iconAlt={"It is an flame image"}/>
      
      <NavLink children={"Navlink"}/>
    </div>
  );
};

export default Navbar;