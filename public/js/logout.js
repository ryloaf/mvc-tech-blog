// define asynchronous function to handle user logout
const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    // if the response is ok, redirect to the home page
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out!');
    }
  };
  
  // add an event listener to the logout button that triggers the logout on click
  document.querySelector('#logout').addEventListener('click', logout);