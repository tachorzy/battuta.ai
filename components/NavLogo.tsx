import Image from 'next/image'
import { satoshi, satoshiMedium, satoshiBold } from '@/utils/localFonts';

const NavLogo = () => {
    return(
        <div className="flex flex-row relative align-middle">
                <Image src="/icons/noun-camel-3768875-6DAD93.svg" width={100} height={100} className="object-scale-down" alt="Battuta Logo" />
                <h1 className={satoshiMedium.className + " text-neutral-700 text-5xl text-bold py-11 align-text-bottom"}>Battuta</h1>
        </div>
    )
}

export default NavLogo;