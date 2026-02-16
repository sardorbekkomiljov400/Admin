import { useEffect, useState } from "react"
import { HomeCarousel, Input } from "../../components"
import HomeCard from "../../components/HomeCard"
import type {ProductsType} from "../../@types"

const Home = () => {
  const [products, setProducts] = useState<ProductsType[]>([])

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="min-h-screen bg-indigo-950 text-white">
      <header className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
        <Input extraClass="!bg-linear-to-r !from-slate-950 !via-slate-900 !to-indigo-950 !px-4 !py-2 !rounded-lg !outline-none !w-[350px] !h-[50px]" name="search"  placeholder="Qidirish" type="text"/>
      </header>
      <section className="px-6">
        <HomeCarousel />
        <div className="bg-linear-to-r from-slate-950 via-slate-900 to-indigo-950 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-2">Bugun zamonaviy mahsulotlarni kashf eting</h2>
        </div>
      </section>

      <section className="px-6 pb-10">
        <h3 className="text-xl mb-4 font-semibold">Mahsulotlar</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.slice(0, 8).map((item) => (
            <HomeCard key={item.id} {...item} />))}
        </div>
      </section>
    </div>
  )
}

export default Home
