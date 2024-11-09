import { useAuthContext } from "./context/AuthContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { Navigate, Route, Routes } from "react-router-dom"
function App() {
  const { authUser } = useAuthContext()
  return (
    <div className='max-w-7xl min-h-screen flex items-center justify-center m-auto p-0'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />}/>
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />}/>
        <Route path='/signup' element={ authUser ? <Navigate to="/" /> : <Signup />}/>
      </Routes>
    </div>
  )
}

export default App
