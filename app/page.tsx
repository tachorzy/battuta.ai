import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import { satoshi, satoshiMedium, satoshiBold } from '@/utils/localFonts';

export default function Home() {
  return (
    <main className="bg-medina-100 h-screen px-36 items-center justify-center">
      <NavBar/>
      <h1 className={satoshiMedium.className + " text-zellige-800 text-6xl pt-36 mb-8"}>Battuta</h1>
      <SearchBar/>

    </main>
  )
}
