import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
//  return(
//     <BrowserRouter>
//       <Routes>
//         <Route path = "/" element={<Home/>}/>
//         <Route path = "/about" element={<About/>}/>
//         <Route path = "/contact" element={<Contact/>}/>

//       </Routes>
//     </BrowserRouter>
//   )
  return (
     <div className="App">
       <Home />
       <About />
       <Contact />
       <Footer />
     </div>
   );


}

export default App;
