import "./Header.css";

import { FaUser } from "react-icons/fa";
import { GiTargetArrows } from "react-icons/gi";

import Input from "../Input/Input";

const Header = () => {
  return (
    <div className='header'>
      <GiTargetArrows size='32' className='logo' />
      <Input
        className='search'
        type='text'
        name='search-field'
        placeholder='Enter text'
      />
      <FaUser className='user' />
    </div>
  );
};

export default Header;
