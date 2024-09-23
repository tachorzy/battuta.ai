import Image from 'next/image'
import { satoshi, satoshiMedium, satoshiBold } from '@/utils/localFonts';

const NavLogo = () => {
    return(
        <div className="flex flex-row relative align-middle">
                <Image src="/icons/noun-duck-2115785.svg" width={"0"} height={"0"} className="object-cover h-[4.5rem] w-[4.5rem] mt-4" alt="Battuta Logo" />
                <h1 className={satoshiMedium.className + " text-neutral-700 text-5xl absolute ml-20 py-8 text-bold align-text-bottom"}>Battuta</h1>
        </div>
    )
}

export default NavLogo;