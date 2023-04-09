
 
import About from "./Component/About";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./Component/Alert";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Alert msg={"wecome to Arnab!!classroom"}/>
<NoteState>
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          
        </Routes>
        </div>
        </NoteState>
      </BrowserRouter>
    </>
  );
}

export default App;

