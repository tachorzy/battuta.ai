import Image from 'next/image'
import Link from 'next/link'
import NavLogo from './NavLogo'

const NavBar = () => {
    return(
        <div className="flex flex-row justify-between items-center">
            <NavLogo/>
        </div>
    )
}

export default NavBar;