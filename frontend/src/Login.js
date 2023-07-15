import React from 'react';
// import { useEffect } from 'react';
import axios from 'axios';


function Login() {
    

//     function LoginHandler(){
//             axios.get('http://localhost:8080/auth/google')
//           .then(response => {
//             if(response){
//             window.location.href = '/profile';
//             }
//           })
//           .catch(error => {
//             console.error(error);
//           })
// };


  return (
    <div>
      <h2>Login</h2>
      {/* <button onClick={LoginHandler}>Login with Google</button> */}
      <a href='https://localhost:8080/auth/google' > login</a>
    </div>
  );
}

export default Login;
