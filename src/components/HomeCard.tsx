import type { ProductsType} from "../@types"

const HomeCard = ({ title, price, images }: ProductsType) => {
  return (
    <div className="bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-xl p-3 hover:bg-[#222] transition">
      <img
        src={images?.[0]}
        className="h-40 w-full object-cover rounded-lg mb-3"
      />

      <h4 className="text-sm font-medium">{title}</h4>
      <p className="text-white/60 text-sm">${price}</p>
    </div>
  )
}

export default HomeCard
