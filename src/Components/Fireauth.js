import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import TodoListHooks from "./TodoListHooks";
// import './App.css';

function Fireauth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(false);


  let create = async () => {

try {
  setLoader(true)
  let res = await auth.createUserWithEmailAndPassword(email, password);
  setLoader(false)
} catch (error) {
  setLoader(false)
  alert(error + " Enter user-name(....@gmail.com is compulsory ) and password Then click on Create Button If you are a new user or login first time")
}
    // let res = await auth.createUserWithEmailAndPassword(email, password);
    // console.log(res);
  };

  useEffect(() => {
    let unsub = auth.onAuthStateChanged((user) => setUser(user));
    return () => {
      unsub();
    };
  }, []);

  let logout = async () => {
    await auth.signOut();
  };
  let signin = async () => {
  try {
    setLoader(true)
    await auth.signInWithEmailAndPassword(email, password);
    setLoader(false);
  } catch (error) {
    setLoader(false)
     alert(error +" NOTE=>Enter user-name(....@gmail.com is compulsory ) and password Then click on Create Button If you are a new user or login first time");
  }
    
    // await auth.signInWithEmailAndPassword(email, password);


  };

  return (
    <>
    {(loader) ? (<h4 >Wait Verifying User...Page is Loading...</h4>) :  null}
      {user == null ? (
        <div>
          <div>
            {/* <label htmlFor="email">Email </label> */}
            <input
              type="text"
              className="button2"
              placeholder="username@gmail.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              className="button2"
              required
              value={password}
              placeholder="Min Six Digit Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="buttonDiv">
            <button className="button1" onClick={signin}>Sign In Existing User</button>
          </div>
          <div className="buttonDiv"  > 
            <button  className="button1" onClick={create}> Create New User</button>
          </div>
        </div>
      ) : (
        <>
          <button  className="buttonLogout" onClick={logout}>Logout</button>
          <TodoListHooks />
        </>
      )}
    </>
  );
}

export default Fireauth;
