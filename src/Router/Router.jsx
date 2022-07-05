import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from '../Components/Screens/HomePage/homePage'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
        </Routes>
    </BrowserRouter>
  )
}