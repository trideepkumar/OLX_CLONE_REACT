import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import {useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';

// function Login() {
//   const [email,setEmail] = useState('');
//   const [password,setPassword] =useState('');
//   const {firebase} = useContext(FirebaseContext);
//   const history = useHistory()
//   const handleLogin = (e) => {
//     e.preventDefault();
//     let isValid = true;
//     if (email == '') {
//       isValid = false;
//       alert("Email is required");
//     }
//     if (!password) {
//       isValid = false;
//       alert("Password is required");
//     }
//     if (isValid) {
//       firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .then(() => {
//           alert("successfully logged in!");
//           history.push("/");
//         })
//         .catch((err) => {
//           console.log(err.message);
//           alert("user not registered!");
//         });
//     }
//   };

//   return (
//     <div>
//       <div className="loginParentDiv">
//         <img width="200px" height="200px" src={Logo}></img>
//         <form onSubmit={handleLogin}>
//           <label htmlFor="fname">Email</label>
//           <br />
//           <input
//             className="input"
//             type="email"
//             id="fname"
//             name="email"
//             value={email}
//             onChange = {(e)=>{setEmail(e.target.value)}}
//             defaultValue="John"
//           />
//           <br />
//           <label htmlFor="lname">Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             id="lname"
//             name="password"
//             value={password}
//             onChange = {(e)=>{setPassword(e.target.value)}}
//             defaultValue="Doe"
//           />
//           <br />
//           <br />
//           <button>Login</button>
//         </form>
//        <Link to='/signup'> Signup</Link>
//       </div>
//     </div>
//   );
// }

// export default Login;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!email) {
      isValid = false;
      setEmailError("Email is required");
    } else {
      // Email validation using regular expression
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        isValid = false;
        setEmailError("Invalid email format");
      }
    }

    if (!password || password == '' ||password.length < 6) {
      isValid = false;
      setPasswordError("Invalid Password Entered!!");
    }

    if (isValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          history.push("/");
        })
        .catch((err) => {
          console.log(err.message);
          setPasswordError("User Not Registered !");
        });
    }
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            defaultValue="John"
          />
          <br />
          {emailError && <span className='error' style={{ color: "red" }}>{emailError}</span>}
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
            defaultValue="Doe"
          />
          <br />
          {passwordError && <span className='error' style={{ color: "red" }}>{passwordError}</span>}
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup"> Signup</Link>
      </div>
    </div>
  );
}

export default Login;