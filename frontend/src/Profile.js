import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('Profile');
    axios.get('http://localhost:8080/profile', { withCredentials: true })
  .then(response => {
    console.log(response.data);
    const data = response.data;
    setUser(data);
    console.log('data');
  })
  .catch(error => {
    console.error(error);
  });

    // fetch('http://localhost:8080/profile')
    //   .then(response => response.json())
    //   .then(data => setUser(data))
    //   .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <a href="/logout">logout</a>
          {/* Display other user information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
