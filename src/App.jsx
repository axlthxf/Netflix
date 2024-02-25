import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="text-black  bg-black bg-opacity-50 bg-[url('https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg')] bg-blend-darken  min-h-screen ">

        <Header />
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<Login/>}/>
        </Routes>
        <Main/>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App; 
