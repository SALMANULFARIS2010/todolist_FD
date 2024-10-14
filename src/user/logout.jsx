import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("jlkj")
    // Clear user session (e.g., remove token from local storage)
    localStorage.removeItem('token');
   
    
    // Navigate to login page
    navigate('/login');
  };

  useEffect(() => {
    // Disable back button
    const handlePopState = (event) => {
      this.props.history.go(1);
      navigate('/login');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;