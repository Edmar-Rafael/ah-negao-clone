import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";


function MyRoutes() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} exact>
        <Route path='*' element={<Navigate to='/:page'/>} />
      </Route>
      
    </Routes>
  )
}

export default MyRoutes