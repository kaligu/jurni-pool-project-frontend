/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */

import './App.css'
import FullLoadScreen from './components/FullLoadScreen'
import LoginView from './view/login/LoginView'


function App() {

  return (
    <>
      <LoginView/>
      <FullLoadScreen loadingTime={1}/>
    </>
  )
}

export default App
