import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Template from './pages/template'
import Dashboard from './pages/Dashboard'
import DashboardProduct from './pages/DasboardProduct'
import DashboardClient from './pages/DashboardClient'

export default function RRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Template />}>
                    <Route path="/" element = {<Dashboard />} />
                    <Route path="/dashboard/produtos" element = {<DashboardProduct />} />
                    <Route path="/dashboard/clientes" element = {<DashboardClient />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}