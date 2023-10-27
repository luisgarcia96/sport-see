import SideBar from "./layouts/sideBar/sideBar"
import TopBar from "./layouts/topBar/topBar"

import "./styles/main.scss"

function App() {

  return (
    <div className='App'>
      <TopBar />
      <SideBar />
    </div>
  )
}

export default App
