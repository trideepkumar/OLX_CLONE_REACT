import React,{ useState,useContext }  from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';
import {useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { firebase } = useContext(FirebaseContext);

const handleSubmit = (e) => {
  e.preventDefault();
  let isValid = true;
  setUsernameError("");
  setEmailError("");
  setPhoneError("");
  setPasswordError("");

  if (!username || username.length < 3) {
    isValid = false;
    setUsernameError(" Valid Username is required");
  }
  if (!email) {
  isValid = false;
  setEmailError("Email is required");
  } else {
  // Email validation using regular expression
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(email)) {
    isValid = false;
    setEmailError("Invalid email format");
  }
  }

if (!phone || phone.length < 10) {
  isValid = false;
  setPhoneError("Phone is required");
}
if (!password ) {
  isValid = false;
  setPasswordError("Password is required");
}if(password.length < 6){
  isValid = false;
  setPasswordError("Password atleast contain 6 characters!");
}

if (isValid) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log("firebase saved! ");
      result.user.updateProfile({ displayName: username }).then(() => {
        firebase
          .firestore()
          .collection("users")
          .add({
          id: result.user.uid,
          username: username,
          phone: phone,
          })
          .then(() => {
               history.push("/login");
          });
       });
    });
   console.log(firebase);
   }
 };

return (
<div>
    <div className="signupParentDiv">
       <img width="200px" height="200px" src={Logo}></img>
         <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            defaultValue="John"
          />
          <br />
          {usernameError && <span className='error' style={{ color: "red" }}>{usernameError}</span>}
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            defaultValue="John"
          />
      <br/>
          {emailError && <span className='error' style={{ color: "red" }}>{emailError}</span>}
        <br />
      <label htmlFor="lname">Phone</label>
      <br />
            <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            defaultValue=""
            />
            <br />
            {phoneError && <span className='error' style={{ color: "red" }}>{phoneError}</span>}
            <br />
            <label htmlFor="lname">Password</label>
            <br />
                <input
                className="input"
                type="password"
                id="lname"
                name="password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            defaultValue=""
                          />
                          <br />
                          {passwordError && (
                            <span className='error' style={{ color: "red" }}>{passwordError}</span>
                          )}
                          <br />
                          <br />
          <button>Signup</button>
        </form>
        <Link to="/login"> Login</Link>
      </div>
    </div>
  );
}