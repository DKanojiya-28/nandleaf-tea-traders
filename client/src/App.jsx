import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import ProductAdmin from "./pages/ProductAdmin"

function ProtectedRoute({ children }) {

  const token = localStorage.getItem(
    "adminToken"
  )

  return token
    ? children
    : <Navigate to="/login" />

}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Website */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>

              <Admin />

            </ProtectedRoute>
          }
        />

        {/* Product Management */}
        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>

              <ProductAdmin />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App