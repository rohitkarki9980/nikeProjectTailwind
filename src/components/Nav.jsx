import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../Constants/index";
import cross from "../assets/icons/cross.svg";
import { useState } from 'react';

const Nav = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
 
  const handleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  const handleCross = () => {
    setShowSubMenu(false);
  }

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px] mr-8"
          />
        </a>

        <ul className="flex-1 flex justify-evenly items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="hidden max-lg:block">
          <div onClick={handleSubMenu} className="cursor-pointer" style={{display:showSubMenu ? "none" : "block"}}>
          <img src={hamburger} alt="hamburger" width={25} height={25} />
          </div>
          {showSubMenu && (
            <div className="subMenu absolute right-0 pr-10  p-2 rounded-lg bg-slate-300">
              <img src={cross} width={25} height={25} className="absolute right-0 top-0 cursor-pointer " onClick={handleCross}/>
              <ul className="flex flex-col gap-8">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-lg text-coral-red"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
