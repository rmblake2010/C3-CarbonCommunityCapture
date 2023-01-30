import { Route, Routes } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import Authentication from './routes/auth/authentication.component'
import Newsletter from './routes/newsletter/newsletter.component'
import ContactPage from './routes/contact-us/ContactPage.component'
import MissionStatement from './routes/mission-statement/mission-statement.component'
import CalculationPage from './routes/calculator/calculation-page.component'



function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/mission-statement' element={<MissionStatement/>}/>
        <Route path='/calculator' element={<CalculationPage/>}/>
        <Route path='/auth' element={<Authentication/>}/>
        <Route path='/newsletter' element={<Newsletter/>} />
        <Route path='/contact-us' element={<ContactPage/>} />
      </Route>
    </Routes>
  )
}

export default App
