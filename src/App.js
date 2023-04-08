import Navbar from './Navbar'; 
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './Create';
import BlogPage from './BlogPage';
import NotFoundPage from './NotFoundPage';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/blogs/:id" element={<BlogPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
           </Routes>
        </div>
      </div>
   </BrowserRouter>
  );
}

export default App;
