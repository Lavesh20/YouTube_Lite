
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { AppContext } from './Context/ContextAPI'
import { Feed } from './components/Feed'
import { Header } from './components/Header'
import { SearchResult } from './components/SearchResult'
import VideoDetails from './components/VideoDetails'

const  App = ()=>{
  return (
    <div>
      <AppContext>
        <BrowserRouter>
                 <div className="flex flex-col h-full"></div>
                 <Header/>
                <Routes>
                  <Route path="/" exact element={<Feed/>}/>
                  <Route path="/SearchResult/:searchQuery" element = {<SearchResult/>} />
                  <Route path="/video/:id" element = {<VideoDetails/>}/>

                </Routes>
        </BrowserRouter>
      </AppContext>
      
    </div>
  )
}


export default App
