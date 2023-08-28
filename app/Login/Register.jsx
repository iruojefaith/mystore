// components/Register.js

import firebase from "../../firebase"
import GoogleLogin from "./GoogleLogin";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // User registered successfully
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-row ">
      <h2>Register</h2>
      <div className="flex flex-row ">
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
       <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      
     
      <button onClick={handleRegister}>Register</button>

        <GoogleLogin />
      
    </div>
  );
};

export default Register;
