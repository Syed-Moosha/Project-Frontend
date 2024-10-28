import { Button } from "@mui/material";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";


const Signin = () => {

    const navigate = useNavigate()
  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/main")
    } catch (error) {
      console.log(error);
    }
  };

console.log('====================================');
console.log(auth);
console.log('====================================');

  return (
    <div style={{ position: "absolute", left: "28%",padding:"150px" }}>
      <div
        style={{
          border: "1px solid grey",
          padding: "20px",
          textAlign: "center",
          borderRadius: "5px",
          minHeight:"310px",
          maxWidth:"350px"
        }}
      >
        <h1 style={{ fontWeight: "200" }}>Create your google clone account</h1>
        <h3 style={{ fontWeight: "200" }}>Click the Signin Button</h3>
        <Button variant="contained" onClick={googleSignin} >Signin with Google</Button>
      </div>
    </div>
  );
};

export default Signin;
