import MenuBar from './components/MenuBar'
import Carousel from './components/Carousel'
import Test from './components/Test'
import { useState } from 'react'

const App = () => {
  const [alertVisibility, setAlertVisibility] = useState(false)

  return (
    <>
      <MenuBar />
      <Carousel />
      <Test />
    </>
  )
}

export default App
