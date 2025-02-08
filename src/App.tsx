import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/page';
import { ProfilePage } from './components/ProfilePage/page';
import { Register } from './components/Auth/Register/page';
import { Login } from './components/Auth/Login/page';
import { NonAuthCheck } from './components/NonAuthCheck';
import { RequireAuth } from './components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route element={<RequireAuth />}>
        <Route path="/" element={<ProfilePage />} />
      </Route>

      <Route element={<NonAuthCheck />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
