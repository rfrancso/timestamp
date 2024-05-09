import React from 'react';

function ProfilePage() {
  // Mock user data
  const user = {
    name: 'Dr. Alireza Izaddoost',
    email: 'Izaddoost@csudh.com',
    bio: 'The best CS professor at California State University Dominguez Hills',
    avatar: 'csudh-california-state-university-dominguez-hills.jpg' // Ensure this is correct and the image is in the public/images folder
  };

  // Styles Object
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px'
    },
    avatar: {
      borderRadius: '50%',
      marginRight: '20px',
      width: '100px',
      height: '100px'
    },
    profileDetails: {
      lineHeight: '1.4'
    },
    about: {
      marginTop: '20px'
    },
    title: {
      fontSize: '1.5rem',
      color: '#333'
    },
    bio: {
      color: '#666'
    },
    button: {
      display: 'block',
      width: '100%',
      padding: '10px 20px',
      marginTop: '20px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Profile</h1>
      <div style={styles.header}>
        <img src={user.avatar} alt="User Avatar" style={styles.avatar} />
        <div style={styles.profileDetails}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div style={styles.about}>
        <h3>About Me</h3>
        <p style={styles.bio}>{user.bio}</p>
      </div>
      <button style={styles.button}>
        Post
      </button>
    </div>
  );
}

export default ProfilePage;
