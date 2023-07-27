import Image from 'next/image'
import { satoshi, satoshiMedium, satoshiBold } from '@/utils/localFonts';

const NavLogo = () => {
    return(
        <div className="flex flex-row">
            <Image src="/icons/noun-camel-3768875-6DAD93.svg" width={150} height={150} className="object-fit" alt="Battuta Logo" />
            <h1 className="text-neutral-950 text-6xl pt-36 mb-8">Battuta</h1>
        </div>
    )
}

export default NavLogo;