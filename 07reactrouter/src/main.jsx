import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub, {githubInfoLoader} from './components/GitHub/GitHub.jsx'
import Product from './components/Products/Product.jsx'
import Services from './components/Services/Services.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="product" element={<Product/>}/>
    <Route path="services" element={<Services/>}/>
    <Route path="user/" element={<User/>} >
    <Route path=":userid" element={<User/>}/>
</Route>
<Route 
loader={githubInfoLoader}
path='github' 
element={<GitHub />} />
<Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
