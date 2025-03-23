import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import AccountSetting from './components/AccountSetting'


function App() {

  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-[#F7F8F9]'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<CreateAccount/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/account' element={<AccountSetting/>}></Route>
      </Routes>
      

    </div>
  )
}

export default App
