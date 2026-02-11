import { Route, Routes } from "react-router-dom"
import { PATH } from "../components"
import { Category, Home, NotFound, Products} from "../pages"

const DashboardRoute = () => {
  const dashboardList = [
    {id:1, path:PATH.home, element:<Home />},
    {id:2, path:PATH.products, element:<Products />},
    {id:3, path:PATH.category, element:<Category />},
    {id:4, path:PATH.notFound, element:<NotFound />},
  ]
  return (
    <Routes>
      {dashboardList.map(item => (
        <Route key={item.id} path={item.path} element={item.element} />
      ))}
    </Routes>
  )
}

export default DashboardRoute