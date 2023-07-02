import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Template from './components/template'
import Dashboard from './pages/Dashboard'

export default function RRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Template />}>
                    <Route path="/" element = {<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}