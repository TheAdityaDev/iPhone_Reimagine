import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple logo" width={25} height={35} />

        <div className="flex flex-1 justify-center gap-4 max-sm:hidden">
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/product'>Product</NavLink>

        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={25} height={35} />
          <img src={bagImg} alt="bag" width={25} height={35} />
        </div>

        <Link to="/login" className="size-12  pl-6 hover:underline">Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;
