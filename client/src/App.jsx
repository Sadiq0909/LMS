import Login from './pages/Login'
import Navbar from './components/Navbar'
import Profile from './pages/student/Profile'
import HeroSection from './pages/student/HeroSection'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Courses from './pages/student/Courses'
import MyLearning from './pages/student/MyLearning'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element: <>
        <HeroSection/>
        <Courses/>
        </>
      },
      {
        path:"/login",
        element : <Login/>
      },
      {
        path:"/my-learning",
        element : <MyLearning/>
      },
      {
        path:"/profile",
        element : <Profile/>
      }
    ]
  }
])

function App() {

  return (
    <main>
      {/* <Navbar/>
      <HeroSection />
      <Login /> */}
      <RouterProvider router ={appRouter}/>
    </main>
  )
}

export default App
