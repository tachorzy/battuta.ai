import SearchBar from "../components/SearchBar";
import { satoshi, satoshiMedium, satoshiBold } from '../utils/localFonts';

export default function Home() {
  return (
    <main className="bg-medina-100 h-screen pl-24 py-24">
      <h1 className={satoshiMedium.className + " text-zellige-800 text-6xl mb-12"}>Battuta</h1>
      <SearchBar/>

    </main>
  )
}
