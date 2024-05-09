import React from 'react';

function ProfilePage() {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatar: '/path/to/default/avatar.jpg' // Make sure you have an avatar image in your public folder
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>User Profile</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src={user.avatar} alt="User Avatar" style={{ borderRadius: '50%', marginRight: '20px', width: '100px', height: '100px' }} />
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div>
        <h3>About Me</h3>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
