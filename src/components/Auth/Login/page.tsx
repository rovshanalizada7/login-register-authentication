import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthSchema, authSchema } from '../utils/schema';
import { login } from '../../../service/api';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../utils/save-token';
import { useAuth } from '../../../store/auth.store';

export const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: AuthSchema) => {
    try {
      const response = await login(data);
      saveToken(response.data);
      setToken(response.data.accessToken);
      navigate('/profile');
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        style={{ display: 'block' }}
        type="text"
        {...register('username')}
      />
      {errors?.username && <div>{errors.username.message}</div>}
      <input style={{ display: 'block' }} type="text" {...register('name')} />
      {errors?.name && <div>{errors.name.message}</div>}
      <input
        style={{ display: 'block' }}
        type="password"
        {...register('password')}
      />
      {errors?.password && <div>{errors.password.message}</div>}
      <button type="submit">login</button>
    </form>
  );
};
