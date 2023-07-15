import React, { useEffect } from 'react';
import axios from 'axios';

function Logout() {
  useEffect(() => {
    axios.get('http://localhost:8080/logout', { withCredentials: true })
      .then(response => {
        // Redirect to the login page or handle the logout process as needed
        window.location.href = '/';
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Logging out...</h2>
      {/* You can display a loading message or spinner here */}
    </div>
  );
}

export default Logout;
