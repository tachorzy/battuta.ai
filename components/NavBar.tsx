import Image from 'next/image'
import Link from 'next/link'
import NavLogo from './NavLogo'
import HamburgerIcon from './hamburgerMenu/HamburgerIcon'

const NavBar = () => {
    return(
        <div className="flex flex-row gap-x-48 justify-between items-center">
            <NavLogo/>
            <HamburgerIcon/>
        </div>
    )
}

export default NavBar;