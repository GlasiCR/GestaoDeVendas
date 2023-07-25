import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import Template from './pages/template'
import Dashboard from './pages/dashboard/Dashboard'
import DashboardProduct from './pages/dashboard/DashboardProduct'
import DashboardClient from './pages/dashboard/DashboardClient'
import Products from './pages/produtos/Products'
import Predictions from './pages/predictions/Predictions'
import PredictionsClient from './pages/predictions/PredictionsClient'
import LoginScreen from './pages/loginScreen'

export default function RRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="dashboard" element={<Template />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dashboard/produto/:id" element={<DashboardProduct />} />
                        <Route path="/dashboard/cliente/:id" element={<DashboardClient />} />
                        <Route path="produtos" element={<Products />} />
                        <Route path="predicoes" element={<Predictions />} />
                        <Route path="/dashboard/predicoes/:id" element={<PredictionsClient />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


//a2PrJyVPX3MCeCUE