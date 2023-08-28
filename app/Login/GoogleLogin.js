// components/GoogleLogin.js
import firebase from "../../firebase"

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      // User logged in with Google successfully
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
};

export default GoogleLogin;
