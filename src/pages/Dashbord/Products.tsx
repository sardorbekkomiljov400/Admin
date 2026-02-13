
 import { useContext, useEffect, useState } from "react"
import { Input, Select } from "../../components"
import type { CategoryType, ProductsType } from "../../@types"
import instance  from "../../hooks/instance"
import { Context } from "../../context/Context"

const Products = () => {
  const { token } = useContext(Context)
  const [categoryList, setCategoryList] = useState<CategoryType[]>([])
  const [products, setProducts] = useState<ProductsType[]>([])

  useEffect(() => {
    instance.get("/categories", { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => setCategoryList(res.data))
  }, [])

  useEffect(() => {
    instance.get("/products").then(res => setProducts(res.data))
  }, [])

  console.log(products);

  return (
    <div className="p-5">
      <div className="flex items-center gap-7.5">
        <Input 
          extraClass="!bg-slate-200 !py-3.5 !text-black !w-[300px]" 
          name="search" 
          placeholder="Qidirish" 
          type="text" 
        />
        <Select 
          list={categoryList} 
          extraClass="!bg-slate-200 !text-black !w-[300px]" 
        />
      </div>
      
      <ul>
      </ul>
    </div>
  )
}

export default Products