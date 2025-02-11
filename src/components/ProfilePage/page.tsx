import { useEffect } from 'react';
import { useAuth } from '../../store/auth.store';
import { me } from '../../service/api';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const { token, profile, setProfile, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return;
    }

    me({ accessToken: token })
      .then((res) => {
        setProfile(res.data);
      })
      .catch(() => {
        console.log('logout');
        logout();
      });
  }, []);

  return (
    <>
      <div>id: {profile?.id}</div>
      <div>username: {profile?.username}</div>
      <button
        onClick={() => {
          logout();
          navigate('/auth/login');
        }}
      >
        Logout
      </button>
    </>
  );
};
