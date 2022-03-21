import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav style={
        {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }
      }>
        <Link to="/"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button 
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              textDecoration: "none",
              color: "white",
              backgroundColor: "green",
              margin: "10px",
              fontSize: "30px",
              border: "1px solid white",
              borderRadius:"1rem",
              fontFamily: "Abril Fatface",

            }}
            onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
