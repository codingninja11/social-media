import React, { useEffect } from "react";
import { auth, provider, db } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const userCollectionRef = collection(db, "users");

  const addUser = async (user) => {
    const data = await getDocs(userCollectionRef);
    console.log(data);
    const userExists = data.docs.map((item) => item.data().email === user.email);
    console.log(userExists);
    if(!userExists.includes(true)){
      await addDoc(userCollectionRef, user);
    }
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = {
        id: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
      };
      addUser(user);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
