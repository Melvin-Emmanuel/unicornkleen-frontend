import { createBrowserRouter } from "react-router-dom"
// import HomePage from "../Pages/HomePage"
// import ServicesPages from "../Pages/ServicesPages"
import Landing from "../Pages/Landingpage/Landing"


const Index = createBrowserRouter([
//    
   
    {
        path: "/",
        element:<Landing/>
    }
])


export default Index