import React, { useEffect, useState } from 'react';
import Student from './pfp/Student.js';
import Teacher from './pfp/Teacher.js';

const Profile = () => {
  const [profileComponent, setProfileComponent] = useState(null);

  useEffect(() => {
    const fetchProfileComponent = async () => {
      const userData = JSON.parse(localStorage.getItem('userInfo'));
      console.log(userData?.data?.data?.type);

      if (userData == null) {
        window.location.href = '/login'; // Redirect user to the login page to access pfp
      } else if (userData.type === 'admin') {
        window.location.href = '/dashboard'; // Redirect admins to the admin dashboard
      } else if (userData?.data?.data?.type === 'student') {
        setProfileComponent(<Student />);
      } else if (userData.type === 'teacher') {
        console.log('teacher page');
        setProfileComponent(<Teacher />);
      }
    };

    fetchProfileComponent();
  }, []);

  return profileComponent;
};

export default Profile;