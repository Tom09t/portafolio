import { Header } from './components/header/Header.jsx'
import { Presentation } from './pages/presentation/Presentation.jsx'
import './App.css'
import { AboutMe } from './pages/aboutMe/AboutMe.jsx'

export const App = () => {
  return (
    <>
        <Header/>
        <Presentation/>
        <AboutMe/>
    </>
  )
}
