import Single from "./pages/single/Single";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Postslist from "./components/posts/Postslist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Topbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} path="/"/>} />
        <Route path="/register" element={<Register />}/>
        <Route path="/write" element={isLoggedIn ? <Write /> : <Login setIsLoggedIn={setIsLoggedIn} path="/write"/> } />
        {Postslist.map((post) => 
          <Route path={`/posts/${post.title}`} element={<Single post={post} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;