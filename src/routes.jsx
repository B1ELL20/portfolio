import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Thanks from './pages/Thanks'

const App = () => {
  
  return (
    <HashRouter basename='/'>
        <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/thanks' element={<Thanks/>} />
        </Routes>
    </HashRouter>
  )
}

export default App
