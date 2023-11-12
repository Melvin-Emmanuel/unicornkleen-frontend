import { createBrowserRouter } from "react-router-dom"
// import HomePage from "../Pages/HomePage"
// import ServicesPages from "../Pages/ServicesPages"
import Landing from "../Pages/Landingpage/Landing"
import Service from "../Pages/service"


const Index = createBrowserRouter([
//    
   
    {
        path: "/",
        index:true,
        element:<Landing/>
    },
    {
        path: "/Services",
        element:<Service/>
    }
])


export default Index